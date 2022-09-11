import { rest } from "msw";

const todos = [
  { id: 1, todo: "먹기" },
  { id: 2, todo: "자기" },
  { id: 3, todo: "놀기" },
];

export const handlers = [
  // 할일 목록
  rest.get("/todos", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  // 할일 추가
  rest.post("/todos", (req: { body: any }, res, ctx) => {
    todos.push(req.body);
    return res(ctx.status(201));
  }),
];
