import React from 'react';

const Card = ({ image, name, title }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h3>{name}</h3>
        <p>{title}</p>
        <button className="follow-btn">Subscribe Now</button>
      </div>
    </div>
  );
};

export default Card;
