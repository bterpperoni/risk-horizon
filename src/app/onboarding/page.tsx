'use client'

import * as React from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { completeOnboarding } from './_actions'
import UserForm from '../../lib/components/ui/form-components/UserForm';

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
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-primary mb-6">User Information</h2>
            UserForm({ calledAction: '/api/onboarding', handleSubmit })
        </div>
    );

}