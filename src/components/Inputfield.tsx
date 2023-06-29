import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const Inputfield = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a Task" className="input__box" />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default Inputfield;
