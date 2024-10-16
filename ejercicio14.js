const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

function repeatCounter(list) {
  const repeat = {};
  for (const item of list) {
    if (repeat[item]) {
      repeat[item] += 1;
    } 
    else {
      repeat[item] = 1;
    }
  }
  console.log(repeat);
}

repeatCounter(words);