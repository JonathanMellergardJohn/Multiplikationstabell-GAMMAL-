let answer = 0;
let guess = 0;
let answeredQuestions = 0;
let wrongAnswersCount = 0;
let input = document.querySelector('.guessField');
let tables = [];

function fillTables(){

  tables.push(getTableValues(6, 2));
  tables.push(getTableValues(6, 3));
  tables.push(getTableValues(6, 4));
  tables.push(getTableValues(6, 5));
  tables.push(getTableValues(6, 6));
  tables.push(getTableValues(6, 7));
}

function selectQuestion(){
  if (answeredQuestions < 10){
    let tableIndex = getRandomNumber(0, 5);
    let tableNumberIndex = getRandomNumber(0, 5);
    let table = tables[tableIndex];
    let question = table.table + ' * ' + table.tableNumbers[tableNumberIndex] + ' = ';
    document.querySelector('.questionField').innerHTML = question;
    document.querySelector('.guessField').focus();
    answeredQuestions++;
    document.querySelector('.guessField').value ='';
  } else {
    document.querySelector('.guessCorrectionMessage').innerHTML = "Färdig med diagnos! Du fick " + wrongAnswersCount + " fel."
  }
}

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
    returnObject.tableNumbers.push(getValue());
  }

  return returnObject;
} 


fillTables();
selectQuestion();
console.log(tables);
