import { createAction } from '@reduxjs/toolkit';

export const setLoading = createAction<boolean>('SET_LOADING');
export const setModificationExample = createAction<string>(
	'SET_MODIFICATION_EXAMPLE'
);
