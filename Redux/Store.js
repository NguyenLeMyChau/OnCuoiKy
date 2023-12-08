import { createStore } from "redux";
import reducer from "./Reducer";

export var store = createStore(reducer);