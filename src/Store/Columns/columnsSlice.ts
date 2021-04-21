import {createSlice} from '@reduxjs/toolkit';
import {ColumnsType, ColumnType} from '../types';

const initialState: ColumnsType = [];
export const columnSlice = createSlice({
  name: 'columns',
  initialState,
  reducers: {
    setColumns: (state, action) => {
      action.payload.map((item: ColumnType) => {
        state.push(item);
      });
    },
    addColumn: (state, action) => {
      state.push(action.payload);
    },
    createColumn: (state, action) => {},
    editColumn: (state, action) => {},
    saveColumnChanges: (state, action) => {
      return state.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    deleteColumn: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    clearStore: state => {
      return initialState;
    },
  },
});

export const columnActions = columnSlice.actions;

export const columnReducer = columnSlice.reducer;
