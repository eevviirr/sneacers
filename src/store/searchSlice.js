import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	searchValue: ''
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setsearchValue(state, action) {
			state.searchValue = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { setsearchValue } = searchSlice.actions;

export default searchSlice.reducer;
