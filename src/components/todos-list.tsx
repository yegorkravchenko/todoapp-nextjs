import { db } from '@/db';

export default async function TodosList() {
  const todos = await db.query.todos.findMany();

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
