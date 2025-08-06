import * as React from 'react'
import {
  Html,
  Body,
  Container,
  Text,
  Heading,
  Section,
  Img
} from '@react-email/components'

interface EmailTemplateProps {
  fullName: string
  gender: string
  age: string
  city: string
  mobileNumber: string
  fitnessGoal: string
  medicalIssue: string
  injury: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  gender,
  age,
  city,
  mobileNumber,
  fitnessGoal,
  medicalIssue,
  injury
}) => {
  const bodyStyle = {
    fontFamily: "'Arial', 'Helvetica', sans-serif",
    backgroundColor: '#c9c9c9',
    padding: '80px',
    textAlign: 'center',
    width: '100%'
  }

  const containerStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center'
  }

  const headingStyle = {
    fontSize: '24px',
    color: '#333333',
    marginBottom: '20px',
    fontWeight: 'bold'
  }

  const textStyle = {
    fontSize: '16px',
    color: '#555555',
    lineHeight: '24px',
    marginBottom: '8px',
    textAlign: 'center'
  }

  const labelStyle = {
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
            {fullName} has submitted a form.
          </Heading>
          <Section>
            <Text style={textStyle}>
              <span style={labelStyle}>Name:</span> {fullName}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Gender:</span> {gender}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Age:</span> {age}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>City:</span> {city}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Mobile Number:</span> {mobileNumber}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Fitness Goal:</span> {fitnessGoal}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Medical Issue:</span> {medicalIssue}
            </Text>
            <Text style={textStyle}>
              <span style={labelStyle}>Injury:</span> {injury}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default EmailTemplate
