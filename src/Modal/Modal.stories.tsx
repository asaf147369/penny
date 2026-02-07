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
      <Button variant="primary" label={label} onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)}>
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
            <p style={{ margin: 0 }}>Click outside or press Escape to close.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="tertiary" label="Cancel" onClick={onClose} />
            <Button variant="primary" label="Confirm" onClick={fn()} />
          </Modal.Footer>
        </>
      )}
    </LaunchModal>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <LaunchModal label="Open (no header)">
      {(onClose) => (
        <>
          <Modal.Body>
            <p style={{ margin: 0 }}>No header. Click outside to close.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="tertiary" label="Cancel" onClick={onClose} />
            <Button variant="primary" label="Delete" onClick={fn()} />
          </Modal.Footer>
        </>
      )}
    </LaunchModal>
  ),
};

export const NoFooter: Story = {
  render: () => (
    <LaunchModal label="Confirm action">
      {(onClose) => (
        <>
          <Modal.Header title="Confirm action" onClose={onClose} />
          <Modal.Body>
            <p style={{ margin: 0 }}>Are you sure? This cannot be undone.</p>
          </Modal.Body>
        </>
      )}
    </LaunchModal>
  ),
};

export const NoHeaderNoFooter: Story = {
  render: () => (
    <LaunchModal label="Open (no header and no footer)">
      {() => (
        <Modal.Body>
          <p style={{ margin: 0 }}>
            No header and no footer. Click outside to close.
          </p>
        </Modal.Body>
      )}
    </LaunchModal>
  ),
};

export const Danger: Story = {
  render: () => (
    <LaunchModal label="Open danger modal">
      {(onClose) => (
        <>
          <Modal.Header
            title="Modal header"
            onClose={onClose}
            variant="danger"
          />
          <Modal.Body>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing Nullam a arcu
              est. Nulla facilisi. Donec nec sem aliquet, laoreet nisi et,
              bibendum tellus. Aenean sed nibh lorem.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="tertiary" label="Cancel" onClick={onClose} />
            <Button variant="danger" label="Delete" onClick={fn()} />
          </Modal.Footer>
        </>
      )}
    </LaunchModal>
  ),
};

export const LongContent: Story = {
  render: () => (
    <LaunchModal label="Open scrollable content modal">
      {(onClose) => (
        <>
          <Modal.Header title="Scrollable content" onClose={onClose} />
          <Modal.Body>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="tertiary" label="Cancel" onClick={onClose} />
            <Button variant="primary" label="Confirm" onClick={fn()} />
          </Modal.Footer>
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
            <Button variant="tertiary" label="Cancel" onClick={onClose} />
            <Button variant="primary" label="Save" onClick={fn()} />
          </Modal.Footer>
        </>
      )}
    </LaunchModal>
  ),
};
