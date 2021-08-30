const roles = [
    { _id: "5b21ca3rolef6fbccd471816", name: "soleAdmin" },
    { _id: "5b21ca3rolef6fbccd471939", name: "admin" },
    { _id: "5b21ca3rolef6fbccd894878", name: "voter" }
];

export function getRoles() {
    return roles;
}

export function getRole(id) {
    const role = roles.find(m => m._id === id);
    return { role };
}