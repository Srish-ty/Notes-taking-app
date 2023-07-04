import React from 'react';
import '../styles/notes.styles.css';

export const Note = ({data}) => {
  return (
    <article key={data.id} className='n_container'>

          <h3 className='n_head'> {data.title} </h3>
          <p className='n_para'> 
            {data.content} 
          </p>
          <p className='n_dates'>
            <span> Created: {data.createdDate} </span>
            <span> Updated: {data.updatedDate} </span>
          </p>
    </article>
  )
}
