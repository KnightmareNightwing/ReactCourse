import React from 'react'
import Products from './Products'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; 
import Rating from './Rating'; 

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

function App() {
  const user = {
    firstName: 'Greg',
    lastName: 'Tan',
    imageUrl:'https://picsum.photos/200/300'
  }

  const isValid = false;

  return (
    <div>
      <Rating rating='1' /> 
      <Rating rating='2' /> 
      <Rating rating='3' /> 
      <Rating rating='4' /> 
      <Rating rating='5' /> 
    </div>
  )
}

export default App
