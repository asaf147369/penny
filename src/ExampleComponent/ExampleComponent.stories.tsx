import { ExampleComponent } from './ExampleComponent';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Example Component',
  component: ExampleComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    content: { control: 'text' },
  },
};

export const Main = {};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/**
 * You can configure different background colors.
 */
export const BackgroundColor = {
  args: {
    backgroundColor: '#b1e2c4',
  },
};
