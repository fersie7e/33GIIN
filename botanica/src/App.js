
import { BrowserRouter, Route, Routes} from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import Info from './pages/info/Info';

import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details/:categoria/:id' element={<Details />}/>
          <Route path='/info' element={<Info />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
