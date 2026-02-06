import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Design System/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    onClose: { action: 'closed' },
  },
  args: { onClose: fn() },
};

export default meta;

type Story = StoryObj<typeof Modal>;

function LaunchModal({
  label,
  children,
}: {
  label: string;
  children: (onClose: () => void) => React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="primary"
        label={label}
        onClick={() => setOpen(true)}
        style={{ marginRight: 8, marginBottom: 8 }}
      />
      <Modal isOpen={open} onClose={() => setOpen(false)} size="medium">
        {children(() => setOpen(false))}
      </Modal>
    </>
  );
}

export const Default: Story = {
  render: () => (
    <LaunchModal label="Open modal">
      {(onClose) => (
        <>
          <Modal.Header title="Modal title" onClose={onClose} />
          <Modal.Body>
            <p>Click outside or press Escape to close.</p>
          </Modal.Body>
        </>
      )}
    </LaunchModal>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <LaunchModal label="Open (no header)">
      {() => (
        <Modal.Body>
          <p>No header. Click outside to close.</p>
        </Modal.Body>
      )}
    </LaunchModal>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <LaunchModal label="Confirm action">
      {(onClose) => (
        <>
          <Modal.Header title="Confirm action" onClose={onClose} />
          <Modal.Body>
            <p>Are you sure? This cannot be undone.</p>
          </Modal.Body>
          <Modal.Footer>
            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'flex-end',
              }}
            >
              <Button variant="tertiary" label="Cancel" onClick={onClose} />
              <Button variant="primary" label="Confirm" onClick={fn()} />
            </div>
          </Modal.Footer>
        </>
      )}
    </LaunchModal>
  ),
};

export const HeaderDanger: Story = {
  render: () => (
    <LaunchModal label="Delete item">
      {(onClose) => (
        <>
          <Modal.Header
            title="Delete item"
            onClose={onClose}
            variant="danger"
          />
          <Modal.Body>
            <p>Danger variant for destructive actions.</p>
          </Modal.Body>
        </>
      )}
    </LaunchModal>
  ),
};

export const WithFormContent: Story = {
  render: () => (
    <LaunchModal label="Add payment">
      {(onClose) => (
        <>
          <Modal.Header title="Add payment" onClose={onClose} />
          <Modal.Body>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <div>
                <label
                  htmlFor="modal-name"
                  style={{ display: 'block', marginBottom: 4 }}
                >
                  Name
                </label>
                <input
                  id="modal-name"
                  type="text"
                  placeholder="Enter name"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="modal-amount"
                  style={{ display: 'block', marginBottom: 4 }}
                >
                  Amount
                </label>
                <input
                  id="modal-amount"
                  type="number"
                  placeholder="0.00"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                  }}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'flex-end',
              }}
            >
              <Button variant="tertiary" label="Cancel" onClick={onClose} />
              <Button variant="primary" label="Save" onClick={fn()} />
            </div>
          </Modal.Footer>
        </>
      )}
    </LaunchModal>
  ),
};
