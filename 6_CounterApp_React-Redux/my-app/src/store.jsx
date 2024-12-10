import { createStore } from "redux";
import { counterReducer } from "./services/counterReducer";

export const store = createStore(counterReducer);
