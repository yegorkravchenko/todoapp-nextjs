import { twMerge } from 'tailwind-merge';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function CustomButton({
  children,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={twMerge(
        'border border-solid border-white rounded px-2 py-1 hover:bg-gradient-to-br from-slate-50 to-slate-300 hover:text-black',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
