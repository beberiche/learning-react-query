import React from "react";

const TodoError: React.FC<{ message: string | null }> = (props) => {
  return <div>Error occuered! {props.message}</div>;
};

export default TodoError;
