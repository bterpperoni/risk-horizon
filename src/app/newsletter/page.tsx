'use client'

import React from 'react'
import Newsletterform from '@/components/forms/NewsletterForm'

export default function Page () {
  return (
    <>
      <div className='m-3'>
        <h1>Hello la famille</h1>
        <p>
          Vous pouvez vous réinscrire à tout moment en remplissant le formulaire
          ci-dessous.
        </p>
        <div  className='m-3'>
          <Newsletterform />
        </div>
      </div>
    </>
  )
}
