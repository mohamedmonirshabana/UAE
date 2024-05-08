import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
const Details = () => {
  const param = useParams();
  const { cid } = param;
  const [city, setCity] = useState();

  const myData = async () => {
    const response = await fetch(
      'http://universities.hipolabs.com/search?country=United%20Arab%20Emirates',
      {
        method: 'GET',
      }
    );
    const data = await response.json();
    console.log(data[cid]);
    const DD = data[cid];
    setCity(DD);
  };

  useEffect(() => {
    myData();
  }, []);

  return (
    <div style={{ paddingLeft: 100, paddingRight: 100 }}>
      <h1>Country: {city && city.country}</h1>
      <p>Name: {city && city.name}</p>
      <Link target="_blank" to={city && city.web_pages[0]}>
        Web site
      </Link>
    </div>
  );
};

export default Details;
