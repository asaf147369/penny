import React from 'react';
import './Button.scss';

export type ButtonType = 'primary' | 'tertiary' | 'naked' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonType;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  label?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      leftIcon,
      rightIcon,
      disabled,
      label,
      className = '',
      onClick,
      ...rest
    },
    ref,
  ) => {
    const isDisabled = disabled;
    const hasLeftIcon = !!leftIcon;
    const hasRightIcon = !!rightIcon;
    const hasAnyIcon = hasLeftIcon || hasRightIcon;
    const isIconOnly = hasAnyIcon && !label;
    const state: 'enabled' | 'disabled' = isDisabled ? 'disabled' : 'enabled';

    const baseClass = 'button';
    const typeClass = `${baseClass}--${variant}`;
    const sizeClass = `${baseClass}--${size}`;
    const iconOnlyClass = isIconOnly ? `${baseClass}--icon-only` : '';
    const disabledClass = isDisabled ? `${baseClass}--disabled` : '';

    const classes = [
      baseClass,
      typeClass,
      sizeClass,
      iconOnlyClass,
      disabledClass,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        className={classes}
        disabled={isDisabled}
        onClick={handleClick}
        data-state={state}
        aria-label={isIconOnly ? label || 'button' : undefined}
        {...rest}
      >
        {hasLeftIcon && <span className="button__icon">{leftIcon}</span>}
        {label ? <span className="button__content">{label}</span> : null}
        {hasRightIcon && <span className="button__icon">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = 'Button';
