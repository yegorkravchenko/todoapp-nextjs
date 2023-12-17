import { getAllTodos } from '@/data-access/todos';
import { unstable_noStore } from 'next/cache';

export default async function TodosList() {
  unstable_noStore();

  const todos = await getAllTodos();

  return (
    <ul className="mt-12">
      {todos.map((todo) => (
        <li className="mb-6 pb-2 px-5 border-b border-dashed" key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}
