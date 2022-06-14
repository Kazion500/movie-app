import Button from "@/components/atoms/Button";
import { describe, expect, it ,vi} from "vitest";

describe("#button", () => {
  it("should render a button", () => {
    const button = Button({
      title: "button",
      onClick: () => {},
    });
    expect(button?.type).toBe("button");
    expect(button?.props.children).toBe("button");
    expect(button).toMatchSnapshot();
  });

  it("should be disabled", () => {
    const button = Button({
      title: "button",
      onClick: () => {},
      disabled: true,
    });
    expect(button?.props.disabled).toBe(true);
  });

  it("should be clickable", () => {
    const onClick = vi.fn();
    const button = Button({
      title: "button",
      onClick,
    });
    button?.props.onClick();
    expect(onClick).toHaveBeenCalled();
  })
});
