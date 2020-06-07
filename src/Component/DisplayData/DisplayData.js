import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

import useStyles from './DisplayDataStyle';


const DisplayData = (props) => {

   const classes = useStyles();

  let data = null;
  if(props.data){
    data = props.data.map(res => (
      <Grid item xs={12} md={6} sm={8} key={res.id}>
        <CardActionArea
          className={classes.box}
          component={Link}
          to={`/card-details/${res.id}`}
        >
          <CardMedia
            className={classes.cardMedia}
            image={res.image_url}
            title={res.name}
          />
          <div className={classes.cardText}>
            <CardHeader
              className={classes.cardText}
              title={res.name}
            />
            <CardContent>
              <Typography color="primary">Price: {res.price}</Typography>
              <Typography color="primary">Num. of reviews: {res.review_count}</Typography>

            </CardContent>
            <CardContent>
              {res.location.display_address.map((address => (
                <Typography key={address}>
                  {address}
                </Typography>
              )))}
            </CardContent>
          </div>
        </CardActionArea>
      </Grid>
    ))
  }

  return data;
}

export default DisplayData;