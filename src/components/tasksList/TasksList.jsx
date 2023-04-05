import { useState, useEffect, useContext } from "react";
import { Context } from "../../store";
import { GET } from "../../utils/http";
import Task from "../task/Task";
import styles from "./index.module.scss";

const TasksList = () => {
  const mockData = {
    todos: [
      {
        id: 1,
        userId: 1,
        todo: "Complete task 1",
        completed: false,
      },
      {
        id: 2,
        userId: 2,
        todo: "Complete task 2",
        completed: true,
      },
      {
        id: 3,
        userId: 3,
        todo: "Complete task 3",
        completed: false,
      },
      {
        id: 4,
        userId: 4,
        todo: "Complete task 4",
        completed: false,
      },
    ],
    users: {
      1: {
        id: 1,
        username: "John",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
      },
      2: {
        id: 2,
        username: "Sarah",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
      },
      3: {
        id: 3,
        username: "Alex",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
      },
      4: {
        id: 4,
        username: "Jimmy",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
      },
      5: {
        id: 5,
        username: "Broen",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
      },
    },
  };

  const [tasksListData, setTasksListData] = useState(mockData.todos);

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "SET_TASKS_LIST":
  //       return {
  //         ...state,
  //         tasksListData: action.payload,
  //       };
  //     default:
  //       return state;
  //   }
  // };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TASKS_LIST":
        return {
          ...state,
          tasksListData: action.payload,
        };
      case "ADD_NEW_TASK":
        setTasksListData([...tasksListData, action.payload]);
        return {
          ...state,
          tempTodo: {
            username: "",
            todo: "",
            image: "",
            id: null,
          },
        };
      default:
        return state;
    }
  };
  // const { state, dispatch } = useContext(Context);
  const { state, dispatch } = useContext(Context);

  // useEffect(() => {
  //   GET("todos").then((res) => {
  //     dispatch({ type: "SET_TASKS_LIST", payload: res.todos });
  //   });
  // }, []);

  useEffect(() => {
    dispatch({ type: "SET_TASKS_LIST", payload: mockData.todos });
    dispatch({ type: "SET_USERS_DATA", payload: mockData.users });
  }, []);

  return (
    <div className={styles.TasksList}>
      {state.tasksListData.map((task) => (
        <Task taskData={task} key={task.id} />
      ))}
    </div>
  );
};

export default TasksList;
