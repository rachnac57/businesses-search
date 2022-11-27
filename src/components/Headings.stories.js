import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Headings from './Headings';

export default {
  title: 'Example/Header',
  component: Headings,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Headings {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
    name: 'Jane Doe',
    icon: <AccessibilityNewIcon />
};

export const Heading2 = Template.bind({});
Heading2.args = {};
