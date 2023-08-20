import axios from 'axios';
import {
	responseErrorInterceptor,
	responseSuccessInterceptor,
} from './response-interceptor';
import {
	requestErrorInterceptor,
	requestSuccessInterceptor,
} from './request-interceptor';
import { BASE_URL } from '../constants/endpoints';

const axiosInit = () => {
	const customAxios = axios.create({
		baseURL: BASE_URL,
	});

	// Add a request interceptor
	customAxios.interceptors.request.use(
		requestSuccessInterceptor,
		requestErrorInterceptor
	);

	// Add a response interceptor
	customAxios.interceptors.response.use(
		responseSuccessInterceptor,
		responseErrorInterceptor
	);

	return customAxios;
};

export default axiosInit;
