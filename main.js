const movies = [
  {name:'Gladiator', ranking:34},
  {name:'Alien', ranking:22},
  {name:'Terminator', ranking:11},
  {name:'The Good, the Bad and the Ugly', ranking:26},
];

const sortedMovies = movies.sort((a,b) => (a.ranking > b.ranking ? 1 : -1));

console.log(sortedMovies);

const totalRanking = movies.reduce((total,movie) => total + movie.ranking,0) / movies.length;

console.log(totalRanking);
