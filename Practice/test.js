function solution(answers) {
  var human1 = [1, 2, 3, 4, 5];
  var human2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var human3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var answer = [];
  var arrAnswer = [0, 0, 0];
  for (var i = 0; i < answers.length; i++) {
    if (human1[i % human1.length] == answers[i]) {
      arrAnswer[0] += 1;
    }
    if (human2[i % human2.length] == answers[i]) {
      arrAnswer[1] += 1;
    }
    if (human3[i % human3.length] == answers[i]) {
      arrAnswer[2] += 1;
    }
  }

  for (i = 0; i < 3; i++) {
    if (Math.max.apply(null, arrAnswer) == arrAnswer[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}
