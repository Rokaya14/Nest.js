import { takeLatest } from "@redux-saga/core/effects";
import { handelGetUser } from "./handlers/user";
import Get_User from "../ducks/user";
export function* watcherSaga() {
  yield takeLatest(Get_User, handelGetUser());
}
