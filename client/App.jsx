import React, { useEffect, useState } from "react";
import Header from './components/Header';
// import Feed from './components/Feed';
import ResponsiveAppBar from './components/navbar.jsx';



const EVENTS_API = '' //link goes here!!

function App() {

  return ( 
    <div className="App">
      <ResponsiveAppBar/>
      <Feed/>
     {/* <Header username={'props.username'} userProfilePic={'props.userProfilePic'} />
     <h1> boilerplate 90% Tarik Justin Alex Miranda  c: </h1> 

     <Feed username={'props.username'} /> */}

    </div>
)
}



export default App;