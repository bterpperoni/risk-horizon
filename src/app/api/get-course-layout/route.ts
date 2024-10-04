import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(request: NextRequest, response: Response) {
  const course = await db.coursesLayout.findFirst({
    take: 1,
    orderBy: {
      id: "desc",
    },
  })

  if (!course) {
    return NextResponse.json({ message: "Course not found" }, { status: 404 })
  }

  return NextResponse.json(course)
}
