import React from "react";
import TodoInput from "./components/TodoInput";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./components/TodoList";

const queryClient = new QueryClient();

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <TodoInput />
        <TodoList />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
