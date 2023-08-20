import { ApiPodcast } from '../infrastructure/ApiPodcast';
import { mockEpisodesListData } from '../mocks/mockEpisodesListData';
import { mockPodcastsListData } from '../mocks/mockPodcastsListData';
import axiosInit from '../infrastructure/httpAxios/init';

describe('ApiPodcast', () => {
	const customAxios = axiosInit();

	describe('getPodcastsList', () => {
		beforeEach(() => {
			jest
				.spyOn(customAxios, 'get')
				.mockResolvedValue({ data: mockPodcastsListData });
		});

		afterEach(() => {
			jest.restoreAllMocks();
		});

		it('should return a list of podcasts', async () => {
			const apiPodcastService = new ApiPodcast();
			const podcasts = await apiPodcastService.getPodcastsList(customAxios, 1);
			expect(podcasts).toHaveLength(1);
		});

		it('should return an error when limit is <= 0 or > 200', async () => {
			const apiPodcastService = new ApiPodcast();
			await expect(
				apiPodcastService.getPodcastsList(customAxios, 0)
			).rejects.toThrow();
			await expect(
				apiPodcastService.getPodcastsList(customAxios, 201)
			).rejects.toThrow();
		});
	});

	describe('getEpisodesList', () => {
		beforeEach(() => {
			jest
				.spyOn(customAxios, 'get')
				.mockResolvedValue({ data: mockEpisodesListData });
		});

		afterEach(() => {
			jest.restoreAllMocks();
		});

		it('should return a list of episodes', async () => {
			const apiPodcastService = new ApiPodcast();
			const episodes = await apiPodcastService.getEpisodesList(
				customAxios,
				'123'
			);
			expect(episodes).toHaveLength(1);
		});
	});
});
