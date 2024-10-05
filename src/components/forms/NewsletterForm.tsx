'use client'

import { useUser } from '@clerk/nextjs'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { redirect } from 'next/navigation'
import React, { ChangeEvent, useEffect } from 'react'
import { toast } from 'sonner'

const NewsletterForm = () => {
  const [email, setEmail] = React.useState('')

  const { data, mutate, isPending } = useMutation({
    mutationKey: ['subscribe-to-newsletter'],
    mutationFn: async (email: string) => {
      const { data } = await axios.post(
        '/api/subscribe-to-newsletter',
        {
          email: email,
          firstname: '',
          lastname: ''
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      if(!data) throw new Error('Something went wrong')

      return data
    },
    onSuccess: () => {
      toast.success('Vous êtes maintenant inscrit à la newsletter')
    },
    onError: () => {
      toast.error('Une erreur est survenue')
    }
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
    console.log("email: ", email)
    // Reloads the user's data from Clerk's API
    try {
      mutate(email)
      setTimeout(() => {
        redirect('/dashboard')
      }, 3000)
    } catch (error) {
      console.error(error)
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className='mx-2 mt-3 mb-2 text-white justify-normal border-white border-2 p-3'>
        <h1 className='font-bold text-3xl text-center'>
          La newsletter gratuite
        </h1>
        <p className='font-semibold text-xl text-center'>
          Vous pouvez vous inscrire à tout moment en remplissant le formulaire
          ci-dessous.
        </p>
        <div className='bg-red'>
          <div className='mt-8 flex items-center justify-center'>
            <div className='flex items-center space-x-2'>
              <span className='text-sm'>Abonne-toi, c'est gratuit !</span>
            </div>
          </div>
          <div className='mt-4 flex flex-col bg-green md:flex-row justify-center items-center'>
            <input
              value={email}
              onChange={handleChange}
              type='email'
              placeholder='Ton mail'
              className='px-4 py-2 border border-white rounded-full w-full md:w-80 text-black'
            />
            <button
              type='submit'
              className='mt-2 md:mt-0 md:ml-2 px-4 py-2 border border-white rounded-full bg-white text-black'
            >
              <i typeof='submit' className='fas fa-arrow-right'>
                GO
              </i>
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default NewsletterForm
