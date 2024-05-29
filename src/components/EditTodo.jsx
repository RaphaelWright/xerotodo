import React, { useState } from "react";
import { SquarePen } from "lucide-react";

const EditTodo = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <div>
      {/* Todo Text Box */}
      <form className="w-auto flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="rounded-2xl pl-5 py-2 w-full outline-none bg-cards mt-5 text-card-text"
          placeholder="Changed your mind?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">
          <SquarePen
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

export default EditTodo;
