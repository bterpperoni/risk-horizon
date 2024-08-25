"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useMemo } from "react"
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs"
import { auth, getAuth } from "@clerk/nextjs/server"

const navigation = [
  { name: "Accueil", href: "/", current: false },
  { name: "Mission", href: "/Missions", current: false },
  { name: "À propos", href: "/about", current: false },
  { name: "Contact", href: "/Contact", current: false },
  { name: "OSI 2024", href: "/OSI", current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

function Navbar() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  // J'ai pas compris le truc avec hacked ¯\_(ツ)_/¯
  // const path = usePathname();
  // if (path === "/hacked") return null;

  const router = useRouter();



  useEffect(() => {
    navigation.map((item) => {
      if (window.location.pathname === item.href) {
        item.current = true
      } else {
        item.current = false
      }
    })
  }, [])

  // const classname = isMenuOpen ? "flex" : "hidden"
  return (
    <div className=" bg-riskbg  ">
      <Disclosure as="nav" className="bg-[#040437]  absolute top-0 w-full z-1">
        {({ open }: { open: boolean }) => (
          <>
            <div className=" ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <DisclosureButton className="m-2 absolute inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#040437]hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex items-center">
                    <Image
                      alt="Risk Horizon logo"
                      src="/logo_line_white.png"
                      width="250"
                      height="150"
                      className="mr-5 lg:w-[30vw]!important md:w-[15vw]!important ml-6 md:ml-5 h-auto cursor-pointer"
                      onClick={() => router.push("/")}
                    />
                  </div>
                  {/* Desktop menu */}
                  <div className="hidden w-full w-min-[70px] relative right-3 sm:ml-6 sm:block mr-4">
                    <div className="flex flex-shrink-1 w-full ml-4 justify-end items-center ">
                      {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current ? "bg-[#5f3494] text-white" : "text-white hover:bg-gray-700 hover:text-white",
                              "rounded-sm px-3 mr-1 py-2 text-[18px] text-nowrap font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                      ))}
                      <div className="text-white">
                        {/* SignedOut match to user disconnected */}
                        <SignedOut>
                          <SignInButton>Se connecter</SignInButton>
                        </SignedOut>
                        {/* SignIn match to user connected */}
                        <SignedIn>
                          <UserButton />
                        </SignedIn>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>




            {/* Menu Mobile */}
            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2  pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-[#5f3494] text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-base font-medium flex justify-center"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
                <div className="text-white">
                  <SignedOut>
                    <SignInButton>Se connecter</SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              </div>
            </DisclosurePanel>

          </>
        )}
      </Disclosure>
      {/* <nav className="w-full ">
        <NavbarContent className=" hidden md:flex md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0" />

        <NavbarContent
          className={
            classname +
            "   md:hidden md:ml-auto  justify-end gap-4 sm:gap-6 flex-col md:flex-row mt-6 md:mt-0 items-center md:items-start mb-4 md:mb-0"
          }
        />
      </nav> */}
    </div>

  )
}

export default Navbar
