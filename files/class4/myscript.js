// var radios = document.getElementsByName('tempFormat');
// var button = document.getElementById('getValue');
//
// button.addEventListener("click", handleClick);
//
// function handleClick(event){
//   for (var i = 0, length = radios.length; i < length; i++) {
//       if (radios[i].checked) {
//           var radioButtonValue = radios[i].value;
//           // only one radio can be checked, so stop now
//           alert(radioButtonValue);
//           break;
//       }
//   }
// }

var submitButton = document.getElementById('simpleSubmit');

simpleForm.addEventListener("submit", handleSubmit);

function handleSubmit(event){
  var resultsBox = document.getElementById('resultsBox');
  var inputValue = document.getElementById('inputValue');
  event.preventDefault();


  resultsBox.innerHTML = inputValue.value;

}
