import React, { useEffect, useState } from 'react';
import { POST_PERSON } from '../api/endpoints';

export const PersonContext = React.createContext();

export const PersonStorage = ({children}) => {
  const [data, setData] = useState([]);

  const getPersons = async (e) => {
    const response = await fetch('http://localhost:3001/persons', {
      method: 'GET'
    });

    const data = await response.json();

    setData(data);
  }

  useEffect(() => {
    getPersons();
  }, [])

  return (
    <PersonContext.Provider value={{data, setData, getPersons}}>
      {children}
    </PersonContext.Provider>
  )
}

export default PersonContext