import React from 'react'

const services = [
  {title: 'Topographical Survey', desc: 'Detailed topo surveys for planning and design.'},
  {title: 'Boundary Survey', desc: 'Clear, accurate boundary and title surveys.'},
  {title: 'Drone Survey', desc: 'High-res aerial mapping and photogrammetry.'},
  {title: 'New House Setout', desc: 'Precise setting out for new builds.'},
]

export default function Services(){
  return (
    <section id="services" className="py-16 bg-white/60">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(s=> (
            <div key={s.title} className="p-6 bg-white rounded-lg header-shadow">
              <h3 className="font-semibold text-xl">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}