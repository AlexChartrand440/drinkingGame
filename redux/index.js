import { combineReducers } from "redux";
import player from "./reducers/players";
import game from "./reducers/game";

const app = combineReducers({ player, game });

export default app;
