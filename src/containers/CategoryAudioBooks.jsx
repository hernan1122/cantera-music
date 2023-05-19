import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { DataFile } from "../components/DataFile";
import { FooterMenu } from "../components/FooterMenu";
import { LoadingDataFile } from "../components/LoadingDataFile";
import "../styles/Category.css";

export function CategoryAudioBooks() {
  const categoryId = 3;
  const url = `http://18.117.98.49:5000/api/v1/categories/${categoryId}`;

  const [isLoading, setIsLoading] = useState(true);
  const [api, setApi] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
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
          <h2>Audio Libros <span>({api.length})</span></h2>
          {isLoading ? (
            <LoadingDataFile />
          ) : (
            api.map((book) => {
              return (
                <DataFile
                  id={book.id}
                  key={book.id}
                  img={book.imageUrl}
                  title={book.nameFile}
                  artist={book.nameAuthor}
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
