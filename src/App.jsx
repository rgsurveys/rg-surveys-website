import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Quote from './components/Quote'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen text-navy">
      <Navbar />
      <main className="space-y-24">
        <Hero />
        <Services />
        <Quote />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm text-gray-600">
        © {new Date().getFullYear()} RG Surveys — Surveying & Mapping
      </footer>
    </div>
  )
}
