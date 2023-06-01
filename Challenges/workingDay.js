//  Query whether a day is a working day

const isWeekday = (date) => date.getDay() % 6 !== 0;

const result = isWeekday(new Date(2022, 03, 11));
console.log(result);  // true (beacuse day is monday)

/* 
    date.getDay() returns the day of the week as a number, where Sunday is 0 and Saturday is 6.
*/
