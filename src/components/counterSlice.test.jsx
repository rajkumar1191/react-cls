import reducer, { increment, decrement, incrementByAmount } from "./counterSlice";

describe("counter slice", () => {
  test("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({ value: 0 });
  });

  test("increment should increase value", () => {
    const state = reducer({ value: 0 }, increment());
    expect(state.value).toBe(1);
  });

  test("decrement should decrease value", () => {
    const state = reducer({ value: 3 }, decrement());
    expect(state.value).toBe(2);
  });

  test("incrementByAmount should add payload", () => {
    const state = reducer({ value: 5 }, incrementByAmount(10));
    expect(state.value).toBe(15);
  });
});
