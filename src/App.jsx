import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import './index.css';

import WebsiteCard from './WebsiteCard';
const API_URL = `https://api.linkpreview.net?key=${process.env.REACT_APP_API_KEY}`;

const App = () => {
  const [url, setUrl] = useState('');
  const [preview, setPreview] = useState({});

  const ScrapeUrl = async (URL) => {
    const response = await fetch(`${API_URL}&q=${URL}`);
    const data = await response.json();
    setPreview(data);
  };
  useEffect(() => {
    ScrapeUrl('https://www.google.com');
  }, []);

  return (
    <div className="app">
      <h1>PeakALink</h1>
      <h4>Preview webiste with ease</h4>
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
      {/* <Preview preview={preview} /> */}
      {preview.hasOwnProperty('error') ? (
        <div className="empty">
          <h2>Please enter a valid URL</h2>
        </div>
      ) : (
        <WebsiteCard preview={preview} />
      )}
    </div>
  );
};

export default App;
