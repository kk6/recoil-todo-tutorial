import { atom } from "recoil";

export const todoListFilterState = atom<string>({
  key: 'todoListFilterState',
  default: 'Show All'
})
