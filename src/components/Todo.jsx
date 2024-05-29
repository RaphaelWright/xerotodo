import React from "react";
import { Circle } from "lucide-react";
import { SquarePen } from "lucide-react";
import { Trash } from "lucide-react";
import { CheckCircle } from "lucide-react";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div
      className={`flex bg-cards mt-3 rounded-xl py-3 border-bodycolor border ${
        task.completed ? "brightness-50" : ""
      }`}
      onClick={() => toggleComplete(task.id)}
    >
      {task.completed ? (
        <CheckCircle className="ml-3" color="#ff552f" />
      ) : (
        <Circle className="ml-3" color="#ff552f" />
      )}
      <span
        className={`text-card-text font-bold pl-2 ${
          task.completed ? "line-through" : ""
        }`}
      >
        {task.task}
      </span>
      <SquarePen
        className="ml-auto mr-2"
        color="#cdbea3"
        onClick={(e) => {
          e.stopPropagation();
          editTodo(task.id);
        }}
      />
      <Trash
        className="mr-5"
        color="#cdbea3"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(task.id);
        }}
      />
    </div>
  );
};

export default Todo;
