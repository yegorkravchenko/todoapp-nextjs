import { createTodoAction } from '@/app/actions';
import CustomButton from '@/components/ui/custom-button';

export default function CreateTodoForm() {
  return (
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
      <CustomButton className="ml-4">Create todo</CustomButton>
    </form>
  );
}
