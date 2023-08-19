import { act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '@/pages';
import { renderWithRouter } from './config/render-with-providers';

describe('Home', () => {
	it('changes isLoading state when startLoading is called', () => {
		const { container, getByText } = renderWithRouter(<Home />);

		act(() => {
			userEvent.click(getByText('Start Loading'));
		});
		waitFor(() => {
			expect(container.querySelector('.pulse-loader')).toBeInTheDocument();
		});
	});
});
