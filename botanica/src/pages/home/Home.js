import Flores from '../../components/Flores'
import Frutales from '../../components/Frutales'
//styles
import './Home.css'

export default function Home() {
    
    return (

        <div className='home'>
            <h1 className='title'>Flores</h1>
            <hr />
            <Flores />
            <br />
            <h1 className='title'>Frutales</h1>
            <hr />
            <Frutales />
        </div>
    )
}
