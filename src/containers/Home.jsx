import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { HomeSwiperSlider } from "../components/HomeSwiperSlider";
import { Categories } from "../components/Categories";
import { LoadingDataFile } from "../components/LoadingDataFile";
import { Add } from "../components/Add";
import { FooterMenu } from "../components/FooterMenu";
import "../styles/Home.css";

export function Home() {
  const url = "http://18.117.98.49:5000/api/v1/categories/1";

  const [api, setApi] = useState([]);
  const [seeModal, setSeeModal] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status === 500) {
          window.location.href = window.location.href + "500";
        }
        if (response.status === 521) {
          window.location.href = window.location.href + "521";
        }
        if (response.status === 404 || response.status != 200) {
          window.location.href = window.location.href + "notFound";
        }
        if (response.status === 200) {
          return response.json();
        }
      })
      .then((data) => {
        data.files.sort(()=>{ return Math.random() - 0.5 })
        setApi(data.files);
        setIsLoading(false);
      });
  }, []);

  const handleModal = () => {
    setSeeModal(!seeModal);
  };

  return (
    <div className="Home">
      <Header />
      <div className="Home-song-container">
        <h2>Canciones</h2>
        <div className="Home-song-container-slider">
          {isloading ? <LoadingDataFile /> : <HomeSwiperSlider api={api} />}
        </div>
      </div>
      <Categories />
      <div className="Home-add-button-container">
        <button className="Home-add-button" onClick={handleModal}>
          Agrega Tu Audio
        </button>
      </div>
      <Add see={seeModal} notSee={setSeeModal} />
      <FooterMenu />
    </div>
  );
}
