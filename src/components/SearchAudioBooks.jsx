import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSearchPodcast } from './LoadingSearchPodcast';
import '../styles/SearchCategories.css'

export function SearchAudioBooks() {
  const [audioBooks, setAudioBooks] = useState([])
  const [isloading, setIsLoading] = useState(true);

  const url = 'http://18.117.98.49:5000/api/v1/categories/3'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.files.sort(() => {return Math.random() - 0.5})
        setAudioBooks(data.files)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='SearchCategories'>
      {isloading ? <LoadingSearchPodcast /> : audioBooks.map((audioBook) => {
        return (
          <Link
            to={`/player?id=${audioBook.id}&3`}
            key={audioBook.id}
            id={audioBook.id}
            className="SearchCategories-item"
          >
            <img src={audioBook.imageUrl} alt={audioBook.nameFile} />
            <div className='SearchCategories-description'>
              <h3>{audioBook.nameFile}</h3>
              <p>{audioBook.nameAuthor}</p>
            </div>
          </Link>
        )
      }). slice(0, 5)}
    </div>
  );
}
