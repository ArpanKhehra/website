import * as React from 'react'

interface EmailTemplateProps {
  fullName: string
  email: string
  gender: string
  age: string
  city: string
  mobileNumber: string
  fitnessGoal: string
  medicalIssue: string
  injury: string
}

export function EmailTemplate({
  fullName,
  gender,
  age,
  city,
  mobileNumber,
  fitnessGoal,
  medicalIssue,
  injury
}: EmailTemplateProps) {
  return (
    <div className="bg-[#c9c9c9] text-center p-[20px]">
      <div className="">
        <img
          className="w-[100px]"
          src="/akf-logo-new.png"
          alt="Website Change Request"
        />
      </div>
      <div className="">
        <h2>{fullName} has submitted a form.</h2>
        <table
          rules="all"
          style={{
            borderColor: '#666',
            width: '400px',
            margin: 'auto',
            background: '#fff'
          }}
          cellPadding="10"
        >
          {fullName && (
            <tr style={{ background: '#eee' }}>
              <td>
                <span>
                  <strong>Name: </strong>
                  {fullName}
                </span>
              </td>
            </tr>
          )}
          {gender && (
            <tr>
              <td>
                <span>
                  <strong>Gender: </strong>
                  {gender}
                </span>
              </td>
            </tr>
          )}
          {age && (
            <tr>
              <td>
                <span>
                  <strong>Age: </strong>
                  {age}
                </span>
              </td>
            </tr>
          )}
          {city && (
            <tr>
              <td>
                <span>
                  <strong>City: </strong>
                  {city}
                </span>
              </td>
            </tr>
          )}
          {mobileNumber && (
            <tr>
              <td>
                <span>
                  <strong>Mobile Number: </strong>
                  {mobileNumber}
                </span>
              </td>
            </tr>
          )}
          {fitnessGoal && (
            <tr>
              <td>
                <span>
                  <strong>Fitness Goal: </strong>
                  {fitnessGoal}
                </span>
              </td>
            </tr>
          )}
          {medicalIssue && (
            <tr>
              <td>
                <span>
                  <strong>Medical Issue: </strong>
                  {medicalIssue}
                </span>
              </td>
            </tr>
          )}
          {injury && (
            <tr>
              <td>
                <span>
                  <strong>Injury: </strong> {injury}
                </span>
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  )
}
