import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import './index.css';
const APIkEY = '40e9cdda28cfcf01f9663be479332058';
const API_URL = `https://api.linkpreview.net?key=${APIkEY}`;

const App = () => {
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState({});

  const ScrapeUrl = async (URL) => {
    const response = await fetch(`${API_URL}&q=${URL}`);
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    ScrapeUrl('https://www.google.com');
  }, []);

  return (
    <div className="app">
      <h1>Link Preview</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter a URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && ScrapeUrl(url)}
        />
        <img src={SearchIcon} alt="Search" onClick={() => ScrapeUrl(url)}></img>
      </div>
    </div>
  );
};

export default App;
