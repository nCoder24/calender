const { chunk, range } = require("../lib/array-utils");
const { monthName, shortFrom } = require("../lib/calendar-utils");

class MonthCalendar {
  #month;
  #year;

  constructor(month, year) {
    this.#month = month;
    this.#year = year;
  }

  get weeks() {
    const lastDate = new Date(this.#year, this.#month + 1, 0).getDate();
    const startDay = new Date(this.#year, this.#month, 1).getDay();

    const addPadding = function(date) {
      return date.toString().padStart(2);
    }

    const fillDays = function (dates, offset) {
      const remainingDaysInLastWeek = 7 - (dates.length + offset) % 7;
      return [
        ...new Array(offset).fill(""),
        ...dates,
        ...new Array(remainingDaysInLastWeek).fill(""),
      ];
    };

    const dates = range(1, lastDate);
    const wholeMonth = fillDays(dates, startDay).map(addPadding);

    return chunk(7, wholeMonth, 0);
  }

  toString() {
    const header =
      `${monthName(this.#month)} ${this.#year}`.padEnd(20) +
      "\n" +
      range(0, 6).map(shortFrom).join(" ") +
      "\n";

    const weeksInString = this.weeks.map(function (week) {
      return week.join(" ");
    });

    return header + weeksInString.join("\n");
  }
}

exports.MonthCalendar = MonthCalendar;
