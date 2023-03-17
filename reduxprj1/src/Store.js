import { legacy_createStore ,combineReducers} from "redux";
import Reducer from "./Reducer";

const Store=legacy_createStore(Reducer)
export default Store