import { Action as ReduxAction } from "redux";


export interface AppActions extends ReduxAction {
  type: string
  payload: any
}

export type AddToken = { type: "ADD_TOKEN", payload: string } & AppActions
export type RemoveToken = { type: "REMOVE_TOKEN", payload: string } & AppActions
export type SetTag = { type: "SET_TAG", payload: string } & AppActions