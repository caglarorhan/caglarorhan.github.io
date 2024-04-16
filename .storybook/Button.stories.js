
// src/stories/Button.stories.js
import React from 'react';
import Button from '../src/components/ui/buttons/Button';

export default {
    title: 'Example/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Primary Button',
    onClick: () => {console.log('Button Primary Clicked!')},
};

export const Secondary = Template.bind({});
Secondary.args = {
    primary: false,
    children: 'Secondary Button',
    onClick: () => {console.log('Button Secondary Clicked!')},
};
