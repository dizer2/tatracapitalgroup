'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button' 

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error caught by ErrorPage:', error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-darkS p-6">
      <h1 className="text-4xl font-bold text-red-400 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-red-400 mb-8">{error.message}</p>
      <div className="flex gap-4">
        <Button variant="destructive" onClick={reset}>
          Try Again
        </Button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to Main Page
        </Link>
      </div>
    </div>
  )
}
