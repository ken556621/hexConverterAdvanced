const scrollBar = document.getElementById('scrollBar');
const hexNumberField = document.getElementById('hexNumberField');
const rgbNumber = document.querySelectorAll('.inputBar');

//一開始狀態
let hexNumber = '#000000';
hexNumberField.innerHTML = hexNumber;
document.body.style.backgroundColor = hexNumber;


//scroolbar input value render
function displayNumber(showNumberField, input){
  showNumberField.innerHTML = input;
}

//convert 10 to 16
function convertNumber(){
  hexNumber = '#';
  for(let i =0;i < rgbNumber.length;i++){
    hexNumber += Number(rgbNumber[i].value).toString(16)
  }
  hexNumberField.innerHTML = hexNumber;
  document.body.style.backgroundColor = hexNumber;
}


//listen
scrollBar.addEventListener('input', function(event){
  if(event.target.matches('.inputBar')){
    displayNumber(event.target.nextElementSibling, event.target.value);
    convertNumber();
  }
})