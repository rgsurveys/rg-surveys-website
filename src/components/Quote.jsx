import React, { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const SERVICE_ID = 'service_tebbp2b'
const TEMPLATE_ID = 'template_9lmgupm'
const PUBLIC_KEY = 'Kvb_o_K93uaQ7-QXg'

export default function Quote() {
  const form = useRef()
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => setStatus('Message sent!'))
      .catch(() => setStatus('Failed to send.'))
  }

  return (
    <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Get a Quote</h2>
      <label className="block mb-2 text-left">Service Required</label>
      <select name="service" className="w-full mb-4 border p-2 rounded">
        <option>Topographical Survey</option>
        <option>Boundary</option>
        <option>Drone Survey</option>
        <option>New House Setout</option>
      </select>
      <label className="block mb-2 text-left">Name</label>
      <input name="name" className="w-full mb-4 border p-2 rounded" required />
      <label className="block mb-2 text-left">Email</label>
      <input name="email" type="email" className="w-full mb-4 border p-2 rounded" required />
      <label className="block mb-2 text-left">Telephone</label>
      <input name="phone" className="w-full mb-4 border p-2 rounded" required />
      <button type="submit" className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 w-full">Get a Quote</button>
      <p className="mt-3 text-sm text-gray-600">{status}</p>
    </form>
  )
}
