import { Link } from 'react-router-dom'



//Styles
import './Navbar.css'


export default function Navbar() {

  

  return (
    <div className='navbar'>
        <nav>
            <Link to="/" className='home'>
                <h1>Tu guia botánica</h1>
            </Link>
            <Link to="/details">Información general</Link>
        </nav>
    </div>
  )
}
