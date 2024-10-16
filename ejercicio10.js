const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let prom = 0;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    prom += number/numberList.length;
  }
  console.log(prom);
}

average(numbers);