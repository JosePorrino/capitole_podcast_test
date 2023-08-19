import { createReducer } from '@reduxjs/toolkit';
import { setLoading } from '../actions/loadingAction';

interface IState {
	isLoading: boolean;
}

const initialState: IState = {
	isLoading: false,
};

const loadingReducer = createReducer(initialState, builder => {
	builder.addCase(setLoading, (state, action) => {
		state.isLoading = action.payload;
	});
});

export default loadingReducer;
