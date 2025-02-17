import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!);
const myEmail = process.env.EMAIL!;

export async function POST(request: Request) {
  try {
    const { generatePassword } = await request.json() 

    if (!generatePassword) {
      return NextResponse.json({ error: 'generatePassword is required' }, { status: 400 })
    }

		console.log(generatePassword);

    const email = {
      from: 'Acme <onboarding@resend.dev>',
      to: [`${myEmail}`], 
      subject: 'ADMIN DASHBOARD PASSWORD',
      html: `<p>Password: <strong>${generatePassword}</strong></p>`,
      text: `Password: ${generatePassword}`,
    }

    const data = await resend.emails.send(email)

    return NextResponse.json({ success: true, message: 'Email sent', data }, { status: 200 })
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message || 'Error sending email' }, { status: 400 })
    }
    return NextResponse.json({ error: 'Unknown error occurred' }, { status: 400 })
  }
}
