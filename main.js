const { MonthCalender } = require("./src/month-calender.js");
const { YearCalender } = require("./src/year-calender.js");

const generateCalender = function() {
  const [year, month] = arguments;

  switch(arguments.length) {
    case 0:
      const today = new Date();
      const presentMonth = today.getMonth();
      const presentYear = today.getFullYear();

      return new MonthCalender(presentMonth, presentYear)

    case 1:
      return new YearCalender(+year);

    case 2:
      return new MonthCalender(+month - 1, +year);
  }

}

const main = function () {
  const calender = generateCalender(...process.argv.slice(2));
  console.log(calender.toString());
};

main();