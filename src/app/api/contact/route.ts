'use server'
import { NextResponse } from "next/server"
import axios from "axios"
import { Resend } from "resend"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(5),
  gRecaptchaToken: z.string(),
})

export async function POST(request: Request, response: Response) {
  const secretKey = process?.env?.RECAPTCHA_SECRET_KEY
  const resend = new Resend(process?.env?.RESEND_API)

  const postData = await request.json()
  const result = schema.safeParse(postData)

  if (!result.success) return new Response("Invalid data", { status: 400 })
  const { name, email, subject, message, gRecaptchaToken } = result.data

  console.log(
    "gRecaptchaToken,firstName,lastName,email,hearFromSponsors:",
    gRecaptchaToken?.slice(0, 10) + "...",
    name,
    email,
    subject,
    message
  )

  let res: any
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`
  try {
    res = await axios.post("https://www.google.com/recaptcha/api/siteverify", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
  } catch (e) {
    console.log("recaptcha error:", e)
  }

  if (res && res.data?.success && res.data?.score > 0.3) {
    // Save data to the database from here
    /* console.log("Saving data to the database:", firstName, lastName, email, hearFromSponsors) */

    const { data } = await resend.emails.send({
      from: "form@risk-horizon.be",
      to: email,
      subject: "Votre message Risk Horizon",
      html:
        "<p>" +
        name +
        ",</p><p>Merci pour votre demande. Elle a bien été enregistré et sera prise en charge d'ici très bientôt.</p>",
    })

    console.log("email sent to user:", data)

    const { data: data2 } = await resend.emails.send({
      from: "form@risk-horizon.be",
      to: "info@risk-horizon.be",
      subject: "Form : New submission from " + name,
      html: "<p>From: " + name + " (" + email + ")</p><p>Subject: " + subject + "</p><p>Message: " + message + "</p>",
    })
    console.log("email sent to " + data2)

    return new NextResponse("Success", { status: 200 })
  } else {
    console.log("fail: res.data?.score:", res.data?.score)
    return new NextResponse("Invalid recaptcha", { status: 400 })
  }
}
