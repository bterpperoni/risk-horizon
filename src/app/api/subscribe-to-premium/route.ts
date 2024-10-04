'use server'

import { Resend } from 'resend'

export async function POST (request: Request, response: Response) {
  // const data = await request.json()
  // const resend = new Resend(process?.env?.RESEND_API)

  // resend.contacts.create({
  //   email: data.email,
  //   unsubscribed: false,
  //   audienceId: 'b4ddfed7-0b48-4c7d-b7ba-9286b42489fe'
  // })

  // const data = await request.json()
  // console.log("data:", data)

  return new Response('OK', { status: 200 })

  // if (data.email) {
  //   await db.user.create({
  //     data: {
  //       email: data.email,
  //     },
  //   })
  // }
  // return new Response("OK", { status: 200 })
}
