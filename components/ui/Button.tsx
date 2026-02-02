import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98]";
  
  const variants = {
    // Rich deep blue primary
    primary: "bg-blue-700 hover:bg-blue-600 text-white shadow-lg shadow-blue-900/50 border border-blue-600/50",
    // Outline with blue-ish tints
    outline: "bg-transparent border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-300 hover:bg-slate-800/50",
    ghost: "bg-transparent text-slate-400 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};