import React from 'react'
import { Container } from './styles'
import OurStory from './components/OurStory'
import OurTeam from './components/OurTeam'

const AboutUsBlock = () => {
  return (
    <Container>
      <OurStory />
      <OurTeam />
    </Container>
  )
}

export default AboutUsBlock
