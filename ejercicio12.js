const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    const noDuplicates = [];
    for (const item of list) {
      if (!noDuplicates.includes(item)){
        noDuplicates.push(item);
      }
    }
    console.log(noDuplicates)
  }

  removeDuplicates(duplicates);