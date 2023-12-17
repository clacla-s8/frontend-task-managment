// index.js
import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import { all } from "redux-saga/effects";
import taskSaga from "../sagas/taskSagas";

export const rootReducer = combineReducers({
  tasks: taskReducer,
});

export function* rootSaga() {
  yield all([taskSaga()]);
}
