import { AppActions } from "./ActionCreators";
export interface AppState {
  token: string | null
  tag: string | null
}


export function reducer(currentS: AppState = { token: localStorage.getItem("token"), tag: null }, a: AppActions): AppState {
  switch (a.type) {
    case "ADD_TOKEN":
      return { token: a.payload, tag: currentS.tag }
    case "REMOVE_TOKEN":
      return { token: null, tag: currentS.tag }
    case "SET_TAG":
      return { token: currentS.token, tag: a.payload }
    default:
      return currentS
  }
} 