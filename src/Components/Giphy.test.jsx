import { render, fireEvent } from "@testing-library/react";
import Giphy from "./Giphy";

describe("Input Component", () => {
  it("rendered input", () => {
    const { getByTestId } = render(<Giphy image={false} />);
    const input = getByTestId("searchBar");
    expect(input).toBeTruthy();
    fireEvent.change(input, { target: { value: "cow" } });
    expect(input.value).toEqual("cow");
  });
});
