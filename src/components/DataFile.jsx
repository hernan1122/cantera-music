import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/DataFile.css'

export function DataFile({title, artist, img, id, catId}) {
  return (
    <div className='DataFile'>
      <ul>
        <li>
          <Link id={id} className='DataFile-content' to={`/player?id=${id}&${catId}`}>
            <img src={img} alt="" />
            <div className="DataFile-description">
              <h3>{ title }</h3>
              <p>{ artist }</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
