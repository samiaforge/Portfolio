import React from 'react';

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  download,
  target,
  rel,
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  type = 'button',
  disabled = false,
  ...rest
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3 text-base gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-[#0B1120] text-slate-200 border border-blue-500/30 hover:border-cyan-400 hover:text-white hover:bg-blue-950/40 shadow-sm active:scale-[0.98]',
    outline:
      'bg-transparent text-slate-300 border border-slate-700/80 hover:border-blue-400 hover:text-white active:scale-[0.98]',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/40 active:scale-[0.98]',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={combinedClasses}
        onClick={onClick}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...rest}
    >
      {content}
    </button>
  );
};
