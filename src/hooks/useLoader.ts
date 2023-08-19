import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { setLoading } from '@/redux/actions/loadingAction';

export function useLoading() {
	const isLoading = useSelector(
		(state: RootState) => state.loadingReducer.isLoading
	);

	const dispatch = useDispatch();

	const startLoading = () => {
		dispatch(setLoading(true));
	};

	const stopLoading = () => {
		dispatch(setLoading(false));
	};

	return { isLoading, startLoading, stopLoading };
}
