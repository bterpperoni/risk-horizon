'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'

export default function OnboardingComponent() {
    const [error, setError] = React.useState('')
    const { user } = useUser()
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        const res = await completeOnboarding(formData)
        if (res?.message) {
            // Reloads the user's data from Clerk's API
            await user?.reload()
            router.push('/')
        }
        if (res?.error) {
            setError(res?.error)
        }
    }
    return (
        <div className="mt-4 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl border-b-2 border-black p-2  font-semibold text-primary mb-6">
                Veuillez compléter les champs ci-dessous pour terminer votre inscription</h2>
           <form className="space-y-6" action={handleSubmit}>
        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            id="city"
            name="city"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Zip Code */}
        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">Zip Code</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          >
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Organization (Optional) */}
        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization (Optional)</label>
          <input
            type="text"
            id="organization"
            name="organization"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
        </div>
    );

}