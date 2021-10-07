function solution(arr1, arr2) {
var answer = new Array(arr1.length)
for(var i = 0; i < answer.length; i++) {
  answer[i] = new Array(arr1[0].length)
}

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
}

arr1 = [
  [1, 2],
  [2, 3],
];
arr2 = [
  [3, 4],
  [5, 6],
];

solution(arr1, arr2);
