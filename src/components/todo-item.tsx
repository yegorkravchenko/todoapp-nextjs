import { deleteTodoAction } from '@/app/actions';
import { Todo } from '@/db/schema';
import CustomButton from '@/components/ui/custom-button';

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <li className="mb-6 p-4 px-5 border border-dashed rounded">
      <p className="text-center mb-2">{todo.text}</p>
      <form
        action={deleteTodoAction.bind(null, todo.id)}
        className="flex justify-center items-center"
      >
        <CustomButton>Delete</CustomButton>
      </form>
    </li>
  );
}
