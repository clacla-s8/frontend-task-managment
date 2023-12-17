export const FETCH_TASKS = "FETCH_TASKS";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const fetchTasks = () => ({ type: FETCH_TASKS });
export const fetchTasksSuccess = (products) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: products,
});
export const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});

export const CREATE_TASK = "CREATE_TASK";
export const CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS";
export const CREATE_TASK_FAILURE = "CREATE_TASK_FAILURE";

export const createTask = (taskData) => ({
  type: CREATE_TASK,
  payload: taskData,
});
export const createTaskSuccess = (newTask) => ({
  type: CREATE_TASK_SUCCESS,
  payload: newTask,
});
export const createTaskFailure = (error) => ({
  type: CREATE_TASK_FAILURE,
  payload: error,
});
