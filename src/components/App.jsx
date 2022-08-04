import React, { useEffect, useState } from 'react';
import SearchIcon from '../assets/search.svg';
import '../index.css';
import Card from './Card';
const API_URL = `https://api.linkpreview.net?key=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState({});

  const ScrapeUrl = async (URL) => {
    const response = await fetch(`${API_URL}&q=${URL}`, {
      method: 'GET',
      mode: 'cors',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setPreview(data);
    console.log(data.description);
  };
  useEffect(() => {
    ScrapeUrl('https://www.apple.com');
  }, []);

  return (
    <div className="app">
      <h1>PeekaLink</h1>
      <div className="search">
        <input
          type="text"
          placeholder=""
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && ScrapeUrl(url)}
        />
        <img src={SearchIcon} alt="Search" onClick={() => ScrapeUrl(url)}></img>
      </div>
      <div className="container">
        {preview.hasOwnProperty('error') ? (
          <div className="empty">
            <h2>Please enter a valid URL</h2>
          </div>
        ) : (
          <>
            <Card preview={preview} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
