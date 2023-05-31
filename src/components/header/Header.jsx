import { useState } from 'react'

function Header() {

  return (
    <nav className="navbar bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <i className="fa-solid fa-user"></i>
        Toma el questionario
        </a>
    </div>
    </nav>
  )
}

export default Header
