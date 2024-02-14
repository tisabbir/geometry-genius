/**
 * 1. add event listener to the button : calculate
 * 2. Get the value from the two/one inputs
 * 3. Calculate the area according to the formula
 * 4. Show the result in Area calculation section
*/

// 1
function addEventListenerToTheBtn(btnId, inputId1, inputId2){
    const btn = document.getElementById(btnId).addEventListener('click',function(){
        alert('i am clicked')

        //2
        function getValueFromInput(inputId){
            const inputValue = parseFloat(document.getElementById(inputId).value);
            console.log(inputValue);
        }
        const input1 = getValueFromInput(inputId1);
        const input2 = getValueFromInput(inputId2);
    })
}
addEventListenerToTheBtn('parallelogram-btn', 'parallelogram-base', 'parallelogram-height');

//2

// const recBtn = document.getElementById('rec-cal-btn');
// recBtn.addEventListener('click', function (){
//     const widthValue = document.getElementById('widthValue').value;
//     const width = parseFloat(widthValue);
//     const lengthValue = document.getElementById('lengthValue').value;
//     const length = parseFloat(lengthValue);
//     const rectangleArea = width * length;
//     // console.log(rectangleArea)
//     const areaCalculationContainer = document.getElementById('areaCalculationContainer');
//     const para = document.createElement('p');
//     para.innerText = 'The area of the rectangle is : ' + rectangleArea + ' cm^2';
//     areaCalculationContainer.appendChild(para);
// })

