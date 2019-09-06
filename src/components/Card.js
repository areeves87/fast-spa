import React from 'react';

const Card = ({ title, description, thumbnailUrl }) => {
  return (
    <div className="fscard m-2">
      <img alt="" src={thumbnailUrl} />
      <h2 className="p-2">{title}</h2>
      <h3 className="px-2">{description}</h3>
    </div>
  );
};

export default Card;
