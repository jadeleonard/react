import React from 'react'
import Navbar from './components/navbar'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />


      <Link to='/dashboard'>LINK</Link>
    </div>
  )
}

export default App
