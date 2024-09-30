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
    mutationKey: ["subscribe-to-newsletter"],
    mutationFn: async (email: string) => {
      const { data } = await axios.post(
        "/api/subscribe-to-newsletter",
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
        <div>
          <label
            htmlFor="email"
            className=" block text-sm font-medium text-gray-700"
          >
            Address email
          </label>
          <input
            name="email"
            required
            disabled
            defaultValue={user?.primaryEmailAddress?.emailAddress ?? ""}
            className="cursor-not-allowed mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col h-[10vh] justify-around">
          <button
            name="submit"
            type="submit"
            className="w-full px-4 py-2 bg-primary hover:bg-riskvariant1 text-white font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Soumettre
          </button>
          {/* MaybeLater Button */}
          <div className="flex justify-center">
            <button
              name="maybeLater"
              onClick={() => {
                router.push("/dashboard/")
              }}
              className="w-full px-4 py-2 text-gray-500 border-white border-b-2 hover:border-gray-500 font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Peux-être plus tard
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
