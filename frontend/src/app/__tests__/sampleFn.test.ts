// 関数テストサンプル

import { describe, expect, test } from "vitest";

function sum(a: number, b: number): number {
  return a + b;
}

describe("sampleFn", () => {
  test("1 + 2 = 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
