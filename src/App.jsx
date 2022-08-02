import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
import './index.css';
import Preview from './Preview';
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
      {/* <Preview preview={preview} /> */}
      <WebsiteCard preview={preview} />
    </div>
  );
};

export default App;
