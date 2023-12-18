import {
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASK,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  FINISH_TASK,
  FINISH_TASK_SUCCESS,
  FINISH_TASK_FAILURE,
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

    case DELETE_TASK:
      return { ...state, loading: true, error: null };

    case DELETE_TASK_SUCCESS:
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return {
        ...state,
        loading: false,
        tasks: updatedTasks,
      };

    case DELETE_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case FINISH_TASK:
      return { ...state, loading: true, error: null };

    case FINISH_TASK_SUCCESS:
      const finishTask = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, status: true } : task
      );
      return {
        ...state,
        loading: false,
        tasks: finishTask,
      };

    case FINISH_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
