import * as groupsAPI from "./fakePositionService";

const contestants = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Seriki Abdul-Lateef",
    group: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
    totalVotes: 6,
    picture: {
      large: "https://randomuser.me/api/portraits/women/34.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg"
    }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Adedimeji Elias",
    group: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
    totalVotes: 12,
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/66.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
  }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Bakare Oluwaseun",
    group: { _id: "5b21ca3eeb7f6fbccd471828", name: "Financial Secretary" },
    totalVotes: 10,
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/58.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
  }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Chika Ikechukwu",
    group: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
    totalVotes: 30,
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/33.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
  }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Excel Anyanwu",
    group: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
    totalVotes: 3,
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/84.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
  }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Awwal Mohammed",
    group: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
    totalVotes: 9,
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/95.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
  }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Segun Olatunji",
    group: { _id: "5b21ca3eeb7f6fbccd471820", name: "Treasurer" },
    totalVotes: 24,
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/27.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
  }
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "Olumide Akinbobola",
    group: { _id: "5b21ca3eeb7f6fbccd471820", name: "Treasurer" },
    totalVotes: 6,
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/60.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
  }
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Fred Asemota",
    group: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
    totalVotes: 18,
    picture: {
      large: "https://randomuser.me/api/portraits/men/81.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/81.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/81.jpg"
  }
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