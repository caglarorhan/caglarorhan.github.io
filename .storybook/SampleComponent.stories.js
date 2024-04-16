// src/stories/SampleComponent.stories.js
import React from 'react';
import MyComponent from '../src/components/SampleComponent';

export default {
    title: 'SampleComponent',
    component: MyComponent,
};

const Template = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Sample Component',
};
