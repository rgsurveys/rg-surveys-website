import React from 'react'
import Quote from './components/Quote'

export default function App() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">RG Surveys</h1>
      <p className="text-lg mb-6 text-gray-700">Surveying & Mapping Services</p>
      <Quote />
    </div>
  )
}
