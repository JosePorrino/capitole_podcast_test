import { StrictMode, Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { ROUTES } from '../constants/app.constants';

import { ErrorBoundary } from '../components/error-boundary';

const Home = lazy(() =>
	import('../pages/home/home').then(module => ({ default: module.Home }))
);

const router = (parentElement: React.ReactNode) =>
	createBrowserRouter([
		{
			path: ROUTES.HOME,
			element: parentElement,
			ErrorBoundary: ErrorBoundary,
			children: [
				{
					path: ROUTES.HOME,
					element: (
						<Suspense>
							<Home />
						</Suspense>
					),
				},
			],
		},
	]);

export const withProviders = (parentElement: React.ReactNode) => {
	return (
		<StrictMode>
			<RouterProvider router={router(parentElement)} />
		</StrictMode>
	);
};
