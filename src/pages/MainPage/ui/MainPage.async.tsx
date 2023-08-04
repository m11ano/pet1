import { lazy } from 'react';
import { resolve } from 'url';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));