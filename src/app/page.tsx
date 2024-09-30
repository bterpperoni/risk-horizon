import Link from 'next/link'
import Image from 'next/image'
import Form from '@/components/forms/form'
import NewsletterForm from '../components/forms/NewsletterForm'
export default function Component () {
  return (
    <div className='flex flex-col min-h-[100dvh] bg-riskbg'>
      <main className='flex-1 '>
        <section
          className='w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48'
          style={{
            backgroundImage: "url('/bg-min.webp')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundBlendMode: 'multiply',
            backgroundColor: 'rgba(4, 4, 55, 0.4)'
          }}
        >
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_700px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white'>
                    Joignons nos forces pour garantir votre sécurité en ligne.
                  </h1>
                  <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                    Notre mission est de rendre le monde numérique plus sûr pour
                    tous, quel que soit leur niveau de connaissance
                    technologique.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link
                    className=' shadow-inner inline-flex h-10 items-center justify-center rounded-md bg-[#5f3494] px-8 text-sm font-medium text-gray-50  transition-colors hover:bg-[#47266e] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                    href='#info'
                  >
                    {"Plus d'infos"}
                  </Link>
                </div>
              </div>
            </div>

            {/* NewsletterForm sert à créer un contact dans la l'audience resend */}
            <NewsletterForm />
          </div>
        </section>
        <section
          id='info'
          className='w-full py-12 pb-5 md:py-24 md:pb-14 lg:py-32 lg:pb-20 bg-gray-100 dark:bg-gray-800'
        >
          <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Ce que nous faisons
              </h2>
              <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Nous proposons une gamme de services pour aider les individus et
                les organisations à rester en sécurité dans le monde numérique.
              </p>
            </div>
            <div className='flex flex-col space-y-2 min-[400px]:space-y-4 lg:space-y-2 xl:space-y-4'>
              <div className='space-y-2'>
                <h3 className='font-bold tracking-tight'>
                  Formation en cybersécurité
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Pour vous aider à mieux comprendre les menaces en ligne et à
                  protéger vous ou votre entreprise
                </p>
              </div>
              <div className='space-y-2'>
                <h3 className='font-bold tracking-tight'>
                  Consultation en sécurité
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {`Laissez notre équipe d'experts vous aider à renforcer votre sécurité en ligne en vous conseillant`}
                </p>
              </div>
              <div className='space-y-2'>
                <h3 className='font-bold tracking-tight'>
                  Analyse des Menaces
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Nous réalisons des analyses de sécurité approfondies pour
                  identifier les vulnérabilités potentielles
                </p>
              </div>
              <div className='space-y-2'>
                <h3 className='font-bold tracking-tight'>
                  Protection des données
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  Apprenez à protéger vos données personnelles et
                  professionnelles contre les cyberattaques
                </p>
              </div>
            </div>
          </div>

          <div className='w-full mt-6 md:mt-14 mb-4'>
            <div className='mx-10 sm:mx-14 md:mx-30 xl:mx-64 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <Image
                loading='lazy'
                alt='Image 1'
                className='w-full object-cover rounded-lg h-[200px] md:h-[250px]'
                height={400}
                src='/imgs/12.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover'
                }}
                width={600}
              />
              <Image
                loading='lazy'
                alt='Image 2'
                className='w-full object-cover rounded-lg h-[200px] md:h-[250px]'
                height={400}
                src='/imgs/8.jpg'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover'
                }}
                width={600}
              />
              <Image
                loading='lazy'
                alt='Image 3'
                className='w-full  object-cover rounded-lg h-[200px] md:h-[250px]'
                height={400}
                src='/imgs/14.webp'
                style={{
                  aspectRatio: '600/400',
                  objectFit: 'cover'
                }}
                width={600}
              />
            </div>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
            <div className='space-y-2 text-gray-50'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Qui sommes nous ?
              </h2>
              <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                {
                  "Découvrez l'équipe qui se cache derrière notre mission de sécurisation du monde numérique."
                }
              </p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  loading='lazy'
                  alt='Guillaume Rosin'
                  className='rounded-full'
                  height={150}
                  src='/imgs/profils/rosin.jpg'
                  style={{
                    aspectRatio: '150/150',
                    objectFit: 'cover'
                  }}
                  title='Guillaume Rosin'
                  width={150}
                />
                <div className='mt-2 text-center'>
                  <h3 className='font-semibold text-gray-50'>
                    Guillaume Rosin
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Président et
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    analyste en cybersécurité
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  loading='lazy'
                  alt='Guillaume Richard'
                  className='rounded-full'
                  height={150}
                  src='/imgs/profils/richard.jpg'
                  style={{
                    aspectRatio: '150/150',
                    objectFit: 'cover'
                  }}
                  title='Guillaume Richard'
                  width={150}
                />
                <div className='mt-2 text-center'>
                  <h3 className='font-semibold text-gray-50'>
                    Guillaume Richard
                  </h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Co-Président et
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    analyste en cybersécurité{' '}
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  loading='lazy'
                  alt='alicia bijnen'
                  className='rounded-full'
                  height={150}
                  src='/imgs/profils/gg.jpg'
                  style={{
                    aspectRatio: '150/150',
                    objectFit: 'cover'
                  }}
                  title='Alicia Bijnen'
                  width={150}
                />
                <div className='mt-2 text-center'>
                  <h3 className='font-semibold text-gray-50'>Alicia Bijnen</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Chargée de communication
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <Image
                  loading='lazy'
                  alt='julien legros'
                  className='rounded-full'
                  height={150}
                  src='/imgs/profils/Ghris.jpg'
                  style={{
                    aspectRatio: '150/150',
                    objectFit: 'cover'
                  }}
                  title='Yacine Ghris'
                  width={150}
                />
                <div className='mt-2 text-center'>
                  <h3 className='font-semibold text-gray-50'>Yacine Ghris</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Juriste RGPD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Form className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800' />
      </main>
    </div>
  )
}

function MountainIcon (props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
    </svg>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className='font-bold text-4xl text-white'>House in the woods</p>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className='font-bold text-4xl text-white'>House above the clouds</p>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className='font-bold text-4xl text-white'>Greens all over</p>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <p className='font-bold text-4xl text-white'>Rivers are serene</p>
      <p className='font-normal text-base text-white'></p>
      <p className='font-normal text-base my-4 max-w-lg text-neutral-200'>
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/imgs/12.jpg'
  },
  {
    id: 3,
    content: <SkeletonTwo />,
    className: 'col-span-1',
    thumbnail: '/imgs/8.jpg'
  },
  {
    id: 2,
    content: <SkeletonOne />,
    className: 'col-span-1',
    thumbnail: '/imgs/14.webp'
  }
]
