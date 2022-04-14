function solution(board, moves) {
  var count = 0;
  var stack = [];
  board = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ];
  moves = [1, 5, 3, 5, 1, 2, 1, 4];

  moves.forEach((element) => {
    find1(element);
    // console.log(find(element));
  });

  return count;
}
const find1 = (element) => {
  for (i = 0; i < board.length; i++) {
    for (j = 0; j < board[i].length; j++) {
      if (board[i][j] == element - 1) {
        if (board[i][j] !== 0) {
          num = board[i][j];
          board[i][j] = 0;
          check(num);
        }
      }
    }
  }
  return count;
};

const check = (inputNum) => {
  if (stack.lastIndexOf(inputNum) == stack.length) {
    count += 2;
    stack.pop();
  } else {
    stack.push();
  }
};
solution(1, 1);
// console.log(solution(1, 1));
