import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
