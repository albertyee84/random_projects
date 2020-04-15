// 3. Write a JavaScript program to get the current date.Go to the editor
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy

function getCurrentDate() {
  let date = new Date();
  let day = date.getDate(); //?
  let month = date.getMonth(); //?
  let year = date.getFullYear(); //?

  day = day < 10 ? "0" + day : day; //?
  month = month < 10 ? "0" + month : month; //?
  console.log(`${month}-${day}-${year}`);
  console.log(`${day}-${month}-${year}`);
  console.log(`${month}/${day}/${year}`);
  console.log(`${day}/${month}/${year}`);
}

getCurrentDate();
