import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './App.css';

function App() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.collection('link1').get();
        const linksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLinks(linksData);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Links List</h1>
      {links.length === 0 ? (
        <p>No links available.</p>
      ) : (
        <ul>
          {links.map(link => (
            <li key={link.id}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;