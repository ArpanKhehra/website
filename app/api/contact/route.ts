import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { EmailTemplate } from '@/components/emails/EmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const {
      fullName,
      email,
      age,
      gender,
      city,
      mobileNumber,
      fitnessGoal,
      medicalIssue,
      injury
    } = await request.json()

    if (
      !fullName ||
      !email ||
      !age ||
      !city ||
      !mobileNumber ||
      !fitnessGoal ||
      !medicalIssue ||
      !injury
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: 'Contact Form <hello@arpankhehrafitness.com>',
      // to: ['Arpankhehrafitness4@gmail.com'],
      to: ['surpawan@gmail.com'],
      subject: 'Form submission',
      react: EmailTemplate({
        fullName,
        email,
        age,
        gender,
        city,
        mobileNumber,
        fitnessGoal,
        medicalIssue,
        injury
      })
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
