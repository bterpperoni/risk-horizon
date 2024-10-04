'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  useUser,
  ClerkLoading,
  ClerkLoaded
} from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from './ui/button'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { Menu } from 'lucide-react'
import { auth } from '@clerk/nextjs/server'

function Navbar () {
  const router = useRouter()
  const { user } = useUser()

  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/Contact' },
    { name: 'E-learning', href: '/elearning' },
    { name: 'OSI 2024', href: '/OSI' }
  ]

  const path = usePathname()
  if (path === '/hacked') return null
  /* if (!isLoaded) return null */

  return (
    <nav className='bg-riskbg h-16'>
      <div className=' mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <Image
              alt='Risk Horizon logo'
              src='/logo_line_white.png'
              width='280'
              height='180'
              className='mr-5 lg:w-[30vw]!important md:w-[15vw]!important ml-6 md:ml-5 h-auto cursor-pointer'
              onClick={() => router.push('/')}
            />
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navItems.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={
                    path === item.href
                      ? 'text-white !underline underline-offset-8  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                      : 'text-white hover:underline underline-offset-8  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                  }
                >
                  {item.name}
                </Link>
              ))}
              <ClerkLoading>
                <p
                  className={
                    'text-white hover:underline underline-offset-8  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                  }
                >
                  Se connecter
                </p>
              </ClerkLoading>
              <ClerkLoaded>
                <div
                  className=' text-white !underline underline-offset-8  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                  id='underlinepls'
                >
                  {!user && (
                    <>
                      <Link
                        href='sign-in'
                        className='text-gray-300 hover:text-white mr-4'
                      >
                        Sign In
                      </Link>
                      <Link
                        href='sign-up'
                        className='text-gray-300 hover:text-white mr-4'
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                  {user && (
                    <Link
                      href='profile'
                      className='text-gray-300 hover:text-white mr-4'
                    >
                      Profile
                    </Link>
                  )}
                  <div className='ml-auto'>
                    <UserButton />
                  </div>
                </div>
              </ClerkLoaded>
            </div>
          </div>
          <div className='md:hidden flex items-center'>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant='outline' size='icon' className='md:hidden'>
                  <Menu className='h-6 w-6' />
                  <span className='sr-only'>Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side='right' className='bg-riskbg'>
                <div className='flex flex-col space-y-4 mt-4'>
                  {navItems.map(item => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className='text-white hover:underline  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className='text-white hover:underline  px-3 mr-1 py-2 text-[18px] text-nowrap font-medium'>
                    {!user && (
                    <>
                      <Link
                        href='sign-in'
                        className='text-gray-300 hover:text-white mr-4'
                      >
                        Sign In
                      </Link>
                      <Link
                        href='sign-up'
                        className='text-gray-300 hover:text-white mr-4'
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                  {user && (
                    <Link
                      href='profile'
                      className='text-gray-300 hover:text-white mr-4'
                    >
                      Profile
                    </Link>
                  )}
                  <div className='ml-auto'>
                    <UserButton />
                  </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
