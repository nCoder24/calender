const { MonthCalender } = require("./month-calender");
const { chunk, map } = require("../lib/utils");

class YearCalender {
  #year;

  constructor(year) {
    this.#year = year;
  }

  get monthCalenders() {
    const monthCals = [];

    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      monthCals.push(new MonthCalender(monthIndex, this.#year));
    }

    return monthCals;
  }

  toString() {
    const monthCalsInString = this.monthCalenders.map(function (monthCal) {
      return monthCal.toString().split("\n");
    });

    const monthsByRow = chunk(3, monthCalsInString, 0);

    const rows = monthsByRow.flatMap(function (monthsInRow) {
      return map(function (...lines) {
        return lines.join("  ");
      }, ...monthsInRow);
    });

    return rows.join("\n");
  }
}

exports.YearCalender = YearCalender;
