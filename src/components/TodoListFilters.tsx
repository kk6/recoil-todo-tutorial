import { ChangeEventHandler, useCallback } from "react";
import { useRecoilValue } from "recoil"
import { FilterType, FilterValue, todoListFilterState, useFilter } from "../state/todoListFilterState";

export const TodoListFilters: React.VFC = () => {
  const filter = useRecoilValue(todoListFilterState);
  const { setListFilter } = useFilter();
  const updateFilter: ChangeEventHandler<HTMLSelectElement> = useCallback(
    ({ target: {value} }) => {
      setListFilter(value as FilterType);
    },
    [setListFilter]
  );

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value={FilterValue.SHOW_ALL}>All</option>
        <option value={FilterValue.SHOW_COMPLETED}>Completed</option>
        <option value={FilterValue.SHOW_UNCOMPLETED}>Uncompleted</option>
      </select>
    </>
  );
}
