'use client'

import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from './ui/button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

const ConsultationBookingSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required')
})

const ConsultationBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')

  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true)

      const response = await fetch('/api/book-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (response.ok) {
        const data = await response.json() // parse response data
        setSnackbarMessage('Form Submitted! We will contact you soon!')
        setSnackbarSeverity('success')
        formik.resetForm()
      } else {
        setSnackbarMessage('Failed to submit form')
        setSnackbarSeverity('error')
      }
    } catch (error) {
      setSnackbarMessage('Error submitting form: ' + error.message)
      setSnackbarSeverity('error')
    } finally {
      setIsSubmitting(false)
      setSnackbarOpen(true)
    }
  }

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: ''
    },
    validationSchema: ConsultationBookingSchema,
    onSubmit: (values) => {
      console.log(values)
      handleSubmit(values)
    }
  })

  return (
    <div className="bg-primary p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-white mb-4 font-lato">
        Book Your Consultation
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-4"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray text-sm font-medium mb-1 flex items-center gap-2"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="w-full p-2 rounded-md"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-800 text-sm mt-1">
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-gray text-sm font-medium mb-1 flex items-center gap-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="w-full p-2 rounded-md"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-800 text-sm mt-1">
              {formik.errors.phone}
            </div>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray text-sm font-medium mb-1"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="w-full p-2 rounded-md"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-800 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <Button
          type="submit"
          variant="secondary"
          size="lg"
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Join the AKF community →'}
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default ConsultationBookingForm
