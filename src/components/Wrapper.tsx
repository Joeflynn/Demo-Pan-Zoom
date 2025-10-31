import { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className = '' }: WrapperProps) => {
  return (
    <div
      className={`p-4 border rounded-2xl shadow-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;