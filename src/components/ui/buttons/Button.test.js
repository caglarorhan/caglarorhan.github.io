import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button and responds to click event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(getByText('Click Me'));
    expect(handleClick).toHaveBeenCalled();
});
