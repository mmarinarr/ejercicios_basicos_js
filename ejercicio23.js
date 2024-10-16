const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

const peliculasP= [];
const peliculasM= [];
const peliculasG= [];


for (const minutes of movies) {
  if (minutes.durationInMinutes < 100) {
    peliculasP.push(minutes);
  }
  else if(minutes.durationInMinutes > 200){
    peliculasG.push(minutes);
  }
  else {
    peliculasM.push(minutes);
  }
}

console.log('Peliculas pequeñas:', peliculasP);
console.log('Peliculas medianas:', peliculasM);
console.log('Peliculas grandes:', peliculasG);