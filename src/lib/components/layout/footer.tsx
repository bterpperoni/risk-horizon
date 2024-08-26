import React from "react"
import Link from "next/link"
import Image from "next/image"


function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t sm:max-h-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        © 2024 Risk Horizon ASBL. &nbsp;&nbsp;&nbsp; Situé à Mons.
      </p>

      <nav className="sm:ml-auto flex gap-4 sm:gap-6 justify-center items-center">
        <p className="text-xs text-gray-500 dark:text-gray-400 mr-5">RPM tribunal du commerce de Mons</p>

        <p className="text-xs text-gray-500 dark:text-gray-400 mr-2">N° d&apos;entreprise : 1008.675.581</p>
        <Link href={"/policy"}>
          <p className="text-xs text-gray-500 dark:text-gray-400 mr-2 underline">Politique de confidentialité</p>
        </Link>
        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-500"
          href="https://www.linkedin.com/company/103165743"
        >
          <Image src="/linkedin.svg" alt="facebook" width={20} height={20} style={{ fill: "gray" }} />
        </Link>

        <Link
          className="text-xs hover:underline underline-offset-4 text-gray-500"
          href="https://www.facebook.com/profile.php?id=61557660167246"
        >
          <Image src="/facebook.svg" alt="facebook" width={20} height={20} />
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
