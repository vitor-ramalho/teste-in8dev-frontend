import React from 'react';
import Logo from '../../logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='logo-container'>
          <img className='logo' src={Logo} alt="Logo IN8" />
        </div>

        <div className='itens-container'>
          <a className='nav-item dot1' href="/">cadastro</a>
          <a className='nav-item dot2' href="/">lista</a>
          <a className='nav-item ps' href="/">sobre mim</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar