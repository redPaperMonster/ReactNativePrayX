import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

const store = (state: RootState) => state;
export const taskSelectors = {
  getTasks: () => createSelector(store, state => state.tasks),

  getCheckedTasksByColumnId: (id: number) =>
    createSelector(store, state =>
      state.tasks.data.filter(i => i.checked === true && i.columnId === id),
    ),

  getUncheckedTasksByColumnId: (id: number) =>
    createSelector(store, state =>
      state.tasks.data.filter(i => i.checked === false && i.columnId === id),
    ),

  getDataLoaded: () => createSelector(store, state => state.tasks.dataLoaded),
};
