import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
            <Link to='/'>Test</Link>
            <Link to='/dolor-de-espalda'>Dolor de espalda</Link>
            <Link to='/espondiloartritis-axial'>Espondiloartritis axial</Link>
            <Link to='/ahora-que'>Ahora que</Link>
      </div>
    </nav>
  )
}

export default Header
