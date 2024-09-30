'use client'

import { FormEventHandler, useState } from 'react'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault()
    // Code pour envoyer la requête d'inscription à la newsletter
    console.log('Inscription à la newsletter envoyée avec succès !')
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Entrez votre adresse e-mail"
      />
      <button type="submit">S'inscrire à la newsletter</button> */}
      <div className='mx-2 mt-3 mb-2 text-white justify-normal border-white border-2 p-3'>
        <h1 className='font-bold text-3xl text-center'>La newsletter gratuite</h1>
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
              type='email'
              placeholder='Ton mail'
              className='px-4 py-2 border border-white rounded-full w-full md:w-80 text-black'
            />
            <button
              type='submit'
              className='mt-2 md:mt-0 md:ml-2 px-4 py-2 border border-white rounded-full bg-white text-black'
            >
              <i onClick={() => alert('Hey')} className='fas fa-arrow-right'>
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
