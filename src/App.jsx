import {BrowserRouter, Route, Route, Navigate} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './App.css'


function App() {
  
  return(
    <>
    <div>
      <BrowserRouter>
        <NavBar />
        <div className='container'>
          <Router>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Home />}/>
            <Route path="/register" element={<Home />}/>
          </Router>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

      
export default App
