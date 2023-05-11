const { MonthCalender } = require("./src/month-calender.js");

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

const main = function () {
  const monthIndex = +process.argv[2] - 1;
  const year = process.argv[3] || 2023;

  const month = new MonthCalender(months[monthIndex], monthIndex, year);
  console.log(month.toString());
};

main();