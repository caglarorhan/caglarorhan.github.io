// src/stories/Header.stories.js
import React from 'react';
import Header from '../src/components/Header';

export default {
    title: 'Example/Header',
    component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Default Header',
};
