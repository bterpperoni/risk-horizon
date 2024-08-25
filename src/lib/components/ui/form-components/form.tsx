"use client"
import React from "react"
import { Button } from "../buttons/Button"
import { Input } from "./Input"
import { Textarea } from "../textarea"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { useMutation } from "@tanstack/react-query"
import { CircleCheck, Loader2 } from "lucide-react"
import { toast } from "sonner"
import axios from "axios"
import { set, z } from "zod"
interface FormProps {
  extended?: boolean
  className?: string
}
function Form({ extended, className }: FormProps) {
  const [nameValue, setNameValue] = React.useState("")
  const [emailValue, setEmailValue] = React.useState("")
  const [subjectValue, setSubjectValue] = React.useState("")
  const [messageValue, setMessageValue] = React.useState("")

  const [nameValid, setNameValueValid] = React.useState(true)
  const [emailValid, setEmailValueValid] = React.useState(true)
  const [subjectValid, setSubjectValueValid] = React.useState(true)
  const [messageValid, setMessageValueValid] = React.useState(true)

  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubmitForm = function (e: any) {
    e.preventDefault()
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet")

      return
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      mutate(gReCaptchaToken)
    })
  }

  const { data, mutate, isPending, isSuccess, isError, error, status } = useMutation({
    mutationKey: ["submit"],
    mutationFn: async (token: string) => {
      const { data } = await axios.post(
        "/api/submit",
        {
          name: nameValue,
          email: emailValue,
          subject: subjectValue,
          message: messageValue,
          gRecaptchaToken: token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      return data
    },
    onSuccess: () => {},
    onError: () => {
      toast.error("Une erreur est survenue lors de l'envoi du message")
    },
  })

  console.log(extended)
  return (
    <section className={className}>
      <div className="container grid items-center gap-6 px-4 text-center md:px-6">
        {isSuccess ? (
          <div className="flex justify-center items-center flex-col h-96">
            <CircleCheck color="green" className="w-14 h-14 mb-6" />
            <p className="text-green-700 text-2xl font-bold mb-2">Votre message a bien été envoyé</p>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-md/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
              Un mail de confirmation vous a été envoyé.
              <br /> Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight ">Contactez nous :</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {"N'hésitez pas à nous contacter pour en savoir plus sur nos programmes et services."}
              </p>
              <h3 className="!mt-10 !mb-10 text-xl font-bold tracking-tighter md:text-2xl/tight text-[#5f3494] hover:underline">
                <a href="mailto:info@risk-horizon.be">info@risk-horizon.be</a>
              </h3>
              <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight !mb-10 ">ou</h3>
              {extended && (
                <>
                  <h4 className="text-xl font-semibold tracking-tighter md:text-2xl/tight !mb-10">
                    Tel : +32 494876620
                  </h4>
                  <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight ">ou</h3>
                </>
              )}
            </div>
            <div className="mx-auto w-full max-w-[400px] space-y-4">
              <form className="grid gap-4 " onSubmit={handleSubmitForm}>
                <p className="w-full text-start font-bold">{"Formulaire :"}</p>
                <Input
                  placeholder="Nom"
                  type="text"
                  onChange={(e) => setNameValue(e.target.value)}
                  value={nameValue}
                  invalid={!nameValid}
                  onBlur={() => {
                    if (z.string().min(2).safeParse(nameValue).success) {
                      setNameValueValid(true)
                    } else {
                      setNameValueValid(false)
                    }
                  }}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  onChange={(e) => setEmailValue(e.target.value)}
                  value={emailValue}
                  invalid={!emailValid}
                  onBlur={() => {
                    if (z.string().email().safeParse(emailValue).success) {
                      setEmailValueValid(true)
                    } else {
                      setEmailValueValid(false)
                    }
                  }}
                />
                <Input
                  placeholder="Sujet"
                  type="text"
                  onChange={(e) => setSubjectValue(e.target.value)}
                  value={subjectValue}
                  invalid={!subjectValid}
                  onBlur={() => {
                    if (z.string().min(2).safeParse(subjectValue).success) {
                      setSubjectValueValid(true)
                    } else {
                      setSubjectValueValid(false)
                    }
                  }}
                />
                <Textarea
                  placeholder="Votre message"
                  onChange={(e) => setMessageValue(e.target.value)}
                  value={messageValue}
                  className={messageValid ? " h-40" : "h-40 border-red-500 "}
                  required
                  onBlur={() => {
                    if (z.string().min(5).safeParse(messageValue).success) {
                      setMessageValueValid(true)
                    } else {
                      setMessageValueValid(false)
                    }
                  }}
                />

                {isPending ? (
                  <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Envoi en cours..</span>
                  </Button>
                ) : (
                  <Button type="submit">Soumettre</Button>
                )}
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Form
