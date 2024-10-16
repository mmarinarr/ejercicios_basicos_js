const mixedElements = [
  6, 
  1, 
  'Marvel', 
  1, 
  'hamburguesa', 
  '10', 
  'Prometeo',
  8, 
  'Hola mundo'
];

function average(list) {
  let prom = 0;
  for (const item of list) {
    if(typeof item === "string") {
      prom += item.length;
    }
    else{
      prom += item;
    }
  }
  const promedio = prom / list.length;
  console.log(promedio);
}

average(mixedElements);