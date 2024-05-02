import { Link } from 'react-router-dom'
// Styles
import './Tarjeta.css'

export default function Tarjeta( {tarjeta, manejarEleccion, flipped, categoria} ) {

    const manejarClick = () => {
        manejarEleccion(tarjeta)
    }
  return (
    <div className='card'>
        <div className= {flipped ? "flipped" : ""} onClick={manejarClick}>
            <div className="back" >
                <img src={tarjeta.img} alt="-" />
                <h4>{tarjeta.nombre}</h4>
            </div>
            <div className="front">
                <h4>{tarjeta.nombre}</h4>
                <div className='descripcion'>{tarjeta.descripcion.substring(0,120)}...</div>
                <Link to={`/details/${categoria}/${tarjeta.id}`}><div className='detalles'>Detalles</div></Link>
            </div>
        </div>
    </div> 
  )
}
