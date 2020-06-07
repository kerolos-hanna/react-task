import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { API_KEY } from '../../API_KEY/API_KEY';
import useStyles from './CardDetailsStyle';


const CardDetails = (props) => {
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(props.match.params.id)
    console.log(API_KEY)
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${props.match.params.id}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`
        },
        params: {
          // categories: "coffee",
        }
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      })
  },[props]);

  return (
    <Grid container justify="center">
        <Grid item lg={6} md={8} xs={12}>
          <Card className={classes.cardImage}>
            <CardMedia
              component="img"
              image={data?.image_url}
            />
          </Card>
        </Grid>
        <Grid item lg={6} md={8} xs={10}>
          <Grid container spacing={4} justify="center">
            <Paper
              className={!props.matches ? classes.paper : classes.paperSmallScreen}
            >
              <Typography variant="h4" component="h1" gutterBottom>
                {data?.name}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {data?.price}
              </Typography>

              <hr />
              <Typography variant="body1" gutterBottom>
                {data?.review_count}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
  )
}

export default CardDetails;