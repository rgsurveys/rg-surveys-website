import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16 bg-white/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy mb-4">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg header-shadow">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="mt-2 text-gray-600">Email: <a href="mailto:rg_surveys@outlook.com" className="text-amber">rg_surveys@outlook.com</a></p>
            <p className="mt-1 text-gray-600">Phone: 07851603528</p>
          </div>
        </div>
      </div>
    </section>
  )
}
