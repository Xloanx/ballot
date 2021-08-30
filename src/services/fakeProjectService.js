const projects = [{
        _id: "5b21ca3projf6fbccd471815",
        name: "inec-nigeria"
    },
    {
        _id: "5b21ca3projf6fbccd471816",
        name: "chsa-worldwide"
    },
    {
        _id: "5b21ca3projf6fbccd471817",
        name: "lasu-ece-09"
    },
    {
        _id: "5b21ca3projf6fbccd471819",
        name: "festac-2000-alumni"
    },
    {
        _id: "5b21ca3projf6fbccd47181a",
        name: "bghs-abeokuta-2001"
    },
    {
        _id: "5b21ca3projf6fbccd47181b",
        name: "st-dominic-akure-2014"
    },
    {
        _id: "5b21ca3projf6fbccd47181e",
        name: "akure-high-alumni"
    },
    {
        _id: "5b21ca3projf6fbccd47181f",
        name: "olive-crescent-staff"
    },
    {
        _id: "5b21ca3projf6fbccd471821",
        name: "awori-college-2009-alumni"
    }
];

export function getProjects() {
    return projects;
}

export function getProject(id) {
    const project = projects.find(m => m._id === id);
    return { project };
}

// export function saveContestant(contestant) {
//     let contestantInDb = contestant.find(m => m._id === contestant._id) || {};
//     contestantInDb.name = contestant.name;
//     contestantInDb.position = positionsAPI.positions.find(g => g._id === contestant.positionId);
//     contestantInDb.picture.thumbnail = contestant.imageUpload;

//     if (!contestantInDb._id) {
//         contestantInDb._id = Date.now();
//         contestants.push(contestantInDb);
//     }

//     return contestantInDb;
// }
/*

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
*/