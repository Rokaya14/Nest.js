import { call, put } from "@redux-saga/core/effects";
import { setUser } from "../../ducks/user";
import { api } from "../requests/user";

export function* handelGetUser(action) {
  try {
    yield console.log("jhenfokde");
    const response = yield call(api);
    const { data } = response;
    // dispatch setUser action to put data in our store
    yield put(setUser(data));
  } catch (error) {
    console.log(error);
  }
}
