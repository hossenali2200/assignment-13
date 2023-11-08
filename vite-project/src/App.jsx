// src/App.js
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
 

import Header from './Home/Header';
import Footer from './Home/Footer';
import Content from './Home/Content';
import Card from './Home/Card.jsx';
 

function App() {
  return (
     
      <div>
        <Header/> 
        
        <Content/> 

        <Card/>

        <Footer/> 
         

  
      </div>
       
   );
}
   

export default App;
