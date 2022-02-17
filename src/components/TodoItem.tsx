import { ChangeEventHandler, useCallback, useMemo, VFC } from "react";
import { useRecoilValue } from "recoil";
import { todoListState, TodoItemType, useTodoList } from "../state/todoListState";

type Props = {
  item: TodoItemType;
};
export const TodoItem: VFC<Props> = ({ item }) => {
  const todoList = useRecoilValue(todoListState);
  const index = useMemo(() =>
    todoList.findIndex((listItem) => listItem === item),
    [item, todoList]
  );

  const { editItemTextAtIndex, toggleItemCompletionAtIndex, deleteItemAtIndex } = useTodoList();

  const editItemText: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      editItemTextAtIndex(index, item, value);
    },
    [editItemTextAtIndex, index, item]
  );

  const toggleItemCompletion = useCallback(() => {
    toggleItemCompletionAtIndex(index, item);
  }, [index, item, toggleItemCompletionAtIndex]);

  const deleteItem = useCallback(() => {
    deleteItemAtIndex(index);
  }, [deleteItemAtIndex, index]);

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};
