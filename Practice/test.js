
function solution(participant, completion) {
  return participant.map(el => el != completion.includes(participant))
}
var participant = ['mislav', 'stanko', 'mislav', 'ana']; 
var completion = ['stanko', 'ana', 'mislav'];

// var participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
// var completion = ['josipa', 'filipa', 'marina', 'nikola'];

console.log(solution(participant, completion));

// const ar1 = [1, 2, 3,2];
// const ar2 = [3, 2];
// ar1.sort()
// ar2.sort()
// var arr = ar1.concat(ar2)
// const find = ar1.find(el => el != ar2)

// console.log(find);
