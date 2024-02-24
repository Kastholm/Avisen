import React from 'react'

const TikTokVideoPreview = ({value}) => {
  // Indsæt en placeholder, hvis der ikke er nogen URL
  if (!value) {
    return <div>Indsæt en TikTok video URL for at se forhåndsvisningen.</div>
  }

  // Forsøg at konstruere en TikTok embed URL fra den angivne værdi
  let embedUrl
  try {
    const videoId = new URL(value).pathname.split('/').pop()
    embedUrl = `https://www.tiktok.com/embed/v2/${videoId}`
  } catch (e) {
    return <div>URL'en er ikke gyldig.</div>
  }

  return (
    <iframe
      src={embedUrl}
      frameBorder="0"
      width="100%"
      height="400px"
      allowFullScreen
      title="TikTok Video Preview"
    ></iframe>
  )
}

export default TikTokVideoPreview
