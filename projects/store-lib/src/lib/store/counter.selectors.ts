import { createSelector, createFeatureSelector } from '@ngrx/store';
export const selectCounter = createFeatureSelector<number>('counter');
export const selectDoubleCounter = createSelector(
selectCounter,
(count) => count * 2
);
