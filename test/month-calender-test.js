const { describe, it } = require("node:test");
const assert = require("assert");
const { MonthCalender } = require("../src/month-calender.js");

describe("weeks", function () {
  it("should give the weeks of a month", function () {
    const month = new MonthCalender("January", 0, 2023);
    const expectedWeeks = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined, undefined]
    ];

    assert.deepStrictEqual(month.weeks, expectedWeeks);
  });
});
