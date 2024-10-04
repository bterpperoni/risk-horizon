"use client"

import * as React from "react"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { completeOnboarding } from "@/app/onboarding/_actions"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"

export default function OnboardingComponent() {
  const [error, setError] = React.useState("")
  const { user } = useUser()
  const router = useRouter()

  const { data, mutate, isPending } = useMutation({
    mutationKey: ["subscribe-to-premium"],
    mutationFn: async (email: string) => {
      const { data } = await axios.post(
        "/api/subscribe-to-premium",
        {
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      return data
    },
    onSuccess: () => {
      toast.success("Vous êtes maintenant inscrit à la newsletter")
    },
    onError: () => {
      toast.error("Une erreur est survenue")
    },
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()
    const res = await completeOnboarding()
    if (res?.message) {
      // Reloads the user's data from Clerk's API
      try {
        await user?.reload()
        mutate(user?.primaryEmailAddress?.emailAddress ?? "")
        setTimeout( () => {
          router.push("/dashboard")
        }
        , 3000)
      } catch (error) {
        console.error(error)
      }
    }
    if (res?.error) {
      setError(res?.error)
    }
  }
  return (
    <div className="mt-16 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md h-[80vh]">
      <h2 className="text-2xl border-b-2 border-black p-2  font-semibold text-primary mb-6">
        (à modifier) Voulez-vous vous inscrire à la newsletter pour rester
        informer{" "}
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300"
        >
          S'inscrire à la newsletter payante
        </button>
      </form>
    </div>
  )
}
