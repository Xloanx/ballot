import * as positionsAPI from "./fakePositionService";

const contestants = [{
        _id: "5b21ca3eeb7f6fbccd471815",
        totalVotes: 6,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471816",
        totalVotes: 12,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471817",
        totalVotes: 10,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471819",
        totalVotes: 30,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181a",
        totalVotes: 3,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181b",
        totalVotes: 9,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181e",
        totalVotes: 24,
    },
    {
        _id: "5b21ca3eeb7f6fbccd47181f",
        totalVotes: 6,
    },
    {
        _id: "5b21ca3eeb7f6fbccd471821",
        totalVotes: 18,
    }
];

export function getContestantsVotes() {
    return contestants;
}

export function getContestantVote(id) {
    const contestant = contestants.find(m => m._id === id);
    const cid = contestant._id;
    const ctv = contestant.totalVotes;
    return {cid, ctv};
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