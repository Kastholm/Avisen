import React from 'react';
import { Stack, Card, Flex, Text } from '@sanity/ui';
import logo from '../static/logo.png';

function MyNavbar(props) {
  // Definerer nogle grundlæggende styles
  const navbarStyle = {
    backgroundColor: '#3b6f8c', // Lys grå baggrund
    padding: '20px 0', // Lidt padding øverst og nederst
    marginBottom: '20px', // Afstand til næste element
  };

  const buttonStyle = {
    backgroundColor: '#0f1728', // Blå baggrund
    color: '#fbfbfb', // Hvid tekst
    border: 'none', // Ingen ramme
    padding: '10px 20px', // Padding omkring teksten
    margin: '0 5px', // Lidt afstand mellem knapperne
    cursor: 'pointer', // Cursor ændring ved hover
    fontWeight: 'bold', // Fed tekst
    FontFace: 'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue","Liberation Sans",Helvetica,Arial,system-ui,sans-serif', // Skrifttype
  };

  const selectStyle = {
    padding: '10px 20px', // Gør select boksen større
    margin: '0 5px', // Afstand fra teksten
  };

  const imgStyle = {
    width: '130px', // Sæt logoet til en bestemt bredde
    marginLeft: '30px', 
    position: 'absolute',

  };

  return (
    <Stack>
      <Card padding={3} tone="caution" style={navbarStyle}>
          <img style={imgStyle} src={logo} alt="Logo" />
        <Flex justify="start" align="center" direction="column" gap={3}>
         {/*  <Text size={2} style={{ marginBottom: '10px' }}>Important reminder! Remember this banner!</Text>
          <Flex gap={2} wrap="wrap" justify="center">
          <Text>Gå til en anden Dagens avis:</Text>
          <select name="dagensAvis" id="dagensAvisSelect" style={selectStyle}>
          <option value="avis1">Dagens Avis 1</option>
          <option value="avis2">Dagens Avis 2</option>
          <option value="avis3">Dagens Avis 3</option>
          </select>
        </Flex> */}
          <Flex gap={2} wrap="wrap" justify="start">
            <a href="/nyheder24"><button style={buttonStyle}>Nyheder24</button></a>
            <a href="/avis3"><button style={buttonStyle}>Avis3</button></a>
            <a href="/avis4"><button style={buttonStyle}>Avis4</button></a>
          </Flex>
        </Flex>
      </Card>
      {props.renderDefault && props.renderDefault(props)}
    </Stack>
  );
}

export default MyNavbar;
