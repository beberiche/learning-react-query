import { setupWorker } from "msw";
import { handlers } from "./handlers/todos";

export const worker = setupWorker(...handlers);
