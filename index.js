// Code your solution here
function findMatching(drivers, str) {
  return drivers.filter(n => n.toUpperCase() == str.toUpperCase());
}
