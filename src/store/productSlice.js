import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	productItem: [],
    id: 0
};

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProductId(state, action) {
			state.id = action.payload;
		},
        setProductItem(state, action) {
			state.productItem = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { setProductId, setProductItem } = productSlice.actions;

export default productSlice.reducer;
