import * as React from 'react'
import {
  Html,
  Body,
  Container,
  Heading,
  Section,
  Text,
  Img
} from '@react-email/components'
interface BookYourConsultationEmailTemplateProps {
  name: string
  phone: string
  email: string
}

interface BodyStyle extends React.CSSProperties {
  fontFamily: string
  backgroundColor: string
  padding: string
  textAlign: 'left' | 'right' | 'center' | 'justify' | undefined
  width: string
}

interface ContainerStyle extends React.CSSProperties {
  backgroundColor: string
  padding: string
  borderRadius: string
  boxShadow: string
  maxWidth: string
  margin: string
  textAlign: 'left' | 'right' | 'center' | 'justify' | undefined
}

interface HeadingStyle extends React.CSSProperties {
  fontSize: string
  color: string
  marginBottom: string
  fontWeight: string | number
}

interface TextStyle extends React.CSSProperties {
  fontSize: string
  color: string
  lineHeight: string
  marginBottom: string
  textAlign: 'left' | 'right' | 'center' | 'justify' | undefined
}

interface LabelStyle extends React.CSSProperties {
  fontWeight: string | number
  color: string
}

export const BookYourConsultationEmailTemplate: React.FC<
  Readonly<BookYourConsultationEmailTemplateProps>
> = ({ name, email, phone }) => {
  const bodyStyle: BodyStyle = {
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    backgroundColor: '#c9c9c9',
    padding: '80px',
    textAlign: 'center',
    width: '100%'
  }

  const containerStyle: ContainerStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center'
  }

  const headingStyle: HeadingStyle = {
    fontSize: '24px',
    color: '#333333',
    marginBottom: '20px',
    fontWeight: 'bold'
  }

  const textStyle: TextStyle = {
    fontSize: '16px',
    color: '#555555',
    lineHeight: '24px',
    marginBottom: '8px',
    textAlign: 'center'
  }

  const labelStyle: LabelStyle = {
    fontWeight: 'bold',
    color: '#000000'
  }

  return (
    <Html>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Img
            src="https://arpankhehrafitness.com/akf-logo-new.png"
            alt="AKF"
            width="200"
            style={{ margin: '0 auto 20px', display: 'block' }}
          />
          <Heading style={headingStyle}>
            {name} has submitted a Consultation form.
          </Heading>
          <Section>
            <Text style={textStyle}>
              <span style={labelStyle}>Name:</span> {name}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Email:</span> {email}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Phone:</span> {phone}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default BookYourConsultationEmailTemplate
