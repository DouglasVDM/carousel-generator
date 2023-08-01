import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App component',()=>{
  it('should say enter your text here', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<App/>);

    // Act
    await user.type(screen.getByLabelText('input'),'Enter your text here');

    // Assert
    expect(screen.getByTestId("input")).toHaveTextContent('Enter your text here')
  });
});
