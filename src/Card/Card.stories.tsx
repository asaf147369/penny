import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card } from './Card';
import { Button } from '../Button/Button';
import InfoIcon from '../icons/InfoIcon.svg';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info'],
    },
    onClick: { action: 'clicked' },
  },
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const PaymentsOverview: Story = {
  render: () => (
    <Card>
      <Card.Header>Payments overview</Card.Header>
      <Card.Body>
        <div className="card-body__row">
          <div className="card-body__item">
            <strong>Open balance:</strong>
            <span>$17,945.00</span>
          </div>
          <div className="card-body__item">
            <strong>Scheduled:</strong>
            <span>$466.00</span>
          </div>
          <div className="card-body__item">
            <strong>Paid:</strong>
            <span>$500.00</span>
          </div>
        </div>
      </Card.Body>
    </Card>
  ),
};

export const SummaryCard: Story = {
  render: () => (
    <Card>
      <Card.Body>
        <div className="card-body__summary">
          <p className="card-body__summary-label">Open balance</p>
          <p className="card-body__summary-value">$17,945.00</p>
          <p className="card-body__summary-meta">
            11 bills{' '}
            <a href="#" onClick={(e) => e.preventDefault()}>
              View
            </a>
          </p>
        </div>
      </Card.Body>
    </Card>
  ),
};

export const InfoCardWithIcon: Story = {
  render: () => (
    <Card variant="info" size="small">
      <Card.Header icon={<InfoIcon />}>Title</Card.Header>
      <Card.Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </Card.Body>
    </Card>
  ),
};

export const ActionCardWithButton: Story = {
  render: () => (
    <Card>
      <Card.Header>Request delivery details</Card.Header>
      <Card.Body>
        <div style={{ display: 'flex', gap: '16px' }}>
          <p>We&apos;ll email your vendor to set their delivery method.</p>
          <Button label="Send request" variant="primary" onClick={fn()} />
        </div>
      </Card.Body>
    </Card>
  ),
};

export const Clickable: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <Card onClick={() => alert('Card clicked!')}>
        <Card.Header>Clickable Card</Card.Header>
        <Card.Body>
          <p>
            This card is clickable. Click anywhere on the card or press
            Enter/Space when focused.
          </p>
        </Card.Body>
      </Card>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Card size="small">
        <Card.Header>Small Card</Card.Header>
        <Card.Body>
          <p>This card is Small</p>
        </Card.Body>
      </Card>
      <Card size="medium">
        <Card.Header>Medium Card</Card.Header>
        <Card.Body>
          <p>This card is Medium</p>
        </Card.Body>
      </Card>
      <Card size="large">
        <Card.Header>Large Card</Card.Header>
        <Card.Body>
          <p>This card is Large</p>
        </Card.Body>
      </Card>
    </div>
  ),
};
