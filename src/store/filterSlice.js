import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filterId: 0
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilterId(state, action) {
			state.filterId = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { setFilterId } = filterSlice.actions;

export default filterSlice.reducer;
