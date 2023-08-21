import { RootState } from '@/redux/reducers';
import { useSelector } from 'react-redux';

const useLoading = () => {
	return useSelector((state: RootState) => state.loadingReducer.isLoading);
};

export default useLoading;
