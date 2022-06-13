import React, { useEffect, useState } from "react";
import axios from 'axios';
//import './Feed.css';
import Post from './Post';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Feed(props) {
//Hooks can be only called inside of the body of a function component

  const ALL_DIS_API = 'localhost://3000';
  const [disList, setDisList] = useState([]);

  // Happens when the page is loaded
  useEffect(() => {
    getDisasters(ALL_DIS_API);
  }, []);

  const getDisasters = (API) => {
    fetch(ALL_DIS_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(
          data.results[0],
          'this is your data result from ALL_DIS_API'
        );
      })
  }


  // From Justin's Photo
  // useEffect(() => {
  //   const getBreweries = async () => {
  //     try {
  //       const response = await axios.get('/api', {
  //         params: { homestate: user.homestate, username: user.username },
  //       })
  //       console.log('userlanding get response ', response)
  //       setStateBreweries(response.data.getBreweries)
  //       setVisBreweries(response.data.visted)
  //       } catch (error){
  //         console.log(error);
  //       }
  //     }
  //   getBreweries()
  // }, [])

  // useEffect(() => {
  //   console.log('State has changed')
  // }, [setStateBreweries, visitBreweries])

  // function disasters(dis)

  return (
    <div className="container">
      <div className="feed">
        {/* {data.map((item, index) => (
          <Post
            key={}
            user={}
            username={}
            image={}
            title={}
            comments={}
          />
        ))} */} 
      </div>
    </div>
  );
}

