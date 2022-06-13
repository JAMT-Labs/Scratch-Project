import React, { useEffect, useState } from 'react';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import ResponsiveAppBar from './components/navbar.jsx';

import './stylesheets/styles.scss';

// const EVENTS_API = '' //link goes here!!
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar style={{ backgroundColor: '#000' }} />
        <Feed />
        {/* <Header username={'props.username'} userProfilePic={'props.userProfilePic'} />
     <h1> boilerplate 90% Tarik Justin Alex Miranda  c: </h1> 

     <Feed username={'props.username'} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
