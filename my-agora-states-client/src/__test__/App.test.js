import { render, screen } from "@testing-library/react";
import App from "../App";

describe("simple test", () => {
  it("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("2 - 1 = 1", () => {
    expect(2 - 1).toBe(1);
  });
});
