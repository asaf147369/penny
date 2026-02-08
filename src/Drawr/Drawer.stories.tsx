import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Drawer } from './Drawer';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import InfoIcon from '../icons/InfoIcon.svg';

const meta: Meta<typeof Drawer> = {
  title: 'Design System/Drawer',
  component: Drawer,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: function DefaultDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    return (
      <>
        <Button
          label="Open drawer"
          variant="primary"
          onClick={() => setIsOpen(true)}
        />
        <Drawer isOpen={isOpen} onClose={handleClose} title="Vendor details">
          <Card>
            <Card.Header>Payments overview</Card.Header>
            <Card.Body>
              <div className="payments-grid">
                <p>
                  <strong>Open balance:</strong> $17,945.00
                </p>
                <p>
                  <strong>Scheduled:</strong> $466.00
                </p>
                <p>
                  <strong>Paid:</strong> $500.00
                </p>
              </div>
            </Card.Body>
          </Card>
          <Card variant="info" size="small">
            <Card.Header icon={<InfoIcon />}>Delivery methods</Card.Header>
            <Card.Body>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Card.Body>
          </Card>
        </Drawer>
      </>
    );
  },
};

export const Open: Story = {
  render: function OpenDrawer() {
    const handleClose = fn();
    return (
      <Drawer isOpen={true} onClose={handleClose} title="Vendor details">
        <Card>
          <Card.Header>Payments overview</Card.Header>
          <Card.Body>
            <div className="payments-grid">
              <p>
                <strong>Open balance:</strong> $17,945.00
              </p>
              <p>
                <strong>Scheduled:</strong> $466.00
              </p>
              <p>
                <strong>Paid:</strong> $500.00
              </p>
            </div>
          </Card.Body>
        </Card>
        <Card variant="info" size="small">
          <Card.Header icon={<InfoIcon />}>Delivery methods</Card.Header>
          <Card.Body>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Card.Body>
        </Card>
      </Drawer>
    );
  },
};
