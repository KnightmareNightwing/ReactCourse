import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products';
import Jumbotron from './Jumbotron';

function App() {
  return (
    <div>
      <Products />
      <Jumbotron />
      <Jumbotron>
      This is a long sentence, and I want to insert content into the jumbotron component from the outside.
      </Jumbotron>
    </div>
  );
}
export default App; 