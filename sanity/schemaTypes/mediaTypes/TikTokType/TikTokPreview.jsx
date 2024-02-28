import {Flex, Text} from '@sanity/ui'
import {TikTokEmbed} from 'react-social-media-embed'

//import YouTubePlayer from 'react-player/youtube'

export function TikTokPreview(props) {
  const {title: url} = props

  return (
    <Flex padding={3} align="center" justify="center">
      {/*  {typeof url === 'string' 
        ? <YouTubePlayer url={url} /> 
        : <Text>Add a YouTube URL</Text>} */}
      {typeof url === 'string' ? (
        <Flex>
          {' '}
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <TikTokEmbed url={url} width={325} />
          </div>{' '}
        </Flex>
      ) : (
        <Text>Add a TikTok URL</Text>
      )}
    </Flex>
  )
}
