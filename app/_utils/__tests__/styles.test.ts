import { cn, cnMerge } from "../styles.utils";

describe("cn", () => {
  it("should return conflicting classes", () => {
    const classNames = cn("p-0", "p-1");
    expect(classNames).toBe("p-0 p-1");
  });
});

describe("cnMerge", () => {
  it("should not return conflicting classes", () => {
    const classNames = cnMerge("p-0 p-1");
    expect(classNames).toBe("p-1");
  });

  it("should return the last conflicting class", () => {
    const classNames = cnMerge("p-0 p-1 p-6", "p-9");
    expect(classNames).toBe("p-9");
  });
});
