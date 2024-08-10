import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Coins from './Components/Coins'
import Exchanges from './Components/Exchanges'
import CoinDetails from './Components/CoinDetails'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/Exchanges' element={<Exchanges/>}/>
        <Route  path='/Coins' element={<Coins/>}/>
        <Route path='/coin/:id' element={<CoinDetails/>} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App