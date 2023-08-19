import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@/redux/store/configureStore';

export const renderWithRouter = (
	ui: React.ReactElement<
		unknown,
		string | React.JSXElementConstructor<unknown>
	>,
	{
		route = '/',
		path = '/',
		children = [],
	}: { route?: string; path?: string; children?: React.ReactNode[] } = {}
) => {
	return {
		...render(
			<Provider store={store}>
				<MemoryRouter initialEntries={[route]}>
					<Routes>
						<Route path={path} element={ui} children={children} />
					</Routes>
				</MemoryRouter>
			</Provider>
		),
	};
};
