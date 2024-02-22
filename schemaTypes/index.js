import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import journalister from './journalister'

import Sundhed from './Categories/Sundhed'
import Indland from './Categories/Indland'
import udland from './Categories/udland'
import tags from './tags'

export const schemaTypes = [
  // Document types
  Sundhed,
  Indland,
  udland,
  journalister,
  tags,
  
  /* movie,
  person,
  
  screening, */

  // Other types
  blockContent,
  /* plotSummary,
  plotSummaries,
  castMember,
  crewMember, */
]
