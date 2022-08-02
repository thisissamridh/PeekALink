import React from 'react';
//TODO - order : link , photo , title , description
const WebsiteCard = ({ preview }) => {
  return (
    <div className="preview">
      <div>
        <p>{preview.url}</p>
      </div>
      <div>
        <img
          src={
            preview.image !== 'N/A'
              ? preview.image
              : 'https://via.placeholder.com/400'
          }
          alt=""
        />
      </div>
      <div>
        <span>{preview.title}</span>
        <h3>{preview.description}</h3>
      </div>
    </div>
  );
};

export default WebsiteCard;
