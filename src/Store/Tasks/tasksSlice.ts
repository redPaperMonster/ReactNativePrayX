import {createSlice} from '@reduxjs/toolkit';
import {TaskStateType, TaskType} from '../types';

const initialState: TaskStateType = {
  data: [],
  dataLoaded: false,
};
export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setDataLoaded: (state, action) => {
      state.dataLoaded = true;
    },
    loadData: () => {},
    getTasksById: (state, action) => {},
    setTasks: (state, action) => {
      action.payload.map((item: TaskType) => {
        state.data.push(item);
      });
      return state;
    },
    addTask: (state, action) => {
      state.data.push(action.payload);
    },
    createTask: (state, action) => {},
    deleteTask: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
      return state;
    },
    editTask: (state, action) => {},
    saveTaskChanges: (state, action) => {
      state.data.map(item => {
        if (item.id === action.payload.id) {
          item.checked = action.payload.checked;
        }
        return item;
      });
      return state;
    },
  },
});

export const taskActions = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
