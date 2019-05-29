import { combineReducers } from "redux";
import game from "./reducers/game";

const app = combineReducers({ game });

export default app;
