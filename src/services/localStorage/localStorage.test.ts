/**
 * @vitest-environment happy-dom
 */
import { save, get } from "@/services/localStorage";
import { describe, it, expect } from "vitest";

describe("#localStorage", () => {
  const key = "key";
  const value = "value";
  it("should save and get", () => {
    save(key, value);
    expect(JSON.parse(get(key) as string)).toEqual(value);
  });
});
