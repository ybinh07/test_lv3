import { FaCircle, FaCheckCircle } from "react-icons/fa";
const TodoItem = ({ task, index, handleTaskStatusChange }) => {
    return (
      <div
        className={`todo-item-container ${task.status ? "done" : ""}`}
        key={index}
      >
        {task.status ? (
          <FaCheckCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => handleTaskStatusChange(index)}
          />
        ) : (
          <FaCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => handleTaskStatusChange(index)}
          />
        )}
        <div className="item-title">{task.title}</div>
      </div>
    );
  };
  export default TodoItem;