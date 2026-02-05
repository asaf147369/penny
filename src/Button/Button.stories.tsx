import React from 'react';
import { Button } from './Button';
import AddIcon from '../icons/AddIcon.svg';

export default {
  title: 'Design System/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'tertiary', 'naked'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    active: {
      control: 'boolean',
    },
  },
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'New payment',
  },
};

export const PrimaryWithIcon = {
  args: {
    variant: 'primary',
    children: 'New payment',
    leftIcon: <AddIcon />,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
};

export const DangerWithIcon = {
  args: {
    variant: 'danger',
    children: 'Delete',
    leftIcon: <AddIcon />,
  },
};

export const IconOnly = {
  args: {
    variant: 'primary',
    leftIcon: <AddIcon />,
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary',
  },
};

export const TertiaryWithIcon = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary',
    leftIcon: <AddIcon />,
  },
};

export const WithTwoIcons = {
  args: {
    variant: 'primary',
    children: 'Next',
    leftIcon: <AddIcon />,
    rightIcon: <AddIcon />,
  },
};

export const Naked = {
  args: {
    variant: 'naked',
    children: 'Pay',
  },
};

export const Sizes = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary" size="small">
          Small
        </Button>
        <Button variant="primary" size="small" leftIcon={<AddIcon />} />
        <Button variant="primary" size="small" leftIcon={<AddIcon />}>
          small with icon
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary" size="medium">
          Medium
        </Button>
        <Button variant="primary" size="medium" leftIcon={<AddIcon />} />
        <Button variant="primary" size="medium" leftIcon={<AddIcon />}>
          medium with icon
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary" size="large">
          Large
        </Button>
        <Button variant="primary" size="large" leftIcon={<AddIcon />} />
        <Button variant="primary" size="large" leftIcon={<AddIcon />}>
          large with icon
        </Button>
      </div>
    </div>
  ),
};
