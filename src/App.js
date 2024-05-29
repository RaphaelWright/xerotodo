import "./App.css";
import "./styles.css";
import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import { LogOut } from "lucide-react";
import TaskCounter from "./components/TaskCounter";
import { v4 as uuidv4 } from "uuid";
import Todo from "./components/Todo";
import EditTodo from "./components/EditTodo";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="relative bg-inner-div rounded-3xl mx-20 my-5 px-5 h-screen">
      {/* top bar */}
      <div className="flex items-center h-auto content-normal pt-10 pl-20">
        <h3 className="w-fit">
          <b className="text-bodycolor text-2xl">XERO</b>
          <b className="text-orange text-2xl">TODO</b>
        </h3>
        <LogOut
          className="ml-auto mr-10"
          size={35}
          strokeWidth={4}
          color="#cdbea3"
          onClick={clearTodos}
        />
      </div>

      {/* Main Todo Area */}
      <div className="mx-96 mt-5">
        <TaskCounter totalTasks={totalTasks} completedTasks={completedTasks} />

        {/*Todo Text*/}
        <TodoForm addTodo={addTodo} />

        {/*Todo List*/}
        {todos.map((todo, index) =>
          todo.isEditing ? (
            <EditTodo editTodo={editTask} task={todo} key={index} />
          ) : (
            <Todo
              task={todo}
              key={index}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          )
        )}
      </div>
    </div>
  );
};

export default App;
