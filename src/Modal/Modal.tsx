import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button/Button';
import DangerIcon from '../icons/DangerIcon.svg';
import CloseIcon from '../icons/CloseIcon.svg';
import './Modal.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  children: React.ReactNode;
}

export interface ModalHeaderProps {
  title: string;
  onClose: () => void;
  variant?: 'default' | 'danger';
  icon?: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    modalRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) as NodeListOf<HTMLElement>;

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal-container"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
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
        <h2 id="modal-title" className="modal-header__title">
          {title}
        </h2>
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
