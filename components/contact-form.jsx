'use client'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Twitter, Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react'
import { Alert, Snackbar } from '@mui/material'

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [snackbarSeverity, setSnackbarSeverity] = useState('success')
  // Form submission handler
  const handleSubmit = async (values) => {
    try {
      setIsSubmitting(true)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      if (response.ok) {
        const data = await response.json() // parse response data
        setSnackbarMessage(data.message + '! We will contact you soon!')
        setSnackbarSeverity('success')
        formik.resetForm()
      } else {
        setSnackbarMessage('Error submitting form: ' + error.message)
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
      fullName: '',
      gender: '',
      age: '',
      city: '',
      mobileNumber: '',
      fitnessGoal: '',
      medicalIssue: '',
      injury: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      gender: Yup.string().required('Gender is required'),
      age: Yup.number().required('Age is required').positive().integer(),
      city: Yup.string().required('City is required'),
      mobileNumber: Yup.string().required('Mobile Number is required'),
      fitnessGoal: Yup.string().required('Fitness Goal is required'),
      medicalIssue: Yup.string(),
      injury: Yup.string()
    }),
    onSubmit: (values) => {
      console.log(values)
      handleSubmit(values)
    }
  })

  const inputClass =
    'mt-1 block w-full border-b-2 border-[#8D8D8D] focus:border-primary px-0 py-1 text-gray-900 placeholder-transparent focus:outline-none focus:ring-0 focus:border-primary-dark'
  const labelClass =
    'absolute left-0 -top-3.5 text-primary text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-sm'

  return (
    <section className="flex flex-col relative padding-container">
      <div className="rounded-lg shadow-lg overflow-hidden flex flex-col-reverse lg:flex-row bg-white">
        <div className="lg:w-2/5 bg-primary text-white p-8">
          <h2 className="text-lg md:text-3xl font-bold mb-2">
            Contact Information
          </h2>
          <p className="mb-8 text-sm md:text-base">
            Build Muscle, Lose Weight or Improve Endurance
          </p>

          <div className="flex flex-col gap-12 mt-20">
            <div className="flex items-center text-sm md:text-base">
              <Phone className="mr-4" />
              <p>+91 7986458650</p>
            </div>
            <div className="flex items-center text-sm md:text-base">
              <Mail className="mr-4" />
              <span>arpankhehrafitness4@gmail.com</span>
            </div>
            <div className="flex items-center text-sm md:text-base">
              <MapPin className="mr-4" />
              <span>Chandigarh, India</span>
            </div>
          </div>

          <div className="mt-auto pt-16 flex space-x-4 mt-20">
            <a
              target="_blank"
              href="https://wa.me/917986458650?text=Hello, I'm interested in learning more!"
              className="text-white p-1.5 rounded-full bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.0508 2.91005C16.1338 1.98416 15.0418 1.25002 13.8383 0.750416C12.6348 0.250812 11.3439 -0.00426317 10.0408 5.38951e-05C4.58078 5.38951e-05 0.130781 4.45005 0.130781 9.91005C0.130781 11.6601 0.590781 13.3601 1.45078 14.8601L0.0507812 20.0001L5.30078 18.6201C6.75078 19.4101 8.38078 19.8301 10.0408 19.8301C15.5008 19.8301 19.9508 15.3801 19.9508 9.92005C19.9508 7.27005 18.9208 4.78005 17.0508 2.91005ZM10.0408 18.1501C8.56078 18.1501 7.11078 17.7501 5.84078 17.0001L5.54078 16.8201L2.42078 17.6401L3.25078 14.6001L3.05078 14.2901C2.22833 12.9771 1.79171 11.4593 1.79078 9.91005C1.79078 5.37005 5.49078 1.67005 10.0308 1.67005C12.2308 1.67005 14.3008 2.53005 15.8508 4.09005C16.6184 4.85392 17.2267 5.7626 17.6404 6.76338C18.0541 7.76417 18.265 8.83714 18.2608 9.92005C18.2808 14.4601 14.5808 18.1501 10.0408 18.1501ZM14.5608 11.9901C14.3108 11.8701 13.0908 11.2701 12.8708 11.1801C12.6408 11.1001 12.4808 11.0601 12.3108 11.3001C12.1408 11.5501 11.6708 12.1101 11.5308 12.2701C11.3908 12.4401 11.2408 12.4601 10.9908 12.3301C10.7408 12.2101 9.94078 11.9401 9.00078 11.1001C8.26078 10.4401 7.77078 9.63005 7.62078 9.38005C7.48078 9.13005 7.60078 9.00005 7.73078 8.87005C7.84078 8.76005 7.98078 8.58005 8.10078 8.44005C8.22078 8.30005 8.27078 8.19005 8.35078 8.03005C8.43078 7.86005 8.39078 7.72005 8.33078 7.60005C8.27078 7.48005 7.77078 6.26005 7.57078 5.76005C7.37078 5.28005 7.16078 5.34005 7.01078 5.33005H6.53078C6.36078 5.33005 6.10078 5.39005 5.87078 5.64005C5.65078 5.89005 5.01078 6.49005 5.01078 7.71005C5.01078 8.93005 5.90078 10.1101 6.02078 10.2701C6.14078 10.4401 7.77078 12.9401 10.2508 14.0101C10.8408 14.2701 11.3008 14.4201 11.6608 14.5301C12.2508 14.7201 12.7908 14.6901 13.2208 14.6301C13.7008 14.5601 14.6908 14.0301 14.8908 13.4501C15.1008 12.8701 15.1008 12.3801 15.0308 12.2701C14.9608 12.1601 14.8108 12.1101 14.5608 11.9901Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/arpan_khehra_fitness/profilecard/?igsh=MXRiOHU3ZzB6eDBlcQ=="
              className="text-white p-1.5 rounded-full bg-primary"
            >
              <Instagram />
            </a>
            <a
              href="https://m.facebook.com/61562429537933/"
              className="text-white p-1.5 rounded-full bg-primary"
            >
              <Facebook />
            </a>
          </div>
        </div>

        <div className="lg:w-3/5 p-8">
          <form
            onSubmit={formik.handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  {...formik.getFieldProps('fullName')}
                  className={inputClass}
                />
                <label
                  htmlFor="fullName"
                  className={labelClass}
                >
                  Full Name
                </label>
                {formik.touched.fullName && formik.errors.fullName ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.fullName}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <select
                  id="gender"
                  placeholder="Select Gender"
                  {...formik.getFieldProps('gender')}
                  className={inputClass}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label
                  htmlFor="gender"
                  className={labelClass}
                >
                  Gender
                </label>
                {formik.touched.gender && formik.errors.gender ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.gender}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input
                  type="number"
                  id="age"
                  placeholder="Age"
                  {...formik.getFieldProps('age')}
                  className={inputClass}
                />
                <label
                  htmlFor="age"
                  className={labelClass}
                >
                  Age
                </label>
                {formik.touched.age && formik.errors.age ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.age}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  {...formik.getFieldProps('city')}
                  className={inputClass}
                />
                <label
                  htmlFor="city"
                  className={labelClass}
                >
                  City
                </label>
                {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.city}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input
                  type="tel"
                  id="mobileNumber"
                  placeholder="Mobile Number"
                  {...formik.getFieldProps('mobileNumber')}
                  className={inputClass}
                />
                <label
                  htmlFor="mobileNumber"
                  className={labelClass}
                >
                  Mobile Number
                </label>
                {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.mobileNumber}
                  </div>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="fitnessGoal"
                  placeholder="Fitness Goal"
                  {...formik.getFieldProps('fitnessGoal')}
                  className={inputClass}
                />
                <label
                  htmlFor="fitnessGoal"
                  className={labelClass}
                >
                  Fitness Goal
                </label>
                {formik.touched.fitnessGoal && formik.errors.fitnessGoal ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.fitnessGoal}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative">
                <input
                  type="text"
                  id="medicalIssue"
                  placeholder="Medical Issue"
                  {...formik.getFieldProps('medicalIssue')}
                  className={inputClass}
                />
                <label
                  htmlFor="medicalIssue"
                  className={labelClass}
                >
                  Medical Issue
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="injury"
                  placeholder="Injury"
                  {...formik.getFieldProps('injury')}
                  className={inputClass}
                />
                <label
                  htmlFor="injury"
                  className={labelClass}
                >
                  Injury
                </label>
              </div>
            </div>

            <div className="flex flex-row items-end">
              <button
                type="submit"
                className="w-full ml-auto max-w-max bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
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
      </div>
    </section>
  )
}

export default ContactForm
