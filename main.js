const { MonthCalendar } = require("./src/month-calendar.js");
const { YearCalendar } = require("./src/year-calendar.js");

const generateCalender = function() {
  const [year, month] = arguments;

  switch(arguments.length) {
    case 0:
      const today = new Date();
      const presentMonth = today.getMonth();
      const presentYear = today.getFullYear();

      return new MonthCalendar(presentMonth, presentYear)

    case 1:
      return new YearCalendar(+year);

    case 2:
      return new MonthCalendar(+month - 1, +year);
  }

}

const main = function () {
  const calender = generateCalender(...process.argv.slice(2));
  console.log(calender.toString());
};

main();