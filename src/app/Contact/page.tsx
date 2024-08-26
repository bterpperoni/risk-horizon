import React from "react"
import Link from "next/link"

import Form from "$/lib/components/form-components/form"
import Image from "next/image"
import { Separator } from "$/lib/components/ui/separator"


function Page() {
  return (
    <div className=" min-h-[calc(100dvh-7rem)]  bg-gray-100">
      <main className="flex-1 flex justify-center items-center flex-col">
        <Form extended={true} className="w-full py-12  pt-32 bg-gray-100 dark:bg-gray-800" />
        <Separator className="w-[80%] my-20" />
        <div className="pb-20">
          <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Nous suivre sur les réseaux</h3>
          <div className="flex gap-10 justify-center mt-8">
            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-500"
              href="https://www.linkedin.com/company/103165743"
            >
              <Image src="/linkedin.svg" alt="facebook" width={50} height={50} style={{ fill: "gray" }} />
            </Link>

            <Link
              className="text-xs hover:underline underline-offset-4 text-gray-500"
              href="https://www.facebook.com/profile.php?id=61557660167246"
            >
              <Image src="/facebook.svg" alt="facebook" width={50} height={50} />
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
