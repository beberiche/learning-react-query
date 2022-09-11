import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

interface Data {
  name?: string;
  description?: string;
  subscribers_count?: number;
  stargazers_count?: number;
  forks_count?: number;
}

function Example(): JSX.Element {
  const { isLoading, error, data } = useQuery<boolean, AxiosError, Data>(
    ["repoData"],
    async () => {
      const response = await axios.get(
        "https://api.github.com/repos/tannerlinsley/react-query"
      );
      return response.data;
    }
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred : {error.message}</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong>
    </div>
  );
}

export default App;
