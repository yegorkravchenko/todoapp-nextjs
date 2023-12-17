import CreateTodoForm from '@/components/forms/create-todo-form';
import TodosList from '@/components/todos-list';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <CreateTodoForm />
      <TodosList />
    </main>
  );
}
