function BeingASunday() {
  let answers = [];
  for (let i = 2014; i <= 2050; i++) {
    let day = new Date(i, 0, 1);
    if (day.getDay() === 0) answers.push(i);
  }
  return answers;
}


BeingASunday() //?