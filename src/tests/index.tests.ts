import { formatStorageNumberToObj } from "../index";

console.log("->", formatStorageNumberToObj(1999));
test("formatStorageNumberToObj方法", () => {
  expect(formatStorageNumberToObj(1048576, 2)).toEqual({
    number: 1,
    unit: "MB",
  });
});

test("formatStorageNumberToObj方法", () => {
  expect(formatStorageNumberToObj(1248576, 2)).toEqual({
    number: 1.19,
    unit: "MB",
  });
});

test("不传第二个参数", () => {
  expect(formatStorageNumberToObj(1999)).toEqual({ number: 2, unit: "KB" });
});
