import React from 'react';

const Search = ({ props }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter a URL"
        value={props.url}
        onChange={(e) => props.setUrl(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && props.ScrapeUrl(props.url)}
      />
      <img
        src={props.SearchIcon}
        alt="Search"
        onClick={() => props.ScrapeUrl(props.url)}
      ></img>
    </div>
  );
};

export default Search;
