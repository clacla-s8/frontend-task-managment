
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_TASKS,
  fetchTasksSuccess,
  fetchTasksFailure,
  CREATE_TASK,
  createTaskSuccess,
  createTaskFailure,
  DELETE_TASK,
  deleteTaskSuccess,
  deleteTaskFailure,
  FINISH_TASK,
  finishTaskSuccess,
  finishTaskFailure,
} from "../actions/taskActions";
import axios from "axios";

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
          "Content-Type": "multipart/form-data",
        },
      }
    );
    yield put(createTaskSuccess(response.data));
  } catch (error) {
    yield put(createTaskFailure(error.message));
  }
}

function* deleteTaskSaga(action) {
  try {
    yield axios.delete(`http://localhost:8090/tasks/${action.payload}`);
    yield put(deleteTaskSuccess(action.payload));
  } catch (error) {
    yield put(deleteTaskFailure(error.message));
  }
}

function* finishTaskSaga(action) {
  try {
    const response = yield axios.patch(
      `http://localhost:8090/tasks/${action.payload}/finish`
    );
    yield put(finishTaskSuccess(response.data));
  } catch (error) {
    yield put(finishTaskFailure(error.message));
  }
}

function* taskSaga() {
  yield takeLatest(FETCH_TASKS, fetchTasksSaga);
  yield takeLatest(CREATE_TASK, createTaskSaga);
  yield takeLatest(DELETE_TASK, deleteTaskSaga);
  yield takeLatest(FINISH_TASK, finishTaskSaga);
}

export default taskSaga;
