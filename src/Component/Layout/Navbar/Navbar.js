/** @format */

import React from 'react';

import classes from './Navbar.module.css';

const Navbar = () => {
	return (
		<div className={classes.Navbar}>
			<h2>
				{/* <i className="fab fa-github" /> */}
				<i className="fas fa-utensils" /> Restaurant Finder
			</h2>
		</div>
	);
};

export default Navbar;
