import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { describe, expect, it } from "vitest";

describe("#loadingSpinner", () => {
  it("should render a spinner", () => {
    const loadingSpinner = LoadingSpinner();
    expect(loadingSpinner?.type).toBe("div");
    expect(loadingSpinner).toMatchSnapshot();
  });

  it('should have className "spinner-container"', () => {
    const loadingSpinner = LoadingSpinner();
    expect(loadingSpinner?.props.className).toEqual("spinner-container");
  });

  it('should have children with className "loading-spinner"', () => {
    const loadingSpinner = LoadingSpinner();
    expect(loadingSpinner?.props.children.props.className).toEqual(
      "loading-spinner"
    );
  });
});
