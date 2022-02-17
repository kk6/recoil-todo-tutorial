import { ChangeEventHandler, useCallback } from "react";
import { useRecoilState } from "recoil"
import { todoListFilterState } from "./todoListFilterState"

export const TodoListFilters: React.VFC = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter: ChangeEventHandler<HTMLSelectElement> = useCallback(
    ({ target: {value} }) => {
      setFilter(value);
    },
    [setFilter]
  );

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
