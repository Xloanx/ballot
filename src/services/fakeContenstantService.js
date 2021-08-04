import * as groupsAPI from "./fakePositionService";

const contestants = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Seriki Abdul-Lateef",
    group: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
    totalVotes: 6
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Adedimeji Elias",
    group: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
    totalVotes: 12
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Bakare Oluwaseun",
    group: { _id: "5b21ca3eeb7f6fbccd471828", name: "Financial Secretary" },
    totalVotes: 10
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Chika Ikechukwu",
    group: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
    totalVotes: 30
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Excel Anyanwu",
    group: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
    totalVotes: 3
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Awwal Mohammed",
    group: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
    totalVotes: 9
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Segun Olatunji",
    group: { _id: "5b21ca3eeb7f6fbccd471820", name: "Treasurer" },
    totalVotes: 24
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Olumide Akinbobola",
    group: { _id: "5b21ca3eeb7f6fbccd471820", name: "Treasurer" },
    totalVotes: 6
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Fred Asemota",
    group: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
    totalVotes: 18
  }
];

export function getContestants() {
  return contestants;
}

export function getContestant(id) {
  return contestants.find(m => m._id === id);
}
/*
export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
*/