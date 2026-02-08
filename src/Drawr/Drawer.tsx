import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '../icons/CloseIcon.svg';
import { Button } from '../Button/Button';
import './Drawer.scss';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Drawer = ({ isOpen, onClose, title, children }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      drawerRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="drawer-overlay" onClick={onClose}>
      <div
        ref={drawerRef}
        className="drawer-container"
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="drawer-header">
          <h2 className="drawer-header__title">{title}</h2>
          <Button
            variant="tertiary"
            onClick={onClose}
            leftIcon={<CloseIcon />}
            ariaLabel="Close drawer"
          />
        </header>
        <div className="drawer-body">{children}</div>
      </div>
    </div>,
    document.body,
  );
};
