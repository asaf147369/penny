import React from 'react';
import { Button } from './Button';
import AddIcon from '../icons/AddIcon.svg';
import AddIconBlack from '../icons/AddIconBlack.svg';

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
    label: 'New payment',
  },
};

export const PrimaryWithIcon = {
  args: {
    variant: 'primary',
    label: 'New payment',
    leftIcon: <AddIcon />,
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    label: 'Delete',
  },
};

export const DangerWithIcon = {
  args: {
    variant: 'danger',
    label: 'Delete',
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
    label: 'Disabled',
    disabled: true,
  },
};

export const Tertiary = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary',
  },
};

export const TertiaryWithIcon = {
  args: {
    variant: 'tertiary',
    label: 'Tertiary',
    leftIcon: <AddIconBlack />,
  },
};

export const WithTwoIcons = {
  args: {
    variant: 'primary',
    label: 'Next',
    leftIcon: <AddIcon />,
    rightIcon: <AddIcon />,
  },
};

export const Naked = {
  args: {
    variant: 'naked',
    label: 'Pay',
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
        <Button variant="primary" size="small" label="Small" />
        <Button variant="primary" size="small" leftIcon={<AddIcon />} />
        <Button
          variant="primary"
          size="small"
          leftIcon={<AddIcon />}
          label="Small with icon"
        />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary" size="medium" label="Medium" />
        <Button variant="primary" size="medium" leftIcon={<AddIcon />} />
        <Button
          variant="primary"
          size="medium"
          leftIcon={<AddIcon />}
          label="Medium with icon"
        />
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Button variant="primary" size="large" label="Large" />
        <Button variant="primary" size="large" leftIcon={<AddIcon />} />
        <Button
          variant="primary"
          size="large"
          leftIcon={<AddIcon />}
          label="Large with icon"
        />
      </div>
    </div>
  ),
};
