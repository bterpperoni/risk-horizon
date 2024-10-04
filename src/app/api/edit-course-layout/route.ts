import { NextResponse } from "next/server"
import axios from "axios"
import { Resend } from "resend"
import { z } from "zod"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
interface Elements {
  id: string
  isSelectable: boolean
  name: string
  children?: Elements[]
}

export async function POST(request: Request, response: Response) {
  const { sessionClaims } = auth()
  if (sessionClaims?.metadata.role !== "admin") {
    return new Response("Unauthorized", { status: 401 })
  }

  const postData = await request.json()
  console.log(postData.content)
  const test = await db.coursesLayout.create({
    data: {
      Content: postData.content,
    },
  })

  if (!test) return new Response("Course not found", { status: 404 })

  return NextResponse.json({ message: "Course updated" })
}
