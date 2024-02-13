const recBtn = document.getElementById('rec-cal-btn');
recBtn.addEventListener('click', function (){
    const widthValue = document.getElementById('widthValue').value;
    const width = parseFloat(widthValue);
    const lengthValue = document.getElementById('lengthValue').value;
    const length = parseFloat(lengthValue);
    const rectangleArea = width * length;
    // console.log(rectangleArea)
    const areaCalculationContainer = document.getElementById('areaCalculationContainer');
    const para = document.createElement('p');
    para.innerText = 'The area of the rectangle is : ' + rectangleArea + ' cm^2';
    areaCalculationContainer.appendChild(para);
})