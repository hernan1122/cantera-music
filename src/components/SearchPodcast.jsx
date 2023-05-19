import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSearchPodcast } from './LoadingSearchPodcast';
import '../styles/SearchCategories.css'

export function SearchPodcast() {
  const [podcasts, setPodcasts] = useState([])
  const [isloading, setIsLoading] = useState(true);

  const url = 'http://18.117.98.49:5000/api/v1/categories/2'

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        data.files.sort(() => {return Math.random() - 0.5})
        setPodcasts(data.files)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className='SearchCategories'>
      {isloading ? <LoadingSearchPodcast /> : podcasts.map((podcast) => {
        return (
          <Link
            to={`/player?id=${podcast.id}&2`}
            key={podcast.id}
            id={podcast.id}
            className="SearchCategories-item"
          >
            <img src={podcast.imageUrl} alt={podcast.nameFile} />
            <div className='SearchCategories-description'>
              <h3>{podcast.nameFile}</h3>
              <p>{podcast.nameAuthor}</p>
            </div>
          </Link>
        )
      }). slice(0, 5)}
    </div>
  );
}
