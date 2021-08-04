export const positions = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "President" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Secretary" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Treasurer" },
  { _id: "5b21ca3eeb7f6fbccd471828", name: "Financial Secretary" }
];

export function getPositions() {
  return positions.filter(g => g);
}
