import React from 'react'

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
}

export default function Navbar(){
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur z-40 header-shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img src="/assets/logo.png" alt="RG Surveys" className="logo-img" />
          <div>
            <div className="font-bold text-lg">RG Surveys</div>
            <div className="text-xs text-gray-500">Surveying & Mapping</div>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <button className="hover:text-amber" onClick={()=>scrollToId('home')}>Home</button>
          <button className="hover:text-amber" onClick={()=>scrollToId('services')}>Services</button>
          <button className="hover:text-amber" onClick={()=>scrollToId('quote')}>Get a Quote</button>
          <button className="hover:text-amber" onClick={()=>scrollToId('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  )
}