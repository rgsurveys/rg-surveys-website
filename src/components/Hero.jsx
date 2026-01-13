import React from 'react'

export default function Hero(){
  return (
    <section id="home" className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="flex-1 text-center md:text-left">
          <img src="/assets/logo.png" alt="RG Surveys" className="mx-auto md:mx-0 w-64 mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy">RG Surveys</h1>
          <p className="mt-3 text-xl text-gray-600">Professional surveying & mapping services — accurate, timely, reliable.</p>
          <div className="mt-6">
            <a href="#quote" className="inline-block bg-amber text-white px-6 py-3 rounded-lg font-semibold shadow">Get a Quote</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-xl p-6 bg-white header-shadow">
            <h3 className="font-semibold">Why choose RG Surveys?</h3>
            <ul className="mt-4 text-gray-600 list-disc ml-5">
              <li>Topographical and boundary surveys</li>
              <li>Drone surveys and site mapping</li>
              <li>20 years experience, insured surveyor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
