import React, { useContext, useEffect, useState } from 'react'
import './ListRegister.css'
import PersonContext from '../../context/PersonContext';

const ListRegister = () => {
  const { data, setData } = useContext(PersonContext);

  const fakeData = [
    {
      "_id": "628c00651fd439281cd7a256",
      "name": "sadsad",
      "email": "afasd@asdsad.com",
      "birth": "1111-01-01T00:00:00.000Z",
      "phone": "1111111111111",
      "__v": 0
    },
    {
      "_id": "628c01151fd439281cd7a258",
      "name": "Vitor JSON",
      "email": "font@front.com",
      "birth": "1998-01-07T00:00:00.000Z",
      "phone": "65432165",
      "__v": 0
    }
  ]


  return (
    <div className='list-register'>
      <h1 className='title'>Lista De Cadastro</h1>
      <div className='table-container'>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Email</th>
              <th>Nascimento</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((person) => (
              <tr>
                <td>{}</td>
                <td>{person.name}</td>
                <td>{person.email}</td>
                <td>{person.birth}</td>
                <td>{person.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRegister