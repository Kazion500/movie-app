import Footer from "@/components/organisms/Footer";
import { describe, expect, it } from "vitest";

describe("#footer", () => {
  it("should render a footer", () => {
    const footer = Footer();
    expect(footer?.type).toBe("footer");
    expect(footer).toMatchSnapshot();
  });
});
