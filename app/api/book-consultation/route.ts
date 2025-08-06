import BookYourConsultationEmailTemplate from '@/emails/book-your-consultation-email-template'
import { EmailTemplate } from '@/emails/email-template'
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, phone } = await request.json()

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: 'Contact Form <hello@arpankhehrafitness.com>',
      to: ['Arpankhehrafitness4@gmail.com'],
      //   to: ['delivered@resend.dev'], // Dev email
      subject: 'Consultation Form submission',
      react: BookYourConsultationEmailTemplate({
        name,
        email,
        phone
      })
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
