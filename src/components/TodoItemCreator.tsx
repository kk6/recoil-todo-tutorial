import { ChangeEventHandler, KeyboardEventHandler, useCallback, useState } from "react"
import { useTodoList } from "../state/todoListState";

export const TodoItemCreator: React.VFC = () => {
  const [inputValue, setInputValue] = useState('');
  const { addListItem } = useTodoList();

  const addItem = useCallback(() => {
    addListItem(inputValue);
    setInputValue('');
  }, [addListItem, inputValue, setInputValue]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      setInputValue(value);
    },
    []
  );

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = useCallback(
    (event) => {
    if (event.key === 'Enter') {
      addListItem(inputValue);
      setInputValue('');
    }
  }, [addListItem, inputValue, setInputValue]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} onKeyDown={onKeyDown} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}
