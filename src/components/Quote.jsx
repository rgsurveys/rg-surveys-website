import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Quote(){
  const mapRef = useRef(null)
  const drawingManagerRef = useRef(null)
  const polygonRef = useRef(null)
  const [serviceType, setServiceType] = useState('Topographical Survey')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  useEffect(()=>{
    if(!window.google) {
      console.warn('Google Maps script not loaded - ensure API key is set in index.html')
      return
    }
    const center = { lat: 51.5074, lng: -0.1278 } // default centre (London)
    const map = new window.google.maps.Map(mapRef.current, { center, zoom: 13 })
    const drawingManager = new window.google.maps.drawing.DrawingManager({
      drawingMode: null,
      drawingControl: true,
      drawingControlOptions: {
        position: window.google.maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon', 'rectangle']
      },
      polygonOptions: { fillColor: '#f5a623', strokeWeight: 2, editable: true }
    })
    drawingManager.setMap(map)
    drawingManagerRef.current = drawingManager

    window.google.maps.event.addListener(drawingManager, 'overlaycomplete', function(e){
      if(polygonRef.current){
        polygonRef.current.setMap(null)
      }
      polygonRef.current = e.overlay
    })
  },[])

  const handleSend = async (e) => {
    e.preventDefault()
    //** TEMPORARY COMMENT**if(!polygonRef.current){
      //setStatus({type:'error', text:'Please draw/select an area on the map first.'})
      //return
    }
    // collect polygon coordinates
    let path = []
    if(polygonRef.current.getPath){
      const p = polygonRef.current.getPath()
      for(let i=0;i<p.getLength();i++){
        const pt = p.getAt(i)
        path.push({lat: pt.lat(), lng: pt.lng()})
      }
    } else if(polygonRef.current.getBounds){
      const b = polygonRef.current.getBounds()
      const ne = b.getNorthEast(), sw = b.getSouthWest()
      path = [{lat:ne.lat(), lng:ne.lng()}, {lat:sw.lat(), lng:sw.lng()}]
    }

    const templateParams = {
      to_email: 'rg_surveys@outlook.com',
      service_type: serviceType,
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      message: message,
      area_coords: JSON.stringify(path, null, 2)
    }

    setStatus({type:'loading', text:'Sending quote request...'})
    try{
      // Replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY with your EmailJS values
      const SERVICE_ID = 'service_tebbp2b'
      const TEMPLATE_ID = 'Ytemplate_9lmgupm'
      const PUBLIC_KEY = 'Kvb_o_K93uaQ7-QXg'
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      setStatus({type:'success', text:'Quote request sent — we will contact you shortly.'})
      setName(''); setEmail(''); setPhone(''); setMessage('')
      if(polygonRef.current){ polygonRef.current.setMap(null); polygonRef.current = null }
    }catch(err){
      console.error(err)
      setStatus({type:'error', text:'Failed to send — check EmailJS config in the code.'})
    }
  }

  return (
    <section id="quote" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-navy mb-4">Get a Quote</h2>
          <p className="text-gray-600 mb-4">Select the area on the map using the drawing tools (rectangle or polygon), then complete the form.</p>
          <div ref={mapRef} className="w-full h-96 rounded-lg overflow-hidden header-shadow" />
        </div>
        <form onSubmit={handleSend} className="bg-white p-6 rounded-lg header-shadow">
          <label className="block">Service
            <select value={serviceType} onChange={e=>setServiceType(e.target.value)} className="w-full mt-2 p-2 border rounded">
              <option>Topographical Survey</option>
              <option>Boundary</option>
              <option>Drone Survey</option>
              <option>New House Setout</option>
            </select>
          </label>
          <label className="block mt-4">Name
            <input value={name} onChange={e=>setName(e.target.value)} className="w-full mt-2 p-2 border rounded" required />
          </label>
          <label className="block mt-4">Email
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full mt-2 p-2 border rounded" required />
          </label>
          <label className="block mt-4">Telephone
            <input value={phone} onChange={e=>setPhone(e.target.value)} className="w-full mt-2 p-2 border rounded" required />
          </label>
          <label className="block mt-4">Notes (optional)
            <textarea value={message} onChange={e=>setMessage(e.target.value)} className="w-full mt-2 p-2 border rounded" rows="3" />
          </label>
          <div className="mt-4">
            <button type="submit" className="bg-navy text-white px-5 py-2 rounded font-semibold">Get a Quote</button>
          </div>

          {status && (
            <div className={`mt-4 p-3 rounded ${status.type==='error'?'bg-red-100 text-red-700':'bg-green-100 text-green-700'}`}>
              {status.text}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
