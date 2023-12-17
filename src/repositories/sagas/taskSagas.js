// taskSaga.js
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TASKS,
  fetchTasksSuccess,
  fetchTasksFailure,
  CREATE_TASK,
  createTaskSuccess,
  createTaskFailure,
} from "../actions/taskActions";
import axios from "axios";

// function* fetchTasksSaga() {
//   try {
//     const response = yield axios.get('http://localhost:8090/tasks');
//     yield put(fetchTasksSuccess(response.data));
//   } catch (error) {
//     yield put(fetchTasksFailure(error.message));
//   }
// }

// function* taskSaga() {
//   yield takeLatest(FETCH_TASKS, fetchTasksSaga);
// }

// export default taskSaga;

function* fetchTasksSaga() {
  try {
    const response = yield axios.get("http://localhost:8090/tasks");
    yield put(fetchTasksSuccess(response.data));
  } catch (error) {
    yield put(fetchTasksFailure(error.message));
  }
}

function* createTaskSaga(action) {
  try {
    const response = yield axios.post(
      "http://localhost:8090/tasks",
      action.payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    yield put(createTaskSuccess(response.data));
  } catch (error) {
    yield put(createTaskFailure(error.message));
  }
 }
 

function* taskSaga() {
  yield takeLatest(FETCH_TASKS, fetchTasksSaga);
  yield takeLatest(CREATE_TASK, createTaskSaga);
}

export default taskSaga;
