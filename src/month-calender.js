const { chunk, range } = require("../lib/utils");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

class MonthCalender {
  #month;
  #year;

  constructor(month, year) {
    this.#month = month;
    this.#year = year;
  }

  get weeks() {
    const lastDate = new Date(this.#year, this.#month + 1, 0).getDate();
    const startDay = new Date(this.#year, this.#month, 1).getDay();

    const fillWeeks = function (dates, offset) {
      return [
        ...new Array(offset).fill("  "),
        ...dates,
        ...new Array(42 - dates.length - offset).fill("  "),
      ];
    };

    const dates = range(1, lastDate).map(function (date) {
      return date.toString().padStart(2);
    });

    return chunk(7, fillWeeks(dates, startDay), 0);
  }

  toString() {
    const hedder =
      `${months[this.#month]} ${this.#year}`.padEnd(20) +
      "\n" +
      "Su Mo Tu We Th Fr Sa" +
      "\n";

    const weeksInStrng = this.weeks.map(function (week) {
      return week.join(" ");
    });

    return hedder + weeksInStrng.join("\n") + "\n";
  }
}

exports.MonthCalender = MonthCalender;
