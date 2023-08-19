import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { Card } from '../card';

interface IError {
	message: string;
}

export const ErrorBoundary = () => {
	const error = useRouteError() as Error | IError;
	return (
		<div className='error-boundary'>
			<h1>Oops!</h1>
			<p>
				Something went wrong. Please try again.
				{isRouteErrorResponse(error) && (
					<code> Error: {error.data.message}</code>
				)}
			</p>
			{
				<Card>
					<code> Error: {error.message}</code>
				</Card>
			}
		</div>
	);
};
