import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 text-base font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-berlin-blue disabled:opacity-50 disabled:cursor-not-allowed rounded-sm";
  
  const variants = {
    primary: "bg-berlin-blue text-white hover:bg-[#244870] border border-transparent",
    secondary: "bg-transparent border border-charcoal text-charcoal hover:bg-charcoal hover:text-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};