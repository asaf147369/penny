import React from 'react';

export const ExampleComponent = ({
  backgroundColor = '#d9ccff',
  content = 'Hello, Penny!',
}: {
  backgroundColor: string,
  content: string,
}) => {
  return (
    <span
      style={{
        fontFamily: 'sans-serif',
        backgroundColor,
        padding: '12px',
        borderRadius: '4px',
      }}
    >
      {content}
    </span>
  );
};
