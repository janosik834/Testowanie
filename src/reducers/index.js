import { combineReducers } from "redux";
import { files } from "./files";
import { filesSearch } from "./files"

export default combineReducers({
  files,
  filesSearch
});
