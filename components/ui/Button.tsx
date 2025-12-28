import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  // Sharp corners (rounded-none), tracking tight, uppercase
  const baseStyles = "relative inline-flex items-center justify-center font-bold transition-all duration-200 tracking-wider uppercase border rounded-none group overflow-hidden";
  
  const variants = {
    primary: "bg-nexus-orange border-nexus-orange text-white hover:bg-orange-600 hover:border-orange-600",
    secondary: "bg-white text-nexus-black border-white hover:bg-gray-200 hover:border-gray-200",
    outline: "bg-transparent border-nexus-border text-white hover:border-nexus-orange hover:text-white",
    ghost: "bg-transparent border-transparent text-nexus-muted hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
    xl: "px-10 py-5 text-base"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Subtle hover shine effect for primary buttons */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      )}
    </button>
  );
};