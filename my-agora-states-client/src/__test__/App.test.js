import {render,screen} from '@testing-library/react';
import App from '../App';

it('My Agora States', () => {
    render(<App />);
    const h1Element = screen.getByText(/test1/i);
    expect(h1Element).toBeInTheDocument();
})