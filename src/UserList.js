import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Importer le fichier CSS pour la stylisation

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      });
  }, []);

  return (
    <div className="user">
      <h1>Liste des Utilisateurs</h1>
      <ul className='user-list'>
        {listOfUser.map(user => (
          <li key={user.id} className="user-item">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;