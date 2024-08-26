
import { LayoutGrid } from "$/lib/components/layout/layout-grid"

import Image from "next/image"
import React from "react"
import Countdown from "react-countdown"
function Page() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-riskbg">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-1">
          <div className="flex flex-col space-y-2 min-[400px]:space-y-4 lg:space-y-2 xl:space-y-4">
            <div className="container mx-auto px-4 py-8 !text-white text-lg">
              Protéger des données plus ou moins sensibles Votre ordinateur peut contenir des informations très
              importantes. Certains documents que vous pensez inutiles peuvent faire le bonheur de personnes mal
              attentionnées. Protéger votre espace est donc devenu une priorité. Afin d’éviter ce genre de problèmes, il
              vous est conseillé de supprimer tous les documents et accès vers des applications que vous n’utilisez pas.
              <br></br>
              <br></br>
              Il y aura ainsi peu de chances que l’on vous vole ces informations si elles n’existent pas. Si une
              personne a un accès direct à votre ordinateur, elle peut réaliser des branchements frauduleux qui
              permettront de récolter l’ensemble de vos données à chaque fois que vous pourrez vous connecter. Soyez
              ainsi très vigilant à chaque modification qui peut être apportée à votre poste de travail. Les moyens de
              gagner en sécurité Vous avez conscience que vous ne pourrez pas tout le temps gardé à l’œil l’ensemble de
              vos informations sur votre ordinateur.
              <br></br>
              <br></br>
              Il est donc possible de mettre en place différentes protections pour vous protéger efficacement. Pour
              garantir une sécurité optimale de votre espace de travail, il faut réussir à réaliser une mise à jour
              récurrente de votre ordinateur : c’est le moyen parfait pour améliorer votre sécurité informatique.
              <br></br>
              <br></br>
              En effet, les logiciels utilisés pour pirater vos données évoluent et cherchent toujours de nouvelles
              failles. Il est donc important de pouvoir réduire les possibilités d’intrusions. Enfin, l’une des
              principales protections à ne pas négliger reste les mots de passe de votre ordinateur. En effet, la base
              de l’accès à l’ensemble de vos données repose sur un mot de passe : pensez donc à bien le choisir afin de
              sécuriser au maximum vos données. Lorsque vous quittez votre poste de travail, il est aussi primordial de
              faire attention à ne rien laisser ouvert.
              <br></br>
              <br></br>
              Fermer votre session à chaque fois que vous n’êtes pas sur votre ordinateur peut vous éviter de nombreux
              problèmes. Verrouiller vos données et les protéger grâce à un cryptage vous permet ainsi de vous protéger
              un maximum de cette collecte pirate. Le vol de données est bien plus fréquent que vous ne le croyez. C’est
              un moyen pour des personnes malhonnêtes d’avoir accès à des documents parfois capitaux. Il existe
              aujourd’hui de nombreuses techniques qui sont faciles à mettre en place.
              <br></br>
              <br></br>
              Il s’agit simplement d’adopter les bons gestes simples qui pourront éviter de vous faire pirater !
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
