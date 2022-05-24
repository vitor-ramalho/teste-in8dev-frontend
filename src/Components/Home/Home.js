import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='section-home'>
        <div className='title'>
          <h1>Estágio</h1>
          <p> prova de seleção</p>
        </div>
      </div>
    </div>
  )
}

export default Home