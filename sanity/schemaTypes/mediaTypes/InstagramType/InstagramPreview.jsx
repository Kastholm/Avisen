import {Flex, Text} from '@sanity/ui'
import { InstagramEmbed } from "react-social-media-embed";

export function InstagramPreview(props) {
     const {title: url} = props
   
     return (
       <Flex padding={3} align="center" justify="center">
         {typeof url === 'string' ? (
           <Flex>
             {' '}
             <div style={{display: 'flex', justifyContent: 'center'}}>
               <InstagramEmbed url={url} width={328} />
             </div>{' '}
           </Flex>
         ) : (
           <Text>Add a Instagram URL</Text>
         )}
       </Flex>
     )
   }
   