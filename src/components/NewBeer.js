import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewerTips, setBrewerTips] = useState("");
  const [attenuation, setAttenuation] = useState("");
  const [contributedBy, setContributedBy] = useState("");

  const navigate = useNavigate();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleTaglineChange(event) {
    setTagline(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleFirstBrewedChange(event) {
    setFirstBrewed(event.target.value);
  }

  function handleBrewerTipsChange(event) {
    setBrewerTips(event.target.value);
  }

  function handleAttenuationChange(event) {
    setAttenuation(event.target.value);
  }

  function handleContributedByChange(event) {
    setContributedBy(event.target.value);
  }

  async function handleSubmitForm(event) {
    event.preventDefault();
    const body = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewerTips,
      attenuation_level: attenuation,
      contributed_by: contributedBy,
    };

    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", body);
    navigate("/beers");
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleNameChange}
            id="name"
            type="text"
            name="name"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={handleTaglineChange}
            id="tagline"
            type="text"
            name="tagline"
            value={tagline}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleDescriptionChange}
            id="description"
            type="text"
            name="description"
            value={description}
          />
        </div>
        <div>
          <label htmlFor="firstBrewed">First Brewed</label>
          <input
            onChange={handleFirstBrewedChange}
            id="firstBrewed"
            type="text"
            name="firstBrewed"
            value={firstBrewed}
          />
        </div>
        <div>
          <label htmlFor="brewersTips">Brewers Tips</label>
          <input
            onChange={handleBrewerTipsChange}
            id="brewersTips"
            type="text"
            name="brewersTips"
            value={brewerTips}
          />
        </div>
        <div>
          <label htmlFor="attenuationLevel">Attenuation Level</label>
          <input
            onChange={handleAttenuationChange}
            id="attenuationLevel"
            type="number"
            name="attenuationLevel"
            value={attenuation}
          />
        </div>
        <div>
          <label htmlFor="contributedBy">Contributed By</label>
          <input
            onChange={handleContributedByChange}
            id="contributedBy"
            type="text"
            name="contributedBy"
            value={contributedBy}
          />
        </div>
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;
