class MonthCalender {
  #name;
  #number;
  #year;

  constructor(name, number, year) {
    this.#name = name;
    this.#number = number;
    this.#year = year;
  }

  get weeks() {
    const date = new Date(this.#year, this.#number, 1);
    const dates = new Array(date.getDay()).fill(undefined);

    while(date.getMonth() === this.#number) {
      dates.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }

    const remainingDays = 7 - dates.length % 7;
    dates.push(...new Array(remainingDays).fill(undefined));

    const weeks = [];

    for(let week = 1; week <= dates.length / 7; week += 1) {
      const weekEnd = week * 7;
      weeks.push(dates.slice(weekEnd - 7, weekEnd));
    }

    return weeks;
  }

  toString() {
    const heading = `${this.#name} ${this.#year}\n`;
    const days = "Su Mo Tu We Th Fr Sa" + "\n";
    
    const datesInString = this.weeks.map(function(week) {
      return week.map(function(day) {
        return (day || "").toString().padStart(2)
      }).join(" ");
    }).join("\n");

    return heading + days + datesInString;
  }
}

exports.MonthCalender = MonthCalender;