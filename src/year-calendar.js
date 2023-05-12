const { MonthCalendar } = require("./month-calendar");
const { chunk, map } = require("../lib/array-utils");

class YearCalendar {
  #year;

  constructor(year) {
    this.#year = year;
  }

  get monthCalendars() {
    const monthCals = [];

    for (let month = 0; month < 12; month++) {
      monthCals.push(new MonthCalendar(month, this.#year));
    }

    return monthCalendars;
  }

  toString() {
    const splitIntoLines = function (monthCalender) {
      return monthCalender.toString().split("\n");
    }

    const joinLines = function (...lines) {
      return lines.join("  ");
    }

    const joinMonths = function (months) {
      return map(joinLines, ...months.map(splitIntoLines)).join("\n");
    }
  
    const monthRows = chunk(4, this.monthCalendars, 0).flatMap(joinMonths);

    return monthRows.join("\n\n");
  }
}

exports.YearCalender = YearCalendar;
