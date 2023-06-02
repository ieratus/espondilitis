import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary rounded p-3" aria-label="Thirteenth navbar example">
    <div className="container-fluid ">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
        <a className="navbar-brand col-lg-3 me-0" href="#">Este puto dolor</a>
        <ul className="navbar-nav col-lg-6 justify-content-lg-center">
          <li className="nav-item">
            <Link aria-current="page" className="nav-link active" to='/'>Test</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to='/dolor-de-espalda'>Dolor de espalda</Link>
          </li>
          <li className="nav-item">
            <Link to='/espondiloartritis-axial' className="nav-link ">Espondiloartritis axial</Link>
          </li>
          <li> 
            <Link to='/ahora-que' className="nav-link ">Ahora que</Link>
          </li>
        </ul>
        <div className="d-lg-flex col-lg-3 justify-content-lg-end">
          <button className="btn btn-info">Test</button>
        </div>
      </div>
    </div>
  </nav>
    // <nav classNameName="navbar bg-light">
    //   <div classNameName="container-fluid">
    //   <i class="bi bi-clipboard-heart"></i>
    //         <Link to='/'>Test</Link>
    //         <Link to='/dolor-de-espalda'>Dolor de espalda</Link>
    //         
    //        
    //   </div>
    // </nav>
  )
}

export default Header
