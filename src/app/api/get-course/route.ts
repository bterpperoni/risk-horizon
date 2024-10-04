import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest, response: Response) {
  const id = request.nextUrl.searchParams.get("id")
  if (!id || isNaN(Number(id)))
    return new Response("Invalid data", { status: 400 })

  const course = await db.courses.findUnique({
    where: { id: Number(id) },
  })

  if (!course) {
    return new Response(
      JSON.stringify({
        Content: `<body id="yoopta-clipboard" data-editor-id="3025525a-c170-4d82-8ee3-bbda3f6da728"></body>`,
      })
    )
  }

  return NextResponse.json(course)
}
