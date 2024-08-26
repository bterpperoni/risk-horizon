
import { LayoutGrid } from "$/lib/components/layout/layout-grid"

import Image from "next/image"
import React from "react"

function Page() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-riskbg">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-1">
          <div className="flex flex-col space-y-2 min-[400px]:space-y-4 lg:space-y-2 xl:space-y-4">
            <div className="container mx-auto px-4 py-8 !text-white">
              <h2 className="text-3xl font-bold mb-4">Politique de confidentialité et protection des données</h2>

              <section className="my-8">
                <h3 className="text-xl font-bold mb-2">Collecte et utilisation des données</h3>
                <p>
                  Nous recueillons uniquement les informations nécessaires pour répondre à votre demande lorsque vous
                  utilisez notre formulaire de contact. Ces données incluent votre nom, votre adresse e-mail et
                  d&apos;autres informations que vous choisissez de nous fournir. Nous utilisons ces informations
                  uniquement dans le but de vous contacter et de répondre à votre demande spécifique.
                </p>
              </section>

              <section className="my-8">
                <h3 className="text-xl font-bold mb-2">Protection des données</h3>
                <p>
                  Nous prenons des mesures de sécurité appropriées pour protéger vos données personnelles contre tout
                  accès non autorisé, toute divulgation, toute altération ou toute destruction. Vos informations sont
                  stockées de manière sécurisée et ne sont accessibles qu&apos;aux membres autorisés de notre équipe.
                </p>
              </section>

              <section className="my-8">
                <h3 className="text-xl font-bold mb-2">Partage des données</h3>
                <p>
                  Nous ne partageons pas vos informations personnelles avec des tiers sans votre consentement explicite,
                  sauf si cela est nécessaire pour répondre à votre demande ou si nous y sommes légalement tenus.
                </p>
              </section>

              <section className="my-8">
                <h3 className="text-xl font-bold mb-2">Vos droits</h3>
                <p>
                  Conformément au RGPD, vous avez le droit d&apos;accéder à vos données personnelles, de les rectifier,
                  de les supprimer ou de limiter leur traitement. Vous pouvez également vous opposer au traitement de
                  vos données ou demander leur portabilité. Pour exercer ces droits ou pour toute question concernant
                  notre politique de confidentialité, veuillez nous contacter à info.risk.horizon@gmail.com.
                </p>
              </section>

              <section className="my-8">
                <h3 className="text-xl font-bold mb-2">Consentement</h3>
                <p>
                  En utilisant notre formulaire de contact, vous consentez à la collecte et à l&apos;utilisation de vos
                  données personnelles conformément à cette politique de confidentialité.
                </p>
              </section>

              <section className="my-8">
                <h3 className="text-xl font-bold mb-2">Mises à jour de la politique de confidentialité</h3>
                <p>
                  Nous nous réservons le droit de mettre à jour cette politique de confidentialité à tout moment. Les
                  modifications seront publiées sur cette page, et la date de révision sera mise à jour pour refléter la
                  dernière version en vigueur.
                </p>
                <p>
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en
                  matière de confidentialité.
                </p>
              </section>

              <section className="my-8">
                <h3 className="text-xl font-bold mb-2">Contact</h3>
                <p>
                  Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité ou
                  notre utilisation de vos données personnelles, n&apos;hésitez pas à nous contacter.
                </p>
              </section>
              <p className="text-sm">Dernière mise à jour : 25/04/2024</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
