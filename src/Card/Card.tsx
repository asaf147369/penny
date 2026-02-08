import React from 'react';
import './Card.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'info';
  size?: 'small' | 'medium' | 'large';
  paddingSize?: number;
  onClick?: () => void;
}

const CardComponent = React.forwardRef<HTMLDivElement, CardProps>(
  function CardComponent(
    {
      variant = 'default',
      className = '',
      children,
      size = 'medium',
      onClick,
      ...rest
    },
    ref,
  ) {
    const classes = [
      'card-container',
      `card-container--${variant}`,
      `card-container--${size}`,
      onClick ? 'card-container--clickable' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <div ref={ref} className={classes} onClick={onClick} {...rest}>
        {children}
      </div>
    );
  },
);

CardComponent.displayName = 'Card';

const CardHeader: React.FC<{
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}> = ({ children, className = '', icon }) => {
  const hasIcon = !!icon;
  const headerClasses = [
    'card-header',
    hasIcon ? 'card-header--with-icon' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClasses}>
      {icon && <span className="card-header__icon">{icon}</span>}
      <h2 className="card-header__title">{children}</h2>
    </header>
  );
};

const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => <div className={`card-body ${className}`}>{children}</div>;

export const Card = Object.assign(CardComponent, {
  Header: CardHeader,
  Body: CardBody,
});
