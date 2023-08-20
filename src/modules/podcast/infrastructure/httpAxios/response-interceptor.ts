import { AxiosError, AxiosResponse } from 'axios';
// import { BASE_URL } from '../constants/endpoints';

const DEBUG = process.env.NODE_ENV === 'development';

// const refreshFlow = async (
// 	error: AxiosError
// ): Promise<InternalAxiosRequestConfig | undefined> => {
// 	const { data } = await axios.get(`${BASE_URL}${endpoints.auth}/refresh`);
// 	console.log('⌛ ~ refreshFlow', data);

// 	const { config } = error;
// 	if (config && data?.token)
// 		config.headers.set('Authorization', `Bearer ${data.token}`);

// 	return config;
// };

export const responseErrorInterceptor = async (
	error: AxiosError
): Promise<AxiosResponse> => {
	// Any status codes that falls outside the range of 2xx cause this function to trigger
	// Do something with response error
	if (DEBUG) console.log('❌ ~ responseError', error);

	// if (error.response && error.response.status === 401) {
	// 	const reqConfig = await refreshFlow(error);
	// 	if (reqConfig) {
	// 		const axiosInstance = axios.create({ baseURL: BASE_URL });
	// 		const newResponse = await axiosInstance.request(reqConfig);
	// 		console.log('🚀 ~ onRefresh response', newResponse.data);
	// 		return newResponse;
	// 	}
	// }

	const promise = await Promise.reject(error);
	return promise;
};

/**
 * @param  {axioxError} error
 */
export const responseSuccessInterceptor = (
	response: AxiosResponse
): AxiosResponse => {
	// Any status code that lie within the range of 2xx cause this function to trigger
	// Do something with response data
	if (DEBUG) console.log('✔️ ~ responseSuccess', response);

	return response;
};
