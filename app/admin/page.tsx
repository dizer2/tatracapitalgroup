'use client'
import { useState, useEffect, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { handleSubmit } from '@/hooks/sendEmail'
import { generatePasswordFunction } from '@/utils/generatePasswordFunction'

export default function Page() {
  const [generatedPassword, setGeneratedPassword] = useState('') 
  const [password, setPassword] = useState('') 
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleGeneratePassword = () => {
    generatePasswordFunction({ setValue: setGeneratedPassword }) 
  }

  useEffect(() => {
    if (generatedPassword) {
      handleSubmit({ generatePassword: generatedPassword, setMessage })
    }
  }, [generatedPassword, setMessage])

  const checkPassword = (e: FormEvent<HTMLFormElement>) => {  
    e.preventDefault()
    if (generatedPassword === password) {
      setMessage('Password Matched!')
      router.push('/admin/dashboard')
    } else {
      setMessage('Password does not match!')
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center px-10">
      <form onSubmit={checkPassword} className="w-96 flex flex-col gap-6">
        <h4>Enter the password sent to your email address</h4>
        <Button
          type="button"
          className="w-full"
          onClick={handleGeneratePassword}  
        >
          Generate Password
        </Button>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="text-black"
        />
        {generatedPassword && (
          <Button type="submit" className="w-full">
            Submit
          </Button>
        )}
        {message && <p className="text-center text-sm">{message}</p>}
      </form>
    </div>
  )
}
