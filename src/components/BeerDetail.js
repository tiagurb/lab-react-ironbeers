import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetail() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    //Call the api
    async function getBeers() {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );
      setBeer(response.data);
      console.log(response.data);
    }

    getBeers();
  }, [beerId]);

  return (
    <div>
      <>
        <ul>
          {beer ? (
            <li key={beer._id}>
              <img src={beer.image_url} alt="beer bottle" />
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>{beer.first_brewed}</p>
              <p>{beer.attenuation_level}</p>
              <p>{beer.description}</p>
              <p>Created by: {beer.contributed_by}</p>
            </li>
          ) : (
            <p>Loading ...</p>
          )}
        </ul>
      </>
    </div>
  );
}

export default BeerDetail;