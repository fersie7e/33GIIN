import { Link } from 'react-router-dom'

import './Acordeon.css'

export default function Acordeon({pregunta, manejarEleccion, activo}) {

    const manejarClick = () => {
        manejarEleccion(pregunta)
    }
    
  return (
    <div className="acordeon">
        <div className="titulo" onClick={manejarClick}>
            <h2>{pregunta.pregunta}</h2>
        </div>
        <div className={activo? "descripcion" : "noDisplay"}>
            <div className="imagen">
                <img src={pregunta.img} alt="-" />
            </div>
            <div className="texto">
                <p>{pregunta.respuesta}</p>
                <ul>
                {pregunta.caracteristicas && pregunta.caracteristicas.map(carac => (
                    <li>{carac}</li>
                ))}
                </ul>
            </div>
            <Link to={pregunta.ref}><div className="boton">+ Info</div></Link>
            
        </div>
    </div>
  )
}
