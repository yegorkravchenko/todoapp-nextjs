import { getAllTodos } from '@/data-access/todos';
import { unstable_noStore } from 'next/cache';
import CustomButton from './ui/custom-button';
import { deleteTodoAction } from '@/app/actions';
import { Todo } from '@/db/schema';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="mb-6 p-4 px-5 border border-dashed rounded" key={todo.id}>
      <p className="mb-2">{todo.text}</p>
      <form
        action={deleteTodoAction.bind(null, todo.id)}
        className="flex justify-center items-center"
      >
        <CustomButton>Delete</CustomButton>
      </form>
    </li>
  );
}

export default async function TodosList() {
  unstable_noStore();

  const todos = await getAllTodos();

  return (
    <ul className="mt-12">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}
