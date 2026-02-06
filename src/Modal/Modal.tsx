import React from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import DangerIcon from '../icons/DangerIcon.svg';
import CloseIcon from '../icons/CloseIcon.svg';
import './Modal.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  variant?: 'default' | 'danger';
  icon?: React.ReactNode;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'medium',
}: ModalProps) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className={`modal-container modal-container--${size}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

const ModalHeader: React.FC<ModalHeaderProps> = ({
  title,
  onClose,
  variant = 'default',
  icon,
}) => {
  const renderIcon = () => {
    if (icon) return icon;

    if (variant === 'danger') {
      return <DangerIcon />;
    }

    return null;
  };

  return (
    <header className={`modal-header modal-header--${variant}`}>
      <div className="modal-header__left">
        {renderIcon() && (
          <span className="modal-header__icon">{renderIcon()}</span>
        )}
        <h2 className="modal-header__title">{title}</h2>
      </div>
      <Button
        variant="tertiary"
        size="large"
        onClick={onClose}
        ariaLabel="Close"
        leftIcon={<CloseIcon />}
      />
    </header>
  );
};

ModalHeader.displayName = 'Modal.Header';
Modal.Header = ModalHeader;

const ModalBody: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="modal-body">{children}</div>
);

ModalBody.displayName = 'Modal.Body';
Modal.Body = ModalBody;

const ModalFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <footer className="modal-footer">{children}</footer>
);

ModalFooter.displayName = 'Modal.Footer';
Modal.Footer = ModalFooter;
