import React, { useState, useEffect } from 'react';
import Card from '../card/Card';
const Main = (props) => {
  const [data, setData] = useState([]);
  const myData = async () => {
    const response = await fetch(
      'http://universities.hipolabs.com/search?country=United%20Arab%20Emirates',
      {
        method: 'GET',
      }
    );
    const city = await response.json();
    if (props.soD == 'none') {
      setData(city);
    } else if (props.soD == 'byName') {
      const D = city.sort();
      setData(D);
    }
  };
  useEffect(() => {
    myData();
  }, []);

  return (
    <section className="cards-collector">
      <ul className="all-cards">
        {data &&
          data.map((m, ind) => (
            <Card
              key={m.key}
              name={m.name}
              country={m.country}
              domain={m.domain}
              address={m.web_pages}
              id={ind}
            />
          ))}
      </ul>
    </section>
  );
};

export default Main;
