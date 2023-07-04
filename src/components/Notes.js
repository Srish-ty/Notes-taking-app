import React from 'react';
import { useState, useEffect } from 'react';
import { Note } from '../components/Note';


export const Notes= () => {
    const [notes, setNotes] = useState([{ title:'first title', content:'this is the para', createdDate:'today', updatedDate: 'yr' },
    { title:'second title', content:'hey yyy is the para', createdDate:'tmrw', updatedDate:'day aft tmrw' }]);
    const apikey0='6158997032204f0abd89567fce056c9c';
  /*
    useEffect(() => {
      // 'http://localhost:5000/notes'
      fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey0}`) // API endpoint for notes
        .then(response => response.json())
        .then(data => setNotes(data))
        .catch(error => console.error('Error fetching notes:', error));
    }, []);
*/

  return (
    <div className='show_notes'>
        <h1 className='heading0'> Notes</h1>
        {
        notes.map((note) => (
          <Note data={note}/>
        ))
        }
      </div>
  )
}
