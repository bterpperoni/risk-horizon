
import { LayoutGrid } from "$/lib/components/ui/layout-grid"

import Image from "next/image"
import React from "react"

function Page() {
  return (
    <main className="min-h-[calc(100dvh-7rem)] bg-riskbg">
      <section className="w-full py-12 mt-5 md:py-24   ">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2 text-gray-50">
            <h1 className="text-5xl font-bold tracking-tighter md:text-5xl/tight">A propos de Risk Horizon</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {`Chez Risk Horizon, nous sommes là pour veiller sur vous, vos proches et votre entreprise en assurant la protection 
              de vos structures et de vos comptes, qu'ils soient personnels ou professionnels. Notre engagement absolu est de vous 
              offrir une tranquillité d'esprit totale en matière de sécurité.`}
            </p>
          </div>
          <div className="flex flex-col space-y-2 min-[400px]:space-y-4 lg:space-y-2 xl:space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-gray-50 text-xl">Notre Mission</h3>
              <p className="text-md text-gray-500 dark:text-gray-400">
                {`Nous avons pour mission de rendre le monde numérique plus sûr pour tous, quel que soit leur niveau d'expertise technique. 
              Nous croyons fermement que la cybersécurité devrait être accessible et compréhensible pour tous.`}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-gray-50 text-xl">Pourquoi la Sécurité est Importante</h3>
              <p className="text-md text-gray-500 dark:text-gray-400">
                {`Dans le monde numérique d'aujourd'hui, l'importance de mesures de cybersécurité solides n'a jamais été aussi cruciale. Les menaces cybernétiques 
                telles que les violations de données, les logiciels malveillants et les attaques de phishing peuvent avoir des conséquences dévastatrices pour les individus 
                et les entreprises. En sensibilisant et en offrant des solutions pratiques, nous visons à autonomiser notre communauté pour naviguer en toute sécurité sur Internet.`}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-gray-50 text-xl">Notre approche</h3>
              <p className="text-md text-gray-500 dark:text-gray-400">
                {`Chez Risk Horizon, nous adoptons une approche globale pour protéger nos clients. Nos services incluent la formation en cybersécurité, les consultations en sécurité, 
              l'analyse des menaces et les solutions de protection des données. 
              Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et élaborer des stratégies personnalisées afin de les protéger.`}
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen py-20 w-full">
          <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
            <div className="md:col-span-2">
              <div className="md:col-span-2 relative overflow-hidden bg-white rounded-xl h-full w-full">
                <Image
                  alt="thumbnail"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover object-top absolute inset-0 h-full w-full transition duration-200 blur-none"
                  src="/imgs/9.jpg"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="col-span-1 relative overflow-hidden bg-white rounded-xl h-full w-full">
                <Image
                  alt="thumbnail"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover object-top absolute inset-0 h-full w-full transition duration-200 blur-none"
                  src="/imgs/1.jpg"
                />
              </div>
            </div>
            <div className="col-span-1">
              <div className="col-span-1 relative overflow-hidden bg-white rounded-xl h-full w-full">
                <Image
                  alt="thumbnail"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover object-top absolute inset-0 h-full w-full transition duration-200 blur-none"
                  src="/imgs/10.jpg"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="md:col-span-2 relative overflow-hidden z-40 bg-white rounded-xl h-full w-full">
                <Image
                  alt="thumbnail"
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                  data-nimg="1"
                  className="object-cover object-top absolute inset-0 h-full w-full transition duration-200 blur-none"
                  src="/imgs/11.jpg"
                />
              </div>
            </div>
            <div className="absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of
        city life.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a
        place where the sky meets home, and tranquility is a way of life.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy
        life.
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and
        enjoy life.
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
