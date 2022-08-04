//1. 사용자가 기준이 될 최대 숫자(maxNum)을 지정하게 할 것.
//1-a maxNum에 유효한 타입의 숫자가 입력되었는가? --> validation
//2. 0과 maxNum 사이의 임의의 숫자가 gameNum이 되도록 설계할 것.


//3-1. 사용자가 추측하는 숫자를 입력값으로 받는 prompt를 띄울 것. --> 해당 숫자값을 지역 변수 guessNum에 저장함.
//3-2. 사용자가 prompt에 입력하여 제출할 때마다 횟수를 변수 attemptedNum에 저장할 것


//4-1. guessNum이 gameNum보다 큰 값이면 console에 'below !'를 출력할 것.
//4-2. guessNum이 gameNum보다 작은 값이면 console에 'above !'를 출력할 것.


//5. guessNum이 gameNum과 동일하다면 console에 결과를 출력

let maxNum = parseInt(prompt('Please Write maxNum'));
while(!maxNum) {
  maxNum = parseInt(prompt('Please Write valid Number'));
}
const gameNum = Math.floor(Math.random()*maxNum) + 1;

if (maxNum) {
  let guessNum = parseInt(prompt('Guess Number !'));
  let attemptedNum = 1;
  while(guessNum !== gameNum) {
    attemptedNum++;
    if(guessNum < gameNum) {
      guessNum = prompt('above !');
    } 
    else {
      guessNum = prompt('below !');
    }
  }
  console.log(`Correct ! the answer is ${gameNum} ! Your attempt number is ${attemptedNum}`);
}