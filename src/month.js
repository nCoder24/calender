class Month {
  #name;
  #startDay;
  #totalDays

  constructor(name, startDay, totalDays) {
    this.#name = name;
    this.#startDay = startDay;
    this.#totalDays = totalDays;
  }

  get weeks() {
    const dates = [
      ...new Array(this.#startDay).fill(undefined),
      ...new Array(this.#totalDays).fill(0).map(function(_, index) { return (index + 1) }),
      ...new Array(35 - this.#totalDays).fill(undefined)
    ];

    const weeks = [];

    for(let week = 1; week <= 5; week += 1) {
      const weekEnd = week * 7;
      weeks.push(dates.slice(weekEnd - 7, weekEnd));
    }

    return weeks;
  }

  toString() {
    const heading = this.#name + "\n";
    const days = "Su Mo Tu We Th Fr Sa" + "\n";
    
    const datesInString = this.weeks.map(function(weak) {
      return weak.map(function(day) {
        return (day || "").toString().padStart(2)}).join(" ");
    }).join("\n");

    return heading + days + datesInString;
  }
}

exports.Month = Month;