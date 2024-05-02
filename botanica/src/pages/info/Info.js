import useFetch  from '../../hooks/useFetch'
import { useState } from 'react'

//Styles
import './Info.css'
import Acordeon from '../../components/Acordeon'

export default function Info() {

    const { data: preguntas, isPending, error } = useFetch('http://localhost:3000/preguntas')
    const [choice, setChoice] = useState(null)
    
    const manejarEleccion = (p) => {
        setChoice(p)
    }

  return (
    <div className='preguntas'>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {preguntas && preguntas.map(pregunta => (
            <Acordeon
                key={pregunta.id}
                pregunta={pregunta}
                manejarEleccion={manejarEleccion}
                activo={pregunta === choice}>
            </Acordeon>
        ))}
    </div>
  )
}
