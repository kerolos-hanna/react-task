/** @format */

import React, { useState, useContext } from 'react';

import RestaurantContext from '../../context/restaurantContext';
import Search from '../../Component/Search/Search';
import DisplayData from '../../Component/DisplayData/DisplayData';
import SortData from '../../Component/SortingData/SortingData';
import SortFilterButtons from './SortFilterButtons/SortFilterButtons';
import FilteredData from '../../Component/FilteredData/FilteredData';
import Spinner from '../../Component/UI/Spinner/Spinner';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

import useStyles from './HomePageStyle';

const Home = (props) => {
	const context = useContext(RestaurantContext);
	const { data, loading, error } = context;
	const classes = useStyles();

	const [sort, setSort] = useState(false); //for sort of data(boolean)
	const [filter, setFilter] = useState(null); //for value of select

	const SortHandler = () => {
		setSort(!sort);
	};

	const selectChangeHandler = (event) => {
		setFilter(event.target.value);
	};

	let loadingData = (
		<Grid item>
			{data.length !== 0 ? (
				<React.Fragment>
					<Typography className={classes.heroText} variant="h3">
						Results
					</Typography>
					<SortFilterButtons
						clicked={SortHandler}
						sort={sort}
						filter={filter}
						changed={selectChangeHandler}
					/>
				</React.Fragment>
			) : null}
			<Grid container spacing={4} justify="center" className={classes.list}>
				{sort ? (
					<SortData />
				) : filter ? (
					<FilteredData selectValue={filter} />
				) : (
					<DisplayData />
				)}
			</Grid>
		</Grid>
	);

	if (loading) {
		loadingData = <Spinner />;
	}

	const errorText = error ? (
		<Alert severity="error" style={{ width: '80%', margin: 'auto' }}>
			<strong>Something went wrong</strong>
		</Alert>
	) : null;

	return (
		<div>
			{errorText}
			<Search />
			{loadingData}
		</div>
	);
};

export default Home;
