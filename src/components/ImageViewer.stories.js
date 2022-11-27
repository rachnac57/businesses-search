import React from 'react';

import ImageViewer from './ImageViewer';

export default {
  title: 'Example/Rating',
  component: ImageViewer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <ImageViewer {...args} />;

export const GoogleImage = Template.bind({});
GoogleImage.args = {
    image: 'https://google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
};

export const IguanaImage = Template.bind({});
IguanaImage.args = {
    component: "img",
    height: "140",
    alt: "green iguana",
    image: "https://media.istockphoto.com/id/176125158/photo/i…20&c=qvlPIoPp-mw6T1lJDMUjOL-xvyMnvXIAO2fI_5y8-fc="
};
