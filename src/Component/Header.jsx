import React from 'react'
import './Header.css'
import btnModule from './Button.module.css'
import logo from '../assets/logo.png' 
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
    <div className='display'>
    <div>
      <img src={logo} className='logo' alt='home'/>
    </div>
    <div>
    <nav>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/menu'}>Menu</Link></li>
        <li><Link to={'/chef'}>Chef's Special</Link></li>
        <li><Link to={'/reviews'}>Review</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
     </nav>
    </div>
      <div className='button'>
      <button className={btnModule.signup}>Sign up</button>
      <button className={btnModule.login}>Log in</button>
      </div>
    </div>
    
    </>
  )
}
