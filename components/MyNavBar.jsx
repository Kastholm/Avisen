import React, {useEffect} from 'react'
import {useState} from 'react'
import {Stack, Card, Flex, Text} from '@sanity/ui'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import logo from '../static/logo.png'
import '../stylesheets/MyNavBar.css'

function MyNavbar(props) {
  const [navItems, setNavItems] = useState()
  const [selectedNavItems, setSelectedNavItems] = useState(
    JSON.parse(localStorage.getItem('selectedNavItems')) || [],
  )
  const [showNavItems, setShowNavItems] = useState(false)

  const MySwal = withReactContent(Swal)

  useEffect(() => {
    const medier = [
      {name: 'Nyheder24', url: 'URL_TIL_AVIS1'},
      {name: 'Dagens.de', url: 'https://bellaitalia.sanity.studio/structure'},
      {name: 'Dagens.se', url: 'URL_TIL_AVIS3'},
      {name: 'Dagens.no', url: 'URL_TIL_AVIS3'},
      {name: 'Dagens.dk', url: 'URL_TIL_AVIS3'},
    ]

    setNavItems(medier)
    setShowNavItems(true)
  }, [])

  const chooseMedia = () => {
    const checkboxesHtml = navItems
      .map(
        (item, index) =>
          `<input type="checkbox" id="swal-checkbox-${index}" class="swal2-checkbox" value="${index}">
      <label for="swal-checkbox-${index}">${item.name}</label><br>`,
      )
      .join('')

    MySwal.fire({
      title: 'Vælg medier',
      html: `<div>${checkboxesHtml}</div>`,
      focusConfirm: false,
      preConfirm: () => {
        return navItems.reduce((acc, item, index) => {
          if (document.getElementById(`swal-checkbox-${index}`).checked) {
            acc.push({name: item.name, url: item.url})
          }
          return acc
        }, [])
      },
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('selectedNavItems', JSON.stringify(result.value))
        setSelectedNavItems(result.value)
      }
    })
  }

  // Denne funktion kaldes, når brugeren vælger en ny option
  const handleSelectChange = (event) => {
    const url = event.target.value
    if (url) {
      window.location.href = url // Omdiriger brugeren til den valgte URL
    }
  }

  return (
    <Stack>
      <nav tone="caution">
        <img src={logo} alt="Logo" />
        <div className="searchContainer">

          {selectedNavItems.length > 0 ? (
            <>
              {showNavItems === true ? (
                <select name="dagensAvis" id="dagensAvisSelect" onChange={handleSelectChange}>
                  <option value="">Skift medie</option>
                  {selectedNavItems.map((media) => (
                    <option key={media.url} value={media.url}>
                      <img src={logo} alt="Logo" />
                      {media.name}
                    </option>
                  ))}
                </select>
              ) : null}
            </>
          ) : (
            <>
              {showNavItems === true ? (
                <select name="dagensAvis" id="dagensAvisSelect" onChange={handleSelectChange}>
                  <option value="">Skift medie</option>
                  {navItems.map((media) => (
                    <option key={media.url} value={media.url}>
                      <img src={logo} alt="Logo" />
                      {media.name}
                    </option>
                  ))}
                </select>
              ) : null}
            </>
          )}

          <button onClick={() => chooseMedia()}>Vælg Dine Medier</button>
        </div>
      </nav>
      {props.renderDefault && props.renderDefault(props)}
    </Stack>
  )
}

export default MyNavbar
