import * as positionsAPI from "./fakePositionService";

const contestants = [{
        _id: "5b21ca3eeb7f6fbccd471815",
        name: "Seriki Abdul-Lateef",
        position: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
        picture: {
            large: "https://randomuser.me/api/portraits/women/34.jpg",
            medium: "https://randomuser.me/api/portraits/med/women/34.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/women/34.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        name: "Adedimeji Elias",
        position: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/66.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/66.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        name: "Bakare Oluwaseun",
        position: { _id: "5b21ca3eeb7f6fbccd471828", name: "Financial Secretary" },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/58.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        name: "Chika Ikechukwu",
        position: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/33.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        name: "Excel Anyanwu",
        position: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/84.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        name: "Awwal Mohammed",
        position: { _id: "5b21ca3eeb7f6fbccd471814", name: "General Secretary" },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/95.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/95.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/95.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        name: "Segun Olatunji",
        position: { _id: "5b21ca3eeb7f6fbccd471820", name: "Treasurer" },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/27.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        name: "Olumide Akinbobola",
        position: { _id: "5b21ca3eeb7f6fbccd471820", name: "Treasurer" },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/60.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/60.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
        }
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        name: "Fred Asemota",
        position: { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
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

export function saveContestant(contestant) {
    let contestantInDb = contestant.find(m => m._id === contestant._id) || {};
    contestantInDb.name = contestant.name;
    contestantInDb.position = positionsAPI.positions.find(g => g._id === contestant.positionId);
    contestantInDb.picture.thumbnail = contestant.imageUpload;

    if (!contestantInDb._id) {
        contestantInDb._id = Date.now();
        contestants.push(contestantInDb);
    }

    return contestantInDb;
}
/*

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
*/