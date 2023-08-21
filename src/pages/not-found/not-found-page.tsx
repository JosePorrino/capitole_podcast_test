import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
	return (
		<>
			<h1>404</h1>
			<p>Resource not found 😕</p>
			<Link to='/'>Go back</Link>
		</>
	);
};
