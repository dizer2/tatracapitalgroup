export const handleSubmit = async ({
  generatePassword,
  setMessage,
}: {
  generatePassword: string
  setMessage: (message: string) => void
}) => {
  setMessage('Sending...')
  try {
    const res = await fetch('/api/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ generatePassword }),
    })

    const data = await res.json()
    if (res.ok) {
      setMessage('Email sent successfully!')
    } else {
      setMessage(data.error || 'Failed to send email')
    }
  } catch (error) {
    setMessage('An error occurred')
    console.log(error)
  }
}
