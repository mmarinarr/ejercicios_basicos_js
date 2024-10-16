const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const noVegan= [];
let fruit = 0;

for (const food of foodSchedule) {
  if (food.isVegan) {
    noVegan.push(food);
  }
  else {
    noVegan.push({ name: fruits[fruit], isVegan: true });
    fruit++;
  }
}

console.log(noVegan)