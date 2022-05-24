import React, { useContext, useState } from 'react';
import PersonContext from '../../context/PersonContext';
import './Register.css';


const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [phone, setPhone] = useState('');

  const { data, setData } = useContext(PersonContext);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      birth,
      phone
    }

    const response = await fetch('http://localhost:3001/person', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json();

    console.log(data);
  }
  return (
    <>
      <div className='container'>
        <h1 className='title'>Cadastro</h1>
        <div className='register-container'>
          <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              name="mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="nasc">Nascimento</label>
            <input
              type="date"
              name="nasc"
              value={birth}
              onChange={e => setBirth(e.target.value)}
            />
            <label htmlFor="phone">Telefone</label>
            <input
              type="phone"
              name="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <button type='submit' className='btn-register'>Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register