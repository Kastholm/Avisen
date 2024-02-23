import React from 'react';
import { Stack, Card, Flex, Text } from '@sanity/ui';
import logo from '../static/logo.png';
import '../stylesheets/MyNavBar.css';
import navData from '../json/MyNavBar.json'

function MyNavbar(props) {

  const medier = [
    { "name": "Dagens Avis 1", "url": "URL_TIL_AVIS1" },
    { "name": "Dagens Avis 2", "url": "https://bellaitalia.sanity.studio/structure" },
    { "name": "Dagens Avis 3", "url": "URL_TIL_AVIS3" }
  ];

  // Denne funktion kaldes, når brugeren vælger en ny option
  const handleSelectChange = (event) => {
    const url = event.target.value;
    if (url) {
      window.location.href = url; // Omdiriger brugeren til den valgte URL
    }
  };



  return (
    <Stack>
      <nav tone="caution">
        <img src={logo} alt="Logo" />
        <div className='searchContainer'>
          <h2>Skift til andet medie:</h2>
          <select name="dagensAvis" id="dagensAvisSelect" onChange={handleSelectChange}>
            <option value="">Vælg et medie</option> 
            {medier.map((media) => (
              <option key={media.url} value={media.url}>{media.name}</option>
            ))}
          </select>

        <button onClick={() => chooseMedia()} >Vælg Medier</button>
        </div>
      </nav>
      {props.renderDefault && props.renderDefault(props)}
    </Stack>
  );
}

export default MyNavbar;
