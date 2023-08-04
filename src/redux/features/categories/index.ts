import { Category } from '@/types/category';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialStateProps {
    categories: Category[];
}

const initialState: InitialStateProps = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        getAllCategories: (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
        },
    },
});

export const { getAllCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
