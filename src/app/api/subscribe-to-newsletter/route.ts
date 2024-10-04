'use server'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// ---------------- Path: /api/subscribe-to-newsletter ------------------------------------
// ---------------- Used to create a new contact in Resend API --------------------------
export async function POST (request: NextRequest) {
  const data = await request.json()
  const resend = new Resend(process?.env?.RESEND_API)
  if (!data.email) throw new Error('Missing email')
  try {
    const res = await resend.contacts.create({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      unsubscribed: false,
      audienceId: 'b4ddfed7-0b48-4c7d-b7ba-9286b42489fe'
    })

    return NextResponse.json(res)
  } catch {
    return NextResponse.json({ message: 'Something went wrong' })
  }
}
