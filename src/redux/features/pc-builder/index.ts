import { Product } from '@/types/product';
import { createSlice } from '@reduxjs/toolkit';

interface InitialStateProps {
    productsSelected?: Product[];
}

const initialState: InitialStateProps = {
    productsSelected: [],
};

const pcBuilderSlice = createSlice({
    name: 'pc-builder',
    initialState,
    reducers: {
        selectedProducts: (state, action) => {
            state.productsSelected?.push(action.payload);
        },
        deleteProduct: (state, action) => {
            state.productsSelected = state.productsSelected?.filter(
                (product) => product._id !== action.payload
            );
        },
        clearProduct: (state) => {
            state.productsSelected = [];
        },
    },
});

export const { selectedProducts, deleteProduct, clearProduct } =
    pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
