// // taskReducer.js
// import { FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE, CREATE_TASK, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE } from '../actions/taskActions';

// const initialState = {
//   tasks: [],
//   loading: false,
//   error: null,
// };

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_TASKS:
//     case CREATE_TASK:
//       return { ...state, loading: true, error: null };

//     case FETCH_TASKS_SUCCESS:
//     case CREATE_TASK_SUCCESS:
//       return { ...state, loading: false, tasks: action.payload };

//     case FETCH_TASKS_FAILURE:
//     case CREATE_TASK_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default taskReducer;

import {
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
} from "../actions/taskActions";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS:
    case CREATE_TASK:
      return { ...state, loading: true, error: null };

    case FETCH_TASKS_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };

    case FETCH_TASKS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };

    case CREATE_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default taskReducer;
