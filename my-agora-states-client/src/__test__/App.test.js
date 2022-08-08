import { render, screen } from "@testing-library/react";
import App from "../App";

it("CI practice", () => {
  render(<App />);
  const h1Element = screen.getByText(/My Agora States/i);
  expect(h1Element).toBeInTheDocument();
});
