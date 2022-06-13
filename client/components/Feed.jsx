
//import './Feed.css';
import Post from './Post';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//WE NEED TO GET THE DATA FROM THE API, SO I'LL WAIT FOR THAT DATA
//MAP
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



function disasters(dis)


export default function Feed(props) {
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

