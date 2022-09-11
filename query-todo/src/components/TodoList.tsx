import React, { Suspense, lazy } from "react";
import { useQuery, QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import axios, { AxiosError } from "axios";

import Loading from "./Loading";
import TodoError from "./TodoError";

interface Response {
  id: number;
  todo?: string;
}

const TodoList = () => {
  const { data } = useQuery<Response[], Error>(["todo", "get"], async () => {
    const response = await axios.get("/todos");
    return response.data;
  });

  return (
    <Suspense fallback={<Loading />}>
      {data?.map((el) => (
        <li key={el.id}>{el.todo}</li>
      ))}
    </Suspense>
  );
};

export default TodoList;
