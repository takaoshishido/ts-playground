// カスタムフックテストサンプル

import { renderHook } from "@testing-library/react";
import { act, useCallback, useState } from "react";
import { describe, expect, test } from "vitest";

const useSampleHooks = () => {
  const [num, setNum] = useState(0);
  // someNumに1を足す関数
  const handleIncreaseNum = useCallback(() => {
    setNum((prev) => prev + 1);
  }, []);
  return { num, handleIncreaseNum };
};
describe("useSampleHooks", () => {
  test("handleIncreaseNumを実行するとnumが1増える", () => {
    const { result } = renderHook(() => useSampleHooks());
    expect(result.current.num).toBe(0);
    act(() => {
      result.current.handleIncreaseNum();
    });
    expect(result.current.num).toBe(1);
  });
});
