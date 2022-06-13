//import './Feed.css';
import Post from './Post';
import React, { useEffect, useState } from 'react';
import '../stylesheets/styles.scss';
import axios from 'axios';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ALL_DIS_API = 'http://localhost:8080/api';

function Feed() {
  //WE NEED TO GET THE DATA FROM THE API, SO I'LL WAIT FOR THAT DATA
  //MAP
  console.log('hello from justin');
  // State
  const [disList, setDisList] = useState([]);

  //test 1 --------------------------------
  // Happens when the page is loaded
  // useEffect(async () => {
  //   await getDisasters();
  // }, []);

  // const getDisasters = () => {
  //   fetch('http://localhost:8080/api', {
  //     method: 'GET',
  //     // headers: {
  //     //   'Content-Type': 'Application/JSON',
  //     //   Accept: 'application/json',
  //     //   Authorization: 'Bearer JNqbwoSL31X0CaUWCN0F-Cm6zX2Ie5O0qehjOIqs',
  //     // },
  //     // body: JSON.stringify(body),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(
  //         'HELLLLOOOOOOO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
  //       );
  //       setDisList(data.results);
  //     })
  //     .catch((err) => console.log('ERROR: ', err));
  // };

  //test 1 end --------------------------------

  //test 2 start --------------------------------
  useEffect(() => {
    getDisasters(ALL_DIS_API);
  }, []);

  const getDisasters = (API) => {
    console.log('hello? from getDisasters');
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, 'this is your data from ALL_DIS_API');
        return setDisList(data);
      });
  };

  console.log(disList, 'THIS IS MY DISLIST ************************');
  //end test 2 ----------------------------------------------------------------

  //test 3 Start ----------------------------------------------------------------
  // const options = {
  //   method: 'GET',
  //   url: 'http://localhost:3000/api',
  //   headers: {
  //     Accept: 'application/json',
  //     Authorization: 'Bearer JNqbwoSL31X0CaUWCN0F-Cm6zX2Ie5O0qehjOIqs',
  //   },
  // };

  // try {
  //   await axios.get(options.url, options).then((response) => {
  //     const disasters = response.data.results;
  //     console.log('BEGINNING OF ALL DISASTERS FROM ADDTODISASTERSDB LINE 65');
  //     setDisList(disasters);
  //     //
  //     console.log(
  //       disasters,
  //       'these are all of the disasters from addDisastersToDB: line 68 '
  //     );
  //   });
  // } catch (err) {
  //   createErr({
  //     method: 'addDisastersToDB',
  //     type: JSON.stringify(err),
  //     err: err,
  //   });
  // }

  //test 3 end ----------------------------------------------------------------

  return (
    <div className="container">
      <div className="feed">
        {/* {disList.length > 0 &&
          disList.map((disaster) => <Post key={disaster.id} {...disaster} />)} */}
        {disList.map((disaster) => (
          <Post key={disaster.event_id} {...disaster} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
