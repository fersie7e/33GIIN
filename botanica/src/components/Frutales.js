import { useState } from 'react'
import useFetch  from '../hooks/useFetch'
import Tarjeta from './Tarjeta'

// Styles
import './Frutales.css'

export default function Frutales() {
    const { data: frutales, isPending, error } = useFetch('http://localhost:3000/frutales')
    const [choice, setChoice] = useState(null)
    const flipped = true

    const manejarEleccion = (arbol) => {
      setChoice(arbol)
    }

  return (
    <div className='frutales'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {frutales && frutales.map(arbol => (
            <Tarjeta 
              key={arbol.id} 
              tarjeta={arbol}
              manejarEleccion={manejarEleccion}
              flipped={arbol === choice }
              categoria = 'frutales'>
            </Tarjeta>
            
        ))}
    </div>
  )
}
