import { waitFor } from '@testing-library/react';
import { App } from '../App';
import { renderWithRouter } from './config/render-with-providers';

describe('App', () => {
	it('renders without crashing', () => {
		const { container } = renderWithRouter(<App />);

		waitFor(() => {
			expect(container.firstChild).toBeInTheDocument();
		});
	});

	it("renders the header with the text 'Podcasts'", () => {
		const { getByRole } = renderWithRouter(<App />);
		const header = getByRole('heading', { name: /podcaster/i });

		waitFor(() => {
			expect(header).toBeInTheDocument();
		});
	});
});
