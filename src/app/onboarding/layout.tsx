import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import React from "react"

export default function RootLayout({
  children}: {children: React.ReactNode}) {

  const { sessionClaims } = auth()

  if (sessionClaims?.metadata.onboardingComplete) {
    redirect('/dashboard')
  }

  return <>{children}</>





}




