/** @format */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

import RestaurantContext from '../../context/restaurantContext';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';

import useStyles from './DisplayDataStyle';

const DisplayData = () => {
	const context = useContext(RestaurantContext);
	const { data, limit, isHasMore } = context;
	console.log(data.length, limit, isHasMore);

	const classes = useStyles();

	let dataIn = null;
	if (data.length !== 0) {
		dataIn = (
			<InfiniteScroll
				dataLength={data.length}
				style={{ overflow: 'hidden' }}
				next={() => context.hasMore(data.length)}
				hasMore={isHasMore}
				loader={<h4>Loading...</h4>}
				endMessage={
					<p style={{ textAlign: 'center' }}>
						<b>Yay! You have seen it all</b>
					</p>
				}
			>
				<Grid container spacing={4} justify="center">
					{data.map((res, i) => (
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
									<CardHeader className={classes.cardText} title={res.name} />
									<CardContent>
										<Typography color="primary">Price: {res.price}</Typography>
										<Typography color="primary">
											Num. of reviews: {res.review_count}
										</Typography>
									</CardContent>
									<CardContent>
										{res.location.display_address.map((address) => (
											<Typography key={address}>{address}</Typography>
										))}
									</CardContent>
								</div>
							</CardActionArea>
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
		);
	}

	return dataIn;
};

export default DisplayData;
