import React from 'react';
import { useState, useEffect } from 'react';
import { Note } from '../components/Note';


export const Notes= () => {
    const [notes, setNotes] = useState([]);
    //const apikey0='6158997032204f0abd89567fce056c9c';
    //const category='general';
    useEffect(() => {
      //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey0}&category=${category}`
      fetch('http://localhost:5000/notes',{
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Header':"*",
          Accept: 'application/json',
        },
      }) // API endpoint for notes
        .then(response => {return response.json();})
        .then(data => {setNotes(data.notes);})
        .catch(error => {console.error('Error fetching notes:', error);});
    },[]);

    console.log('This is the fetched data', notes);
    notes.forEach(note=>{console.log("this is a note: ",note)});
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
