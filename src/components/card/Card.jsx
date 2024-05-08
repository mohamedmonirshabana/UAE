import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, country, domain, address, id }) => {
  return (
    <li className="card">
      <div className="itemText">
        <h3>{country}</h3>
        <p>{name}</p>
        <Link to={address[0]} className="linP">
          Domain
        </Link>
        <p>{domain}</p>
        <Link className="moreinfo" to={`/Details/${id}`}>
          More info
        </Link>
      </div>
    </li>
  );
};

export default Card;
