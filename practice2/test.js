function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) {
    arr = [-1];
  }
  return arr;
}
arr = [];
console.log(solution(arr));
