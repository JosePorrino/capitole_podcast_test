import { InternalAxiosRequestConfig, AxiosError } from 'axios';
// import { useBrowserStore } from '@/hooks/useBrowserStore';

const DEBUG = process.env.NODE_ENV === 'development';

export const requestErrorInterceptor = (
	error: AxiosError
): Promise<AxiosError> => {
	if (DEBUG) console.info('❌ ~ requestError', error);

	// Do something with request error
	return Promise.reject(error);
};

export const requestSuccessInterceptor = (
	config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
	// const { getFromStore } = useBrowserStore();
	// const token = getFromStore('token');
	// if (token !== '' && token !== undefined) {
	// 	config.headers.set('Authorization', `Bearer ${token}`);
	// }

	return config;
};
