import { auth } from "@clerk/nextjs/server"
import React from "react"
import { NextResponse } from 'next/server';
import { redirect } from "next/navigation";

export default function RootLayout({
  children,
  nextResponse
}: {children: React.ReactNode, nextResponse: NextResponse}) {

  const { sessionClaims } = auth()

  if (sessionClaims?.metadata.onboardingComplete) {
    console.log("SessionClaims: ",sessionClaims)
    return redirect('/')
  }

  return <>{children}</>





}




