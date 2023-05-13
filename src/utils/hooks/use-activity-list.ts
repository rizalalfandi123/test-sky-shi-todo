import { useReducer } from "react";
import { IDetailActivityGroupResponse } from "..";

type TodoItems = IDetailActivityGroupResponse["todo_items"];

export type TActivitySort = "Terbaru" | "Terlama" | "A - Z" | "Z-A" | "Belum Selesai";

export type TUseActivityListAction =
  | { type: "SET_LIST"; payload: TodoItems }
  | { type: TActivitySort }
  | { type: "SET_ACTIVE_SORT"; payload: TActivitySort };

export interface IActivityListState {
  list: TodoItems;
  activeSort: TActivitySort;
}

export const useActivityList = (initialState: IActivityListState) => {
  function reducer(state: IActivityListState, action: TUseActivityListAction): IActivityListState {
    switch (action.type) {
      case "SET_LIST":
        return { ...state, list: action.payload };

      case "A - Z":
        return {
          ...state,
          list: state.list.sort((a, b) => {
            if (a.title < b.title) {
              return -1;
            } else if (a.title > b.title) {
              return 1;
            } else {
              return 0;
            }
          }),
        };

      case "Z-A":
        return {
          ...state,
          list: state.list.sort((a, b) => {
            if (a.title > b.title) {
              return -1;
            } else if (a.title < b.title) {
              return 1;
            } else {
              return 0;
            }
          }),
        };

      case "Terlama":
        return {
          ...state,
          list: state.list.sort((a, b) => {
            return a.id - b.id;
          }),
        };

      case "Terbaru":
        return {
          ...state,
          list: state.list.sort((a, b) => {
            return b.id - a.id;
          }),
        };

      case "Belum Selesai":
        return {
          ...state,
          list: state.list.sort((a, b) => {
            if (b.is_active && !a.is_active) {
              return -1;
            } else if (!b.is_active && a.is_active) {
              return 1;
            } else {
              return 0;
            }
          }),
        };

      case "SET_ACTIVE_SORT":
        return {
          ...state,
          activeSort: action.payload,
        };

      default:
        return { ...state, list: [] };
    }
  }

  return useReducer<typeof reducer>(reducer, initialState);
};
