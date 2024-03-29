import React, { useEffect, useState } from "react";

import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  useEffect(() => {
    setTaskList(JSON.parse(localStorage.getItem("taskList")));
  }, [props.changeVal]);
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "taskList") {
        setTaskList(JSON.parse(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  const handleTaskStatusChange = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = {
      ...updatedTaskList[index],
      status: !updatedTaskList[index].status,
    };
    setTaskList(updatedTaskList);
  };

  const handleShowCompletedTasksChange = () => {
    setShowCompletedTasks(!showCompletedTasks);
  };

  const filteredTaskList = showCompletedTasks
    ? taskList
    : taskList.filter((task) => !task.status);

  return (
    <div className="todo-list-container">
      <div>
        <label>
          <input
            type="checkbox"
            checked={showCompletedTasks}
            onChange={handleShowCompletedTasksChange}
          />
          Chưa hoàn thành
        </label>
      </div>
      {filteredTaskList.length > 0 &&
        filteredTaskList.map((task, index) => (
          <TodoItem
            key={task}
            task={task}
            index={index}
            handleTaskStatusChange={handleTaskStatusChange}
          />
        ))}
    </div>
  );
};

export default TodoList;
