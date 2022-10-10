// src/redux/modules/config/configStore.js

// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux";
import toDo from "../modules/toDo";

// 새롭게 추가한 부분

const rootReducer = combineReducers({
  toDo: toDo, // <-- 새롭게 추가한 부분
});
const store = createStore(rootReducer);

export default store;
