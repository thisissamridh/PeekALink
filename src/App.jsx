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
      <div>
        <h2>Preview</h2>
        <div className="preview">
          <div className="preview-image">
            <h2>Thumbnail</h2>
            <img src={preview.image} alt="Preview" />
          </div>
          <h2>Title</h2>
          <div className="preview-text">
            <h3>{preview.title}</h3>
            <h2>Description</h2>
            <p>{preview.description}</p>
            <h2>Website Link</h2>
            <a href={preview.url}>{preview.url}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
