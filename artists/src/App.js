import { useState } from "react";
import data from "./components/data";
import List from "./components/List";
import logo from "./images/spotify.png";

const App = () => {
  const [artist, setArtist] = useState(data);
  return (
    <main>
      <section className="container">
        <h1 className="logo">
          <img src={logo} width="150px" height="auto" alt="Spotify logo" />
        </h1>

        <h3 className="title">Top {artist.length} Spotify Artists</h3>
        <List artist={artist} />
        <button onClick={() => setArtist([])}>Clear All</button>
      </section>
    </main>
  );
};

export default App;
