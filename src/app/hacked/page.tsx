import React from "react"

import { Button } from "$/lib/components/ui/buttons/Button"

import Link from "next/link"
function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-red-600 p-6 text-center text-white">
      <h1 className="text-5xl font-bold">Vous avez été Hacké</h1>
      <p className="mt-4 text-lg">(enfin pas vraiment, vous avez juste laissé votre ordinateur déverrouillé)</p>
      <p className="mt-4 text-lg">{`Mais quelqu'un de malveillant aurais pu vraiment le faire`}</p>
      <Link href="/cybereduque">
        <Button className="mt-6 bg-white text-black hover:bg-gray-300">{`Savoir pourquoi`}</Button>
      </Link>
    </div>
  )
}

export default Page
