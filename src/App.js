import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";
import React, { useState } from 'react'


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  
 
const [contacts, setContacts] = useState(contactsJSON.slice(0, 5)); 

const [wonOscar, setWonOScar] = useState(true);
const [wonEmmy, setWonEmmy] = useState (true);

const addRandomContact = () => {
  const index = Math.floor(Math.random() * contactsJSON.length);
  const newRandomContact = contactsJSON[index];
  contactsJSON.slice(index, 1);
  setContacts([newRandomContact, ...contacts]);
};

const sortByPopularity = () => {
  contacts.sort((a, b) => (b.popularity > a.popularity ? 1 : -1))
  setContacts([...contacts])

};

  const sortByName = () => {
  const filterByName = contacts.sort((a, b) => (a.name > b.name ? 1 : -1))
  setContacts([...filterByName])

}
const deleteContacts = (id) => {
  setContacts(contacts.filter((contacts) => contacts.id !== id));
};

  return(
  <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
    <table>
    <tbody>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar </th>
        <th>Won Emmy</th>
        <th>Actions</th>
        
      </tr>
      {contacts.map(contacts => {
        return (
          <tr>
          <td><img src={contacts.pictureUrl} alt="contact" width="100px" /></td>
          <td>{contacts.name}</td>
          <td>{contacts.popularity}</td>
          <td>{contacts.wonOscar ? "🏆" : ""}</td>
          <td>{contacts.wonEmmy ? "🏆" : ""}</td> 
          <td><button onClick={() => deleteContacts(contacts.id)}>Delete Contact</button></td>
        </tr>
        
        )})}
      </tbody>
    </table>
  </div>
);
}
export default App;