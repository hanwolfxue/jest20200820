import { generateConfig, generateConfig1 } from "./Demo";
test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test("测试 generateConfig1 函数", () => {
  expect(generateConfig1()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "port": 8080,
      "server": "http: //localhost",
      "time": Any<Date>,
    }
  `
  );
});
