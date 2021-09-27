import { call, put } from "@redux-saga/core/effects";
import { setUser } from "../../ducks/user";
import { api } from "../requests/user";

export function* handelGetUser() {
  try {
    const response = yield call(api);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
