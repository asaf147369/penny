import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import CloseIcon from '../icons/CloseIcon.svg';
import { Button } from '../Button/Button';
import './Drawer.scss';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: DrawerProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const onCloseWithAnimation = () => {
    setIsClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      closeTimeoutRef.current = null;
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
      drawerRef.current?.focus();
    }
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={`drawer-overlay ${isClosing ? 'drawer-overlay--closing' : ''}`}
      onClick={onCloseWithAnimation}
    >
      <div
        ref={drawerRef}
        className={`drawer-container ${isClosing ? 'drawer-container--closing' : ''}`}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="drawer-header">
          <h2 className="drawer-header__title">{title}</h2>
          <Button
            variant="tertiary"
            onClick={onCloseWithAnimation}
            leftIcon={<CloseIcon />}
            ariaLabel="Close drawer"
          />
        </header>
        <div className="drawer-body">{children}</div>
        {footer && <footer className="drawer-footer">{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
};
