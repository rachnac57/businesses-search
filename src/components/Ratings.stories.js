import React from 'react';

import Ratings from './Ratings';

export default {
  title: 'Example/Rating',
  component: Ratings,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Ratings {...args} />;

export const TwoAndAHalfStars = Template.bind({});
TwoAndAHalfStars.args = {
   ratings: 2.5
};

export const FiveStars = Template.bind({});
FiveStars.args = {
    ratings: 5
};

export const NoStars = Template.bind({});
NoStars.args = {
};
