import { render, screen } from '@testing-library/react';

import App from './App';

describe('App component',()=>{
  it('has a container div', async () => {
    // Arrange
    render(<App/>);

    // Act
    const element = screen.getByTestId('container');

    // Assert
    expect(element.className).toBe("container")
  });
});
