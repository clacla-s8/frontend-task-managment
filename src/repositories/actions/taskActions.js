export const FETCH_TASKS = "FETCH_TASKS";
export const FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS";
export const FETCH_TASKS_FAILURE = "FETCH_TASKS_FAILURE";

export const fetchTasks = () => ({ type: FETCH_TASKS });
export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
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


export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS";
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE";

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const deleteTaskSuccess = (deletedTaskId) => ({
  type: DELETE_TASK_SUCCESS,
  payload: deletedTaskId,
});

export const deleteTaskFailure = (error) => ({
  type: DELETE_TASK_FAILURE,
  payload: error,
});


export const FINISH_TASK = "FINISH_TASK";
export const FINISH_TASK_SUCCESS = "FINISH_TASK_SUCCESS";
export const FINISH_TASK_FAILURE = "FINISH_TASK_FAILURE";

export const finishTask = (taskId) => ({
  type: FINISH_TASK,
  payload: taskId,
});

export const finishTaskSuccess = (finishedTask) => ({
  type: FINISH_TASK_SUCCESS,
  payload: finishedTask,
});

export const finishTaskFailure = (error) => ({
  type: FINISH_TASK_FAILURE,
  payload: error,
});

