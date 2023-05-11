const { MonthCalender } = require("./src/month-calender.js");
const { YearCalender } = require("./src/year-calender.js");

const main = function () {
  if(process.argv.length === 4) {
    const monthIndex = +process.argv[2];
    const year = +process.argv[3];

    const monthCalender = new MonthCalender(monthIndex - 1, year);
    console.log(monthCalender.toString());
    
    return;
  }

  const year = +process.argv[2];

  const yearCalender = new YearCalender(year);
  console.log(yearCalender.toString());
};

main();