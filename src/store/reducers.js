// export const mainReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_TASKS_LIST":
//       return {
//         ...state,
//         tasksListData: action.payload,
//       };
//     case "CREATE_NEW_TASK":
//       return {
//         ...state,
//         tasksListData: [...state.tasksListData, action.payload],
//       };
//   }
// };

export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS_LIST":
      return {
        ...state,
        tasksListData: action.payload,
      };
    case "SET_USERS_DATA":
      return {
        ...state,
        usersData: action.payload,
      };
    case "ADD_NEW_TASK":
      const newTask = {
        ...action.payload,
        completed: false,
      };

      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
    case "SET_TASK_COMPLETED":
      return {
        ...state,
        tasksListData: state.tasksListData.map((task) => {
          if (task.id === action.payload)
            return {
              ...task,
              completed: !task.completed,
            };
          return task;
        }),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasksListData: state.tasksListData.filter(
          (task) => task.id !== action.payload
        ),
      };
    case "SET_MODAL_VISIBILITY":
      return {
        ...state,
        isModalVisibile: action.payload,
      };
    case "SET_TEMP_TODO_USERNAME":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          username: action.payload,
        },
      };
    case "SET_TEMP_TODO_TODO":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          todo: action.payload,
        },
      };
    case "SET_TEMP_TODO_IMAGE":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          image: action.payload,
        },
      };
    case "SET_TEMP_TODO_ID":
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          id: state.tasksListData.length + 1,
        },
      };
  }
};
