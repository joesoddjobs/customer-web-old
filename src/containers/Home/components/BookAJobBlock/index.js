import React from 'react'
import { Container, Header, Body, BookAJobButton } from './styles'

const BookAJobBlock = () => {
  return (
    <Container>
      <Header>Ready to get started?</Header>
      <Body>Sign up and create an account to schedule a job today.</Body>
      <BookAJobButton>Book a Job</BookAJobButton>
    </Container>
  )
}

export default BookAJobBlock
