import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicial } from "../components/Inicial";
import { Home } from "../containers/Home";
import { Search } from "../containers/Search";
import { Player } from "../containers/Player";
import { CategorySong } from "../containers/CategorySong";
import { CategoryPodcast } from "../containers/CategoryPodcast";
import { CategoryAudioBooks } from "../containers/CategoryAudioBooks";
import { NotFound } from "../containers/NotFound";
import { Error500 } from "../containers/error500";
import { Error521 } from "../containers/error521";

function App() {
  const [start, setStart] = useState(true);

  setTimeout(() => { setStart(false) }, 3500);

  return (
    <BrowserRouter>
        {start ? <Inicial/> : 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/player" element={<Player />} />
            <Route path="/categorysong" element={<CategorySong />} />
            <Route path="/categorypodcast" element={<CategoryPodcast />} />
            <Route path="/categoryaudiobooks" element={<CategoryAudioBooks />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="/521" element={<Error521 />} />
          </Routes>
        }
    </BrowserRouter>
  );
}

export default App;
