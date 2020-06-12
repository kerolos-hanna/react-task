/** @format */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Rating from '@material-ui/lab/Rating';

import { API_KEY } from '../../API_KEY/API_KEY';
import Spinner from '../../Component/UI/Spinner/Spinner';
import useStyles from './CardDetailsStyle';

const CardDetails = (props) => {
	const classes = useStyles();

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(
				`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${
					props.match.params.id
				}`,
				{
					headers: {
						Authorization: `Bearer ${API_KEY}`,
					},
				}
			)
			.then((res) => {
				setData(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [props.match]);

	let loadingData = <Spinner />;

	if (!loading) {
		loadingData = (
			<Grid container justify="center">
				<Grid item lg={6} md={8} xs={12}>
					<Card className={classes.cardImage}>
						<CardMedia component="img" image={data?.image_url} />
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
								Name: {data?.name}
							</Typography>
							<Typography variant="body1" gutterBottom>
								Num. of review: {data?.review_count}
							</Typography>
							<Typography variant="body1" gutterBottom>
								Phone: {data?.phone}
							</Typography>
							<Rating
								name="half-rating-read"
								defaultValue={data.rating}
								precision={0.5}
								readOnly
							/>

							<hr />
							<Typography variant="body1" gutterBottom color="primary">
								Price: {data?.price}
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
