import { useState } from 'react'
import useFetch  from '../hooks/useFetch'
import Tarjeta from './Tarjeta'

// Styles
import './Flores.css'


export default function Flores() {
    const { data: flores, isPending, error } = useFetch('http://localhost:3000/flores')
    const [choice, setChoice] = useState(null)
    const flipped = true

    const manejarEleccion = (flor) => {
        setChoice(flor)
      }
    
  return (
    <div className='flores'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {flores && flores.map(flor => (
                <Tarjeta 
                    key={flor.id} 
                    tarjeta={flor}
                    manejarEleccion={manejarEleccion}
                    flipped={flor === choice }
                    categoria = 'flores'>
                </Tarjeta>
        ))}
    </div>
  )
}
