// import { render, screen } from "@testing-library/react";
// import App from "../App";

describe("simple test", () => {
  it("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4);
  });

  it("2 - 1 = 1", () => {
    expect(2 - 1).toBe(1);
  });
  // test를 실패하는 코드가 있다면 실패
  // vercel은 그냥 배포된다.
  //   it("7 + 6 = 13", () => {
  //     expect(7 + 6).toBe(10);
  //   })
});
