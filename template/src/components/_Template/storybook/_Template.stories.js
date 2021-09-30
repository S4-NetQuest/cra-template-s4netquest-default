/* eslint-disable no-console */
import React from 'react';
import ComponentTemplate from '../index';

const storyConfig = {
  title: 'Components/_Template',
  component: ComponentTemplate,
};

// wrap template in div if additional styling is needed for the storybook display (or use decorators)
const Template = (args) => <ComponentTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  exampleRequiredProp: "I'm the required prop string",
  exampleOptionalProp: "I'm the optional prop string",
};

export default storyConfig;
