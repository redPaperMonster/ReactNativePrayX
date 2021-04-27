import {createSlice} from '@reduxjs/toolkit';
import {CommentStateType} from '../types';

const initialState: CommentStateType = {
  data: [],
  dataLoaded: false,
};
export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setDataLoaded: (state, action) => {
      state.dataLoaded = action.payload;
    },
    loadData: () => {},
    setComments: (state, action) => {
      state.data = action.payload;
      return state;
    },
    addComment: (state, action) => {
      const comment = action.payload.entities.comments[action.payload.result];
      state.data.push({
        id: comment.id,
        body: comment.body,
        created: comment.created,
        prayerId: comment.card,
        userId: comment.user,
      });
    },
    createComment: (state, action) => {},
    deleteComment: (state, action) => {
      state.data = state.data.filter(item => item.id !== action.payload);
      return state;
    },
    editComment: (state, action) => {},
    saveChanges: (state, action) => {
      state.data = state.data.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
      return state;
    },
  },
});

export const commentActions = commentSlice.actions;

export const commentReducer = commentSlice.reducer;
