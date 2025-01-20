import { configureStore } from "@reduxjs/toolkit";
import topicReducer from '../features/topics/topicsSlice';
import quizReducer from '../features/quizzes/quizSlice';
import cardsReducer from '../features/cards/cardsSlice';
export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardsReducer,
  },
});