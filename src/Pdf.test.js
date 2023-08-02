import { render,screen } from "@testing-library/react";

import Pdf from './Pdf';

describe('Pdf component', () => { it("displays 'Enter your text here'", () => {
    render(<Pdf text="input"/>)
    expect(screen.getByTestId("pdf")).toHaveTextContent("Enter your text here");    
}); })

// component will have a single prop named text, that matches the value returned from the service, and will render an element with data-testid="pdf", to match our higher-level tests, with the expected text.