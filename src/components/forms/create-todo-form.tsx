'use client';

import { useFormState } from 'react-dom';
import { FormState, createTodoAction } from '@/app/actions';
import CustomButton from '@/components/ui/custom-button';

export default function CreateTodoForm() {
  const [formState, wrappedCreateTodoAction] = useFormState(createTodoAction, {
    text: '',
    errors: {
      text: undefined,
    },
  } as FormState);

  return (
    <form
      className="border-b border-solid border-white py-6 px-3"
      action={wrappedCreateTodoAction}
    >
      <input
        className="block border border-solid border-white text-black px-2 py-1 rounded bg-gradient-to-br from-slate-50 to-slate-200"
        defaultValue={formState.text}
        name="text"
        type="text"
        // placeholder="What do you have to do?"
        autoComplete="off"
      />
      {formState.errors.text && (
        <p className="text-red-400">{formState.errors.text}</p>
      )}
      <CustomButton className="ml-4">Create todo</CustomButton>
    </form>
  );
}
