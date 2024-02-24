import {Flex, Text} from '@sanity/ui'
import FacebookPlayer from 'react-player/facebook'

export function FacebookPreview(props) {
  const {title: url} = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' 
        ? <FacebookPlayer url={url} /> 
        : <Text>Add a Facebook URL</Text>}
    </Flex>
  )
}