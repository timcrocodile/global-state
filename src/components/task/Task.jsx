import { useContext } from "react";
import { Context } from "../../store";
import { randomHSLA } from "../../utils/funcs";
import styles from "./index.module.scss";

const Task = ({ taskData }) => {
  const { state } = useContext(Context);
  const userData = state.usersData[taskData?.userId];
  if (!userData) {
    return null; // or display a loading indicator
  }

  return (
    <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
      <div className={styles.info}>
        <img src={userData.image} alt={userData.username} />
        {taskData.completed && <button>V</button>}
      </div>
      <div className={styles.content}>
        <span>{userData.username}</span>
        <p>{taskData.todo}</p>
      </div>
    </div>
  );
};

export default Task;

// import { useState, useEffect } from "react";
// import { GET } from "../../utils/http";
// import { randomHSLA } from "../../utils/funcs";
// import styles from "./index.module.scss";

// const Task = ({ taskData }) => {

//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     GET(`users/${taskData.userId}`).then((data) => setUserData(data));
//   }, []);

//   return (
//     <div className={styles.Task} style={{ background: `${randomHSLA()}` }}>
//       <div className={styles.info}>
//         <img src={userData.image} alt={userData.username} />
//         {taskData.completed && <button>V</button>}
//       </div>
//       <div className={styles.content}>
//         <span>{userData.username}</span>
//         <p>{taskData.todo}</p>
//       </div>
//     </div>
//   );
// };

// export default Task;
