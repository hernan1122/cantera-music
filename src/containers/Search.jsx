import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DataFile } from '../components/DataFile';
import { LoadingDataFile } from '../components/LoadingDataFile';
import { SearchPodcast } from '../components/SearchPodcast';
import { SearchAudioBooks } from '../components/SearchAudioBooks';
import { FooterMenu } from '../components/FooterMenu';
import '../styles/Search.css'

//icons
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from 'react-icons/cg'

export function Search() {
  const [files, setFiles] = useState([])
  const [filesSearch, setFilesSearch] = useState([])
  const [suggesting, setSuggesting] = useState([])
  const [search, setSearch] = useState('')
  const [isloading, setIsLoading] = useState(true);

  const url = "http://18.117.98.49:5000/api/v1/files";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        data.sort(() => {return Math.random() - 0.5})
        setFiles(data)
        setFilesSearch(data)
        setSuggesting(data)
        setIsLoading(false)
      })
  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
    filterSearch(e.target.value)
  }

  const deleteSearch = () => {
    setSearch('')
  }

  const filterSearch = (searchTerm) => {
    let searchResults = filesSearch.filter((element) => {
      if (
        element.nameFile.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
        element.nameAuthor.toString().toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return element
      }
    })

    setFiles(searchResults)
  }

  return (
    <div className='Search'>
      <div className='Search-container'>
        <div className="Search-container-input">
          <div className="Search-icon-container">
            <AiOutlineSearch className="Search-icons" />
          </div>
          <input
            className="Search-input"
            type="text"
            value={search}
            placeholder="Qué quieres escuchar?"
            onChange={handleChange}
          />
          <button className="Search-icon-container" onClick={deleteSearch}>
            <CgClose className="Search-icons" />
          </button>
        </div>
      </div>
      <div className="Search-container-suggesting">
        {search === '' ? <div></div> :
          [
            <h2>Resultados de tu búsqueda:</h2>,
            files.length === 0 ? (
              <h5>No tenemos el audio que buscas. <br />
                Pero, <span>¡Puedes agregarlo!</span>
              </h5>
            ) : (
              files.map((file) => (
                <DataFile
                  key={file.id}
                  id={file.id}
                  img={file.imageUrl}
                  title={file.nameFile}
                  artist={file.nameAuthor}
                  catId={file.categoryId}
                />
              ))
            )
          ]}
        <h2>Sugerencias para ti</h2>
        {isloading ? <LoadingDataFile /> : suggesting.map(sugg => {
          return (
            <DataFile
              key={sugg.id}
              id={sugg.id}
              img={sugg.imageUrl}
              title={sugg.nameFile}
              artist={sugg.nameAuthor}
              catId={sugg.categoryId}
            />
          )
        }).slice(0, 6)}
      </div>
      <div className="Search-container-podcast">
        <h2>Podcast</h2>
        <SearchPodcast />
      </div>
      <div className="Search-container-audiobook">
        <h2>Audio Libros</h2>
        <SearchAudioBooks />
      </div>
      <FooterMenu />
    </div>
  );
}
