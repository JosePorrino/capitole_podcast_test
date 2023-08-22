import { fireEvent, waitFor } from '@testing-library/react';
import { renderWithRouter } from './config/render-with-providers';
import { Home } from '@/pages/home/home';

jest.mock('@/hooks/usePodcast', () => {
	const usePodcastMock = jest.fn();
	return usePodcastMock.mockReturnValue([
		{
			id: '1437402802',
			name: 'A History of Rock Music in 500 Songs',
			author: 'Andrew Hickey',
			description:
				'Andrew Hickey presents a history of rock music from 1938 to 1999, looking at five hundred songs that shaped the genre.',
			image:
				'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/88/18/59/881859a5-f344-c249-f4b9-3d9b62add05a/mza_16428964146354887078.png/170x170bb.png',
			episodes: [],
		},
	]);
});
jest.mock('@/hooks/useLoading', () => {
	const useLoadingMock = jest.fn();
	return useLoadingMock.mockReturnValue(true);
});

describe('Home', () => {
	describe('PodcastList', () => {
		it('should render successfully', async () => {
			const { baseElement } = renderWithRouter(<Home />);
			await waitFor(() => {
				expect(baseElement).toBeTruthy();
			});
		});
		it('should have a list of the 100 most popular podcasts', async () => {
			const { getByText } = renderWithRouter(<Home />);
			await waitFor(() => {
				expect(
					getByText(/A History of Rock Music in 500 Songs/i)
				).toBeInTheDocument();
			});
		});
		it('should have an input to search for podcasts', async () => {
			const { getByPlaceholderText } = renderWithRouter(<Home />);
			await waitFor(() => {
				expect(getByPlaceholderText(/filter podcasts.../i)).toBeInTheDocument();
			});
		});
	});

	describe('Search', () => {
		it('should show nothing for non-matching search', async () => {
			const { getByPlaceholderText, getByText } = renderWithRouter(<Home />);

			const input = getByPlaceholderText(/Filter podcasts.../i);
			fireEvent.change(input, { target: { value: 'nonmatch' } });

			await waitFor(() => {
				expect(getByText('No podcasts found for search:')).toBeInTheDocument();
			});
		});

		it('should show a count of the filtered podcasts', async () => {
			const { getByTestId, getByPlaceholderText, getByText } = renderWithRouter(
				<Home />
			);

			await waitFor(() => {
				expect(
					getByText(/A History of Rock Music in 500 Songs/i)
				).toBeInTheDocument();
			});

			const input = getByPlaceholderText(/filter podcasts.../i);
			fireEvent.change(input, { target: { value: 'history' } });

			await waitFor(() => {
				const counterElement = getByTestId('counter');
				expect(counterElement.innerHTML).toBe('1');
			});
		});
	});
});
