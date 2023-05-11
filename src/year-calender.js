const { MonthCalender } = require("./month-calender");
const { chunk, merge } = require("../lib/utils");

class YearCalender {
  #year;

  constructor(year) {
    this.#year = year;
  }

  get monthCalenders() {
    const monthCalenders = [];

    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
      monthCalenders.push(new MonthCalender(monthIndex, this.#year));
    }

    return monthCalenders;
  }

  toString() {
    const splitIntoLines = function (monthCalender) {
      return monthCalender.toString().split("\n");
    }

    const joinLines = function (...lines) {
      return lines.join("  ");
    }

    const joinMonths = function (months) {
      return merge(joinLines, ...months.map(splitIntoLines)).join("\n");
    }
  
    const monthRows = chunk(4, this.monthCalenders, 0).flatMap(joinMonths);

    return monthRows.join("\n\n");
  }
}

exports.YearCalender = YearCalender;
