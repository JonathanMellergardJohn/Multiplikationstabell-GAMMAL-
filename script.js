// let multiTable = [];
// let multiProducts = [];
let answer = 0;
let guess = 0;
let answeredQuestions = 0;
let wrongAnswersCount = 0;
let input = document.querySelector('.guessField');
let tables = [];

function fillTables(){
// //  for (factor1 = 2; factor1 < 10; factor1++){
//     for (factor2 = 2; factor2 < 10; factor2++){
//       multiTable.push(factor1 + ' * ' + factor2 + ' = ');
//       multiProducts.push(factor1*factor2);
//     }
//     factor2 = 2;
//   }
tables.push(getTableValues(6, 2));
tables.push(getTableValues(6, 3));
tables.push(getTableValues(6, 4));
tables.push(getTableValues(6, 5));
tables.push(getTableValues(6, 6));
tables.push(getTableValues(6, 7));
}

function selectQuestion(){
  if (answeredQuestions < 36){
    let tableIndex = getRandomNumber(0, 5);
    let tableNumberIndex = getRandomNumber(0, 5);
    let table = tables[tableIndex];
    let question = table.table + ' * ' + table.tableNumbers[tableNumberIndex] + ' = ';
    document.querySelector('.questionField').innerHTML = question;
    document.querySelector('.guessField').focus();
    // debugger;
    // question = multiTable[selector];
    // answer = multiProducts[selector];
    // multiTable.splice(selector, 1);
    // multiProducts.splice(selector, 1);
    answeredQuestions++;
    document.querySelector('.guessField').value ='';
  } else {
    document.querySelector('.guessCorrectionMessage').innerHTML = "Färdig med diagnos! Du fick " + wrongAnswersCount + " fel."
  }

}

//function displayQuestion(hejsvej) {
  //document.querySelector('.questionField').innerHTML = hejsvej;
  //document.querySelector('.guessField').focus();
//}

//function checkGuess() {
//  guess = Number(document.querySelector('.guessField').value);
//  answer = 
//    if (guess !== answer) {
//      wrongAnswersCount++;
//      console.log(wrongAnswersCount)
//    }
//}

function startTest() {
  selectQuestion();
  displayQuestion();
}

function continueTest() {
  checkGuess();
  selectQuestion();
  displayQuestion();
  
}

input.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    document.querySelector('.guessButton').click();
  }
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTableValues(numberOfValues, table) {
  let returnObject = {
    table : table,
    tableNumbers : []
    // a: [{number: 1, answer: 4}]
  };

  function getValue() {
    const returnValue = getRandomNumber(2, 9);
    if (returnObject.tableNumbers.indexOf(returnValue) < 0) {
      console.log(returnValue);
      return returnValue;
    } else {
      
      return getValue();
    }
  }

  for (let index = 0; index < numberOfValues; index++) {
    // getValue(); 
    returnObject.tableNumbers.push(getValue());
  }

  return returnObject;
} 


fillTables();
selectQuestion();
console.log(tables);
