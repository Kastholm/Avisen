import blockContent from './blockContent'
import journalister from './journalister'

import Sundhed from './Categories/Sundhed'
import Indland from './Categories/Indland'
import udland from './Categories/udland'
import tags from './tags'
import {youTubeType} from './mediaTypes/YouTubeType'
import { tikTokType } from './mediaTypes/TikTokType'
import { faceBookType } from './mediaTypes/FacebookType'
import { instagramType } from './mediaTypes/instagramType'

export const schemaTypes = [
  // Document types
  Sundhed,
  Indland,
  udland,
  journalister,
  tags,
  // Social Media tags
  youTubeType,
  tikTokType,
  faceBookType,
  instagramType,
  
  // Other types
  blockContent,
  /* 
  person,
  
  screening, */
  /* plotSummary,
  plotSummaries,
  castMember,
  crewMember, */
]
