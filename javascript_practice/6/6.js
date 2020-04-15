// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function isLeapYear(year) {
  if (year % 4 !== 0) {
    return false;
  } else if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

isLeapYear(1700) //?