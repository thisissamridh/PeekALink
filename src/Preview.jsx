import React from 'react';

const Preview = ({ preview }) => {
  return (
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
  );
};

export default Preview;
