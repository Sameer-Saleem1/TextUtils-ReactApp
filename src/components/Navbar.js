import * as React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
 
export default function Navbar(props) {
  const [text,setText] = useState('Enable Dark Mode')

  let setMode = () =>{
    if(props.mode === 'light'){
      setText('Enable Dark Mode')
    }
    else {
      setText('Enable light Mode')
    }
  }

  return (
    <div>
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode}`} style={{backgroundColor:props.mode==='light'?'#f7f5f5':'grey'}}>
        <div className="container-fluid bg-main ">
            
          <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}fw-bold`} href="/"><h1>{props.title}</h1></a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode==='light'?'dark':'light'}`} to="/about">About</Link>
              </li>
            </ul>

            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch"    id="flexSwitchCheckDefault"/>
              <label className="form-check-label" onClick={setMode} htmlFor="flexSwitchCheckDefault">{text}</label>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Enter Title here',
    aboutText: 'About'
}