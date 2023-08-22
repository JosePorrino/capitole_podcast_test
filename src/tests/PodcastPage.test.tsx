import { waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { PodcastPage } from '@/pages/podcast/podcast-page';
import { ROUTES } from '@/constants/app.constants';
import { EpisodeContainer } from '@/components/episodes/episode-container';
import { EpisodeDetail } from '@/components/episodes/episode-detail';
import { renderWithRouter } from './config/render-with-providers';

const renderPodcastPage = () => {
	return renderWithRouter(<PodcastPage />, {
		route: `${ROUTES.PODCAST}/1437402802`,
		path: ROUTES.PODCAST_INFO,
		children: [
			<Route
				key={1}
				path={ROUTES.PODCAST_INFO}
				element={<EpisodeContainer />}
			/>,
			<Route key={1} path={ROUTES.EPISODE_INFO} element={<EpisodeDetail />} />,
		],
	});
};

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

jest.mock('@/hooks/useEpisodes', () => {
	const useEpisodesMock = jest.fn();
	return useEpisodesMock.mockReturnValue([
		{
			id: 1000624408486,
			name: 'Episode 167: “The Weight” by The Band',
			description:
				'Episode one hundred and sixty-seven of A History of Rock Music in Five Hundred Songs looks at “The Weight" by the Band ...',
			releaseDate: '2023-08-14T15:06:32Z',
		},
	]);
});

describe('PodcastPage', () => {
	it('should render successfully', async () => {
		const { baseElement } = renderPodcastPage();
		await waitFor(() => {
			expect(baseElement).toBeTruthy();
		});
	});

	it('should have a podcast title', async () => {
		const { getByText } = renderPodcastPage();
		await waitFor(() => {
			expect(
				getByText(/A History of Rock Music in 500 Songs/i)
			).toBeInTheDocument();
		});
	});

	it('show a number of episodes', async () => {
		const { getByText } = renderPodcastPage();
		await waitFor(() => {
			expect(getByText(/episodes: 1/i)).toBeInTheDocument();
		});
	});

	it('should have a list of episodes', async () => {
		const { getByText } = renderPodcastPage();
		await waitFor(() => {
			expect(getByText(/Episode 167/i)).toBeInTheDocument();
		});
	});

	it('when click on episode should redirect to episode page', async () => {
		const { getByText, getByRole } = renderPodcastPage();

		await waitFor(() => {
			getByText(/Episode 167/i).click();
		});

		await waitFor(() => {
			expect(
				getByRole('heading', { name: /Episode 167/i })
			).toBeInTheDocument();
		});
	});
});
