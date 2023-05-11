const { chunk } = require("../lib/utils");

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
  #index;
  #year;

  constructor(index, year) {
    this.#index = index;
    this.#year = year;
  }

  get weeks() {
    const date = new Date(this.#year, this.#index, 1);
    const dates = new Array(date.getDay()).fill();

    while (date.getMonth() === this.#index) {
      dates.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    const maxWeek = 6;
    const remainingDays = maxWeek * 7 - dates.length;
    dates.push(...new Array(remainingDays).fill());

    return chunk(7, dates, 0);
  }

  toString() {
    const heading = `${months[this.#index]} ${this.#year}`.padEnd(20) + "\n";
    const days = "Su Mo Tu We Th Fr Sa" + "\n";

    const datesInString = this.weeks
      .map(function (week) {
        return week
          .map(function (day) {
            return (day || "").toString().padStart(2);
          })
          .join(" ");
      })
      .join("\n");

    return heading + days + datesInString + "\n";
  }
}

exports.MonthCalender = MonthCalender;
