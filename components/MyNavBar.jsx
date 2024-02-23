import React, { useEffect } from 'react';
import { useState } from 'react';
import { Stack, Card, Flex, Text } from '@sanity/ui';
import logo from '../static/logo.png';
import '../stylesheets/MyNavBar.css';


function MyNavbar(props) {

  const [navItems, setNavItems] = useState();
  const [showNavItems, setShowNavItems] = useState(false)

  useEffect(() => {
    const medier = [
      { "name": "___________", "url": "#" },
      { "name": "Nyheder24", "url": "URL_TIL_AVIS1" },
      { "name": "___________", "url": "#" },
      { "name": "Dagens.de", "url": "https://bellaitalia.sanity.studio/structure" },
      { "name": "Dagens.se", "url": "URL_TIL_AVIS3" },
      { "name": "Dagens.no", "url": "URL_TIL_AVIS3" },
      { "name": "Dagens.dk", "url": "URL_TIL_AVIS3" }
    ];

setNavItems(medier);
setShowNavItems(true);
  }, [])

  


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

          {
            showNavItems === true ? (<select name="dagensAvis" id="dagensAvisSelect" onChange={handleSelectChange}>
            <option value="">Vælg et medie</option> 
            {navItems.map((media) => (
              <option key={media.url} value={media.url}><img src={logo} alt="Logo" />{media.name}</option>
            ))}
          </select>) : null
          }
        

        <button onClick={() => chooseMedia()} >Vælg Medier</button>
        <div className='toggleBox'>
  {showNavItems === true ? (
    <div>
      {navItems.map((item) => (
        <p key={item.url}>{item.url}</p> // Tilføj en return her
      ))}
    </div>
  ) : null}
</div>

        </div>




      </nav>
      {props.renderDefault && props.renderDefault(props)}
    </Stack>
  );
}

export default MyNavbar;
