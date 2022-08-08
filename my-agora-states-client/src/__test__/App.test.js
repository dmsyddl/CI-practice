import {render,screen} from '@testing-library/react';
import App from '../App';

it('My Agora States', () => {
    render(<App />);
    const h1Element = screen.getByText(/My Agora States/i);
    expect(h1Element).toBeInTheDocument();
})