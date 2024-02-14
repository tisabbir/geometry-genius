/**
 * 1. add event listener to the button : calculate
 * 2. Get the value from the two/one inputs
 * 3. Calculate the area according to the formula
 * 4. Show the result in Area calculation section
*/

//1
function calculateTheAreaOfParallelogram(){
const base = getValueFromInputById('parallelogram-base');
const height = getValueFromInputById('parallelogram-height');
const area = base * height;
setAreaValueToAreaCalculationSection('areaCalculationContainer',area);

}


// automatingFunctions
function getValueFromInputById(fieldId){
 const value = parseFloat(document.getElementById(fieldId).value);
 return value;
}
function setAreaValueToAreaCalculationSection(areaId, area){
    const areaCalculationContainer = document.getElementById(areaId);
    const para = document.createElement('p');
    para.innerText = 'The Area is : ' + area + 'cm^2';
    areaCalculationContainer.appendChild(para);
}

