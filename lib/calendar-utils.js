const monthName = function (month) {
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

  return months[month];
};

const shortFrom = function (day) {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return days[day];
};

exports.monthName = monthName;
exports.shortFrom = shortFrom;