//  The difference in days between two dates : - 

const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);

dayDiff(new Date("2021-10-21"), new Date("2022-02-12"))
 

/*
    ---> Math.abs(date1.getTime() - date2.getTime()) calculates 
         the absolute difference in milliseconds between the two dates.

    ---> Math.ceil(diff / 86400000) divides the difference by the number of milliseconds in a day (86400000) 
        and rounds up the result to get the number of days.
*/