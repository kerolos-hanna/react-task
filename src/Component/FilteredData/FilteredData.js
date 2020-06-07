import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

import useStyles from '../DisplayData/DisplayDataStyle';

const FilteredData = (props) => {
  const classes = useStyles();

  const [filter, setFilter] = useState(null);

  /*for filter data */
  useEffect(() => {
    let prices = [...props.data];
    let pricesData = prices.filter(res => {
      return (props.selectValue === res.price)
    })
    setFilter(pricesData);
    console.log(pricesData)
  }, [props.selectValue, props.data])

  let filtered = null;
  if(filter){
    filtered = filter.map(res => (
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
  return filtered;
}

export default FilteredData;