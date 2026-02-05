import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Design System/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
  args: {
    onClose: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    size: 'medium',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header title="Modal title" onClose={args.onClose} />
      <Modal.Body>
        <p>
          This is the modal content. You can put any content here. Click outside
          or press Escape to close.
        </p>
      </Modal.Body>
    </Modal>
  ),
};

export const NoHeader: Story = {
  args: {
    isOpen: true,
    size: 'medium',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Body>
        <p>
          Modal without a header. Only the body is shown. Click outside to
          close.
        </p>
      </Modal.Body>
    </Modal>
  ),
};

export const WithFooter: Story = {
  args: {
    isOpen: true,
    size: 'medium',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header title="Confirm action" onClose={args.onClose} />
      <Modal.Body>
        <p>Are you sure you want to proceed? This action cannot be undone.</p>
      </Modal.Body>
      <Modal.Footer>
        <div
          style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}
        >
          <Button variant="tertiary" label="Cancel" onClick={fn()} />
          <Button variant="primary" label="Confirm" onClick={fn()} />
        </div>
      </Modal.Footer>
    </Modal>
  ),
};

export const Small: Story = {
  args: {
    isOpen: true,
    size: 'small',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header title="Small modal" onClose={args.onClose} />
      <Modal.Body>
        <p>This modal uses the small size.</p>
      </Modal.Body>
    </Modal>
  ),
};

export const Medium: Story = {
  args: {
    isOpen: true,
    size: 'medium',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header title="Medium modal" onClose={args.onClose} />
      <Modal.Body>
        <p>
          This is the default medium size. It fits most common use cases for
          dialogs and forms.
        </p>
      </Modal.Body>
    </Modal>
  ),
};

export const Large: Story = {
  args: {
    isOpen: true,
    size: 'large',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header title="Large modal" onClose={args.onClose} />
      <Modal.Body>
        <p>
          This modal uses the large size for more content. You can display
          longer text, forms with many fields, or tables without feeling
          cramped.
        </p>
      </Modal.Body>
    </Modal>
  ),
};

export const HeaderDanger: Story = {
  args: {
    isOpen: true,
    size: 'medium',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header
        title="Delete item"
        onClose={args.onClose}
        variant="danger"
      />
      <Modal.Body>
        <p>This header uses the danger variant for destructive actions.</p>
      </Modal.Body>
    </Modal>
  ),
};

export const WithFormContent: Story = {
  args: {
    isOpen: true,
    size: 'medium',
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Header title="Add payment" onClose={args.onClose} />
      <Modal.Body>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div>
            <label
              htmlFor="name"
              style={{ display: 'block', marginBottom: '4px' }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter name"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              style={{ display: 'block', marginBottom: '4px' }}
            >
              Amount
            </label>
            <input
              id="amount"
              type="number"
              placeholder="0.00"
              style={{
                width: '100%',
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <div
          style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}
        >
          <Button variant="tertiary" label="Cancel" onClick={fn()} />
          <Button variant="primary" label="Save" onClick={fn()} />
        </div>
      </Modal.Footer>
    </Modal>
  ),
};

export const OpenWithButton: Story = {
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button
          variant="primary"
          label="Open modal"
          onClick={() => setIsOpen(true)}
        />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="medium">
          <Modal.Header
            title="Opened by button"
            onClose={() => setIsOpen(false)}
          />
          <Modal.Body>
            <p>
              This modal was opened by clicking the button. Close it with the X,
              by clicking outside, or by pressing Escape.
            </p>
          </Modal.Body>
        </Modal>
      </>
    );
  },
};
