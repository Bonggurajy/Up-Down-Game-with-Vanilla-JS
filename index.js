//1. 사용자가 기준이 될 최대 숫자(maxNum)을 지정하게 할 것.
//1-a maxNum에 유효한 타입의 숫자가 입력되었는가? --> validation
//2. 0과 maxNum 사이의 임의의 숫자가 gameNum이 되도록 설계할 것.


//3-1. 사용자가 추측하는 숫자를 입력값으로 받는 prompt를 띄울 것. --> 해당 숫자값을 지역 변수 guessNum에 저장함.
//3-2. 사용자가 prompt에 입력하여 제출할 때마다 횟수를 변수 attemptedNum에 저장할 것


//4-1. guessNum이 gameNum보다 큰 값이면 console에 'below !'를 출력할 것.
//4-2. guessNum이 gameNum보다 작은 값이면 console에 'above !'를 출력할 것.


//5. guessNum이 gameNum과 동일하다면 console에 결과를 출력
//<기능추가> 게임 도중 q입력시 또는 prompt창의 취소버튼 클릭 시 게임 중단하기
const $currentState = document.querySelector('#currentState');
const $startBtn = document.querySelector('#startBtn');

function game () {
  let maxNum = prompt('Please Write maxNum')
  let maxNumParsed = parseInt(maxNum);
  if(maxNum !== null) {
    while(!maxNumParsed) {
      maxNumParsed = parseInt(prompt('Please Write valid Number'));
    }

    const gameNum = Math.floor(Math.random()*maxNumParsed) + 1;

    let guessNum = prompt('Guess Number !');
    let attemptedNum = 1;
    while(parseInt(guessNum) !== gameNum) {
      attemptedNum++;
      if(guessNum === 'q' || guessNum === null) break;
      if(parseInt(guessNum) < gameNum) {
        guessNum = prompt('above !');
      } 
      else {
        guessNum = prompt('below !');
      }
    }
    if(guessNum === 'q') {
      $currentState.innerHTML= 'Quitted !'
    }
    else {
      $currentState.innerHTML= `Correct ! the answer is ${gameNum} ! Your attempt number is ${attemptedNum}`;
    }
  }
}


$startBtn.addEventListener('click', () => setTimeout(game, 500));
