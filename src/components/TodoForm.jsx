import React, { useState } from "react";
import { Plus } from "lucide-react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      {/* Todo Text Box */}
      <form className="w-auto flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-2xl pl-5 py-2 w-full outline-none bg-cards mt-5 text-card-text"
          placeholder="write your next task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <Plus
            className="rounded-full border-orange p-2 bg-orange mt-5 ml-3"
            size={40}
            color="black"
            strokeWidth={3}
          />
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
