import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../features/categories';
import pcBuilderReducer from '../features/pc-builder';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        pcBuilder: pcBuilderReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
