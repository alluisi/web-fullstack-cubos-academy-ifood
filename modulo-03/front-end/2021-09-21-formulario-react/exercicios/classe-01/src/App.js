import React, { useState } from "react";

import getSpotifyToken from "./utils/getSpotifyToken.js";
import Card from "./components/Card";

const baseURL = (pesquisa) => `https://api.spotify.com/v1/search?q=${pesquisa}&type=track&limit=10`;

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState({ message: "", erro: false, })
  const [loading, setLoading] = useState(false);
  const [begin, setBegin] = useState({ initialState: true, empty: true });

  async function handleSubmit(e) {
    e.preventDefault();

    if (!pesquisa) return;

    setLoading(true);

    try {
      const token = await getSpotifyToken();

      const response = await fetch(baseURL(pesquisa), {
        headers: {
          Authorization: token
        }
      });
      const { tracks } = await response.json();
      setTracks(tracks.items);
      setBegin({ initialState: false, empty: tracks.items.length > 0 ? false : true });
      setLoading(false);
      setError({ message: "", erro: false });

    } catch (e) {
      setTracks([]);
      setLoading(false);
      setError({ message: e.message, erro: true });
      console.log(e.message);
    }



  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
      </form>
      {loading && (<span>Carregando...</span>)}
      {(error.erro && !loading) && (<span style={{ color: "red" }}>Erro: {error.message}</span>)}
      {(!begin.initialState && begin.empty && !loading) && (<span>Nenhum resultado encontrado</span>)}
      {tracks.map((track, index) => (
        <Card track={track} key={index} />
      ))}
    </div>
  );
}

export default App;
