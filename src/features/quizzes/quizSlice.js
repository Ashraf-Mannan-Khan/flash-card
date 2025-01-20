import { createSlice, createSelector } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id , name, topicId, cardIds} = action.payload;
      state.quizzes[id] = {id , name, topicId, cardIds};
    }
  }
});

const quizzesState = (state) => state.quizzes.quizzes;

export const selectQuizzes = createSelector(
  [quizzesState],
  quiz => quiz
);

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;