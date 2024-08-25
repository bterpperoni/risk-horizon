"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "$/lib/components/ui/buttons/Button"

import Countdown from "react-countdown"

function Page() {
  const [countdown, setCountdown] = useState<JSX.Element>()
  useEffect(() => {
    setCountdown(
      <Countdown date={new Date("2024-10-19T10:00:00")} className="  text-4xl text-white font-bold bg-black/50 p-2" />
    )
  }, [])

  return (
    <div className="flex  min-h-[100dvh] mt-16 bg-riskbg">
      <main className="flex-1">
        <section
          className="w-full py-6 sm:py-12 md:py-24 lg:py-28 xl:py-32"
          style={{
            backgroundImage: "url('imgs/osi/visu_horizontal_sanslogo2.jpg')",
            /*   background:
              "linear-gradient(to right, rgba(255, 22, 22, 0.9), rgba(6, 9, 155, 0.5)), url('imgs/osi/foule.webp')", */
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className=" px-4 md:px-6">
              <div className=" gap-6 max-w-xl">
                <div className="flex flex-col justify-center space-y-4 bg-black/60 p-10 rounded-2xl">
                  <div className="space-y-2">
                    <div className="flex">
                      <img src="imgs/osi/logo_OSI_white.png" alt="OSI logo" className="object-cover w-64" />
                    </div>

                    <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
                      19 octobre 2024 | Mons, Belgique
                    </p>
                    <p className="max-w-[600px] !mt-6 text-white md:text-lg drop-shadow-lg ">
                      Cette année, Risk Horizon organise le salon Open Source Immersion (OSI) dédié à la promotion de
                      logiciels libres et open source.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row !mt-6">
                    <Link
                      className=" shadow-inner inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black  transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#info"
                    >
                      {"Plus d'infos"}
                    </Link>

                    <Link href={"https://www.eventbrite.be/e/open-source-immersion-tickets-921737229867"} className="">
                      <Button className="bg-[#050537]">{"S'inscrire"}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[240px] mt-20 md:mt-0 ">{countdown}</div>
          </div>
        </section>
        <section id="info" className="py-5 pt-10">
          <div className="flex flex-col md:flex-row py-5 justify-center items-center gap-10">
            <div>
              <Image
                loading="lazy"
                alt="Image 1"
                className="w-full  object-cover rounded-lg h-[200px] md:h-[250px]"
                height={500}
                src="/imgs/osi/foule.webp"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="px-4">
              <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">
                Un salon pour les passionnés de logiciels <br /> libres et open source
              </p>
              <p className="max-w-[600px] mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                {
                  "Le 19 octobre 2024, Risk Horizon vous invite à son salon Open Source Immersion, un événement où vous pourrez découvrir des projets innovants et échanger avec leurs créateurs ainsi que la communauté contributrice.                  "
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse py-5 justify-center items-center gap-10">
            <div>
              <Image
                loading="lazy"
                alt="Image 1"
                className="w-full object-cover rounded-lg h-[200px] md:h-[250px]"
                height={500}
                src="/imgs/9.jpg"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="px-4">
              <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">
                Première édition, axé cybersécurité
              </p>
              <p className="max-w-[600px] mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                {
                  "Pour cette première édition, nous mettrons l'accent sur la sécurité des infrastructures. Venez découvrir les nouvelles technologies en matière de sécurité."
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-5 justify-center items-center gap-10">
            <div>
              <Image
                loading="lazy"
                alt="Image 1"
                className="w-full object-cover rounded-lg h-[200px] md:h-[250px]"
                height={500}
                src="/imgs/osi/conf.jpg"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="px-4">
              <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">
                Au programme : conférences et exposants
              </p>
              <p className="max-w-[600px] mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                {
                  "Au programme de cette journée exceptionnelle, vous pourrez assister à des conférences passionnantes et participer à diverses activités. En outre, des exposants seront présents pour vous présenter leurs projets open source innovants. Ne manquez pas cette occasion unique de découvrir les tendances actuelles et de rencontrer des experts du domaine."
                }
              </p>
            </div>
          </div>
        </section>

        <section className="bg-muted mt-20 pb-5 md:pb-0">
          <div>
            <p className="text-3xl text-black font-bold tracking-tighter md:text-4xl/tight text-center pt-5">
              Nos partenaires majeurs :
            </p>
            <div className="flex flex-wrap justify-center items-center gap-0 md:gap-14">
              <div className="w-[200px] md:w-[300px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://www.heh.be/"}>
                  <Image
                    alt="Image"
                    className="object-contain aspect-video md:aspect-square scale-[1] "
                    height={300}
                    src="/imgs/osi/logo/HEH.png"
                    width={300}
                  />
                </Link>
              </div>

              <div className="w-[200px] md:w-[300px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://www.nrj.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-contain  aspect-video md:aspect-square scale-[0.9] md:scale-[0.65]"
                    height={300}
                    src="/imgs/osi/logo/NRJ.png"
                    width={300}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" pt-5 ">
          <div>
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight text-center mb-10 mt-8">
              Nos partenaires :
            </p>
            <div className="flex flex-wrap  justify-center items-center gap-0 md:gap-14">
              <div className="mx-10 md:mx-0 w-[200px] md:w-[300px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://www.zebrathrust.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover"
                    height={400}
                    src="/imgs/osi/logo/zebra2.png"
                    width={400}
                  />
                </Link>
              </div>
              <div className="hidden mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square  justify-center items-center">
                <Link href={"https://www.bhc.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover "
                    height={160}
                    src="/imgs/osi/logo/bhc_BLANC.png"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://ict.evergroup.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover"
                    height={200}
                    src="/imgs/osi/logo/Evergroup.png"
                    width={200}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://exegol.readthedocs.io/en/latest/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover scale-[0.9] md:scale-[1]"
                    height={300}
                    src="/imgs/osi/logo/exegol.png"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://kaisenlinux.org/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover scale-[1.1] md:scale-[1]"
                    height={300}
                    src="/imgs/osi/logo/kaisen.png"
                    width={300}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap  justify-center items-center gap-0 md:gap-14">
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://easi.net/fr"}>
                  <Image
                    alt="Image 1"
                    className="object-cover "
                    height={160}
                    src="/imgs/osi/logo/easi.png"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">

                <Link href={"https://akcustom.be"}>
                  <Image
                    alt="Image 1"
                    className="object-cover "
                    height={160}
                    src="/imgs/osi/logo/akcustom.webp"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[150px] md:w-[200px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://chimay.com/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover "
                    height={150}
                    src="/imgs/osi/logo/chimay.png"
                    width={150}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div className="flex flex-col p-4 bg-[#020222] max-w-[400px] justify-center mx-auto">
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">Informations :</p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400 mb-3">19 octobre 2024 - 10H à 18H</p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
              8 Avenue Victor Maistriau, 7000 Mons
            </p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">Haute École en Hainaut,</p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
              Département sciences et technologies
            </p>
            <Link href={"https://www.eventbrite.be/e/open-source-immersion-tickets-921737229867"} className="mx-auto">
              <Button className="mt-6 mx-auto p-6 text-xl bg-white hover:bg-gray-400 text-black">{"S'inscrire"}</Button>
            </Link>
          </div>
        </section>
        <section className="bg-[#020222] mt-20">
          <div>
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight text-center pt-5">
              Vous souhaitez venir exposer / devenir sponsor ?
            </p>
            <div className="flex flex-col md:flex-row py-5 md:justify-center gap-4">
              <div className="flex  justify-center items-center gap-14  text-white text-xl text-nowrap py-2">
                Contact :
              </div>
              <div className="flex justify-center items-center gap-14  text-white text-xl text-nowrap">
                guillaume.rosin@risk-horizon.be
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page
