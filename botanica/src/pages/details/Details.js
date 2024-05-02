import { useParams, Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

//styles
import './Details.css'

export default function Details() {

    const { categoria, id } = useParams()
    const url = 'http://localhost:3000/' + categoria + '/' + id
    const {data, isPending, error} = useFetch(url)
    

  return (
    <div className='planta'>
      
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && (
        <>
            <h2 className="page-title">{data.nombre}</h2>
            <div className="contenido">
                <div className="imagen">
                    <img src={data.img} alt="-" />
                </div>
                <hr />
                <div className="info">
                    <dl>
                        <dt>Nombre cientifico</dt>
                        <dd>{data.nombre_cientifico}</dd>
                        <dt>Descripcion</dt>
                        <dd>{data.descripcion}</dd>
                        <dt>Periodo de siembra</dt>
                        <dd>{data.siembra}</dd>
                        <dt>Periodo de cosecha / floración</dt>
                        <dd>{data.floracion}</dd>
                        <dt>Periodo de poda</dt>
                        <dd>{data.poda}</dd>
                        <dt>Recomendaciones riego</dt>
                        <dd>{data.riego}</dd>
                    </dl>
                </div>
                <Link to='/'><div className="boton">Volver</div></Link>
            </div>
            
          
        </>

      )}
 
    </div>
  )
}
