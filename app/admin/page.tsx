'use client'
import { useState, useEffect, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import { handleSubmit } from '@/hooks/sendEmail'
import { generatePasswordFunction } from '@/utils/generatePasswordFunction'
import Cookies from 'js-cookie'

export default function Page() {
	const [clientReady, setClientReady] = useState(false)
	const [generatedPassword, setGeneratedPassword] = useState('')
	const [password, setPassword] = useState('')
	const [message, setMessage] = useState('')
	const router = useRouter()

	useEffect(() => {
		setClientReady(true)
	}, [])

	const isAuthenticated = Cookies.get('isAuthenticated')

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
			Cookies.set('isAuthenticated', 'true', { expires: 1 })
			router.push('/admin/dashboard')
		} else {
			setMessage('Password does not match!')
		}
	}

	const redirect = () => {
		router.push('/admin/dashboard')
	}

	if (!clientReady) {
		return (
			<div className='w-full h-screen flex items-center justify-center'>
				Loading...
			</div>
		)
	}

	return (
		<div className='w-screen h-screen flex justify-center items-center px-10'>
			{isAuthenticated ? (
				
        	<div className='w-96 flex flex-col gap-6'>
					<Button onClick={redirect} className='w-full'>
						Go To Dashboard
					</Button>
					{message && <p className='text-center text-sm'>{message}</p>}
				</div>
			) : (
        <form onSubmit={checkPassword} className='w-96 flex flex-col gap-6'>
        <h4>Enter the password sent to your email address</h4>
        <Button
          type='button'
          className='w-full'
          onClick={handleGeneratePassword}
        >
          Generate Password
        </Button>
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='text-black'
        />
        {generatedPassword && (
          <Button type='submit' className='w-full'>
            Submit
          </Button>
        )}
        {message && <p className='text-center text-sm'>{message}</p>}
      </form>
			)}
		</div>
	)
}
