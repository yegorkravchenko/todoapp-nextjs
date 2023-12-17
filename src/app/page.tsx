import { createTodoAction } from './actions';
import { db } from '@/db';

export default async function Home() {
  const todos = await db.query.todos.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form
        className="border-b border-solid border-white py-6 px-3"
        action={createTodoAction}
      >
        <input
          className="border border-solid border-white text-black px-2 py-1 rounded bg-gradient-to-br from-slate-50 to-slate-200"
          name="text"
          type="text"
          placeholder="What do you have to do?"
          autoComplete="off"
        />
        <button className="border border-solid border-white rounded ml-4 px-2 py-1 hover:bg-gradient-to-br from-slate-50 to-slate-300 hover:text-black">
          Create todo
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </main>
  );
}
