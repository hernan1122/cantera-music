import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DataFile } from "../components/DataFile";
import { FooterMenu } from "../components/FooterMenu";
import { LoadingDataFile } from "../components/LoadingDataFile";
import "../styles/Category.css";

export function CategorySong() {
  const categoryId = 1;
  const url = `http://18.117.98.49:5000/api/v1/categories/${categoryId}`;

  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) =>{
        if (response.status === 500) {
          window.location.href = window.location.href + '500'
      } 
        if (response.status === 521) {
          window.location.href = window.location.href + '521'
      } 
        if (response.status === 404 || response.status != 200) {
          window.location.href = window.location.href + 'notFound'
      } 
        if (response.status === 200) {
          return response.json();
      } 
      })
      .then((data) => {
        setApi(data.files);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <div className="Category">
        <div className="Category-container">
            <h2>Canciones <span>({api.length})</span></h2>
          {isLoading ? (
            <LoadingDataFile />
          ) : (
            api.map((song) => {
              return (
                <DataFile
                  id={song.id}
                  key={song.id}
                  img={song.imageUrl}
                  title={song.nameFile}
                  artist={song.nameAuthor}
                  catId={categoryId}
                />
              );
            })
          )}
        </div>
      </div>
      <FooterMenu />
    </div>
  );
}
