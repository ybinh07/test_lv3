import { useEffect, useState } from "react";

const TodoListHeader = (props) => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [incompleteTaskCount, setIncompleteTaskCount] = useState(0);
  useEffect(()=>{
    setTaskList(JSON.parse(localStorage.getItem("taskList")))
  },[props.changeVal])
  const updateIncompleteTaskCount = () => {
    setIncompleteTaskCount((prevCount) => {
      const count = taskList.filter((task) => !task.status).length;
      return count;
    });
  };

  useEffect(() => {
    updateIncompleteTaskCount();
  }, [taskList]);

  return (
    <div className="header">
      Bạn còn {incompleteTaskCount} công việc chưa hoàn thành!
    </div>
  );
};

export default TodoListHeader;