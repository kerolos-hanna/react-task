/** @format */

import React, { useEffect, useContext } from 'react';

import RestaurantContext from '../../context/restaurantContext';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

import Spinner from '../../Component/UI/Spinner/Spinner';
import useStyles from './CardDetailsStyle';

const CardDetails = (props) => {
	const context = useContext(RestaurantContext);
	const { item, loading } = context;
	const classes = useStyles();

	useEffect(() => {
		context.getItem(props.match.params.id);
		//eslint-disable-next-line
	}, [props.match]);

	let loadingData = <Spinner />;

	if (!loading) {
		loadingData = (
			<Grid container justify="center">
				<Grid item lg={6} md={8} xs={12}>
					<Card className={classes.cardImage}>
						<CardMedia component="img" image={item?.image_url} />
					</Card>
				</Grid>
				<Grid item lg={6} md={8} xs={10}>
					<Grid container spacing={4} justify="center">
						<Paper
							className={
								!props.matches ? classes.paper : classes.paperSmallScreen
							}
						>
							<Typography variant="h4" component="h1" gutterBottom>
								Name: {item?.name}
							</Typography>
							<Typography variant="body1" gutterBottom>
								Num. of review: {item?.review_count}
							</Typography>
							<Typography variant="body1" gutterBottom>
								Phone: {item?.phone}
							</Typography>
							<Rating
								name="half-rating-read"
								defaultValue={item?.rating}
								precision={0.5}
								readOnly
							/>

							<hr />
							<Typography variant="body1" gutterBottom color="primary">
								Price: {item?.price}
							</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		);
	}

	return loadingData;
};

export default CardDetails;
