function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value ;
    const inputFieldAmount = parseFloat(inputFieldValueString);

    inputField.value = '';

    return inputFieldAmount  ;
}

function getTextElementValueById(elementId){
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString );
  return textElementValue ;

}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

