import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeers() {
  const [beer, setBeer] = useState([]);
  useEffect(() => {
    //Call the api
    async function getBeers() {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeer(response.data);
    }

    getBeers();
  }, []);

  return (
    <div>
      <>
        <h3>List of Beers</h3>
        <ul>
          {beer.length > 0 ? (
            beer.map((beer) => {
              return (
                <li key={beer._id}>
                  <img src={beer.image_url} alt="beer bottle" />
                  <Link to={beer._id}>{beer.name}</Link>
                  <p>{beer.tagline}</p>
                  <p>Created by: {beer.contributed_by}</p>
                </li>
              );
            })
          ) : (
            <p>Loading ...</p>
          )}
        </ul>
      </>
    </div>
  );
}

export default ListBeers;