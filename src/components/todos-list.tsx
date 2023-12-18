import { getAllTodos } from '@/data-access/todos';
import { unstable_noStore } from 'next/cache';
import TodoItem from './todo-item';

export default async function TodosList() {
  unstable_noStore();

  const todos = await getAllTodos();

  return (
    <ul className="mt-12">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
