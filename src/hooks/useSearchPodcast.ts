import { useDispatch, useSelector } from 'react-redux';
import { setSearchPodcast } from '@/redux/actions/podcastAction';
import { RootState } from '@/redux/reducers';

export function useSearchPodcast() {
	const { searchPodcast, filterPodcats } = useSelector((state: RootState) => ({
		searchPodcast: state.podcastReducer.searchPodcast,
		filterPodcats: state.podcastReducer.filterPodcats,
	}));

	const dispatch = useDispatch();

	const handleSearchPodcast = (data: string) => {
		dispatch(setSearchPodcast(data));
	};

	return { filterPodcats, searchPodcast, handleSearchPodcast };
}
