const btn = document.getElementById('tri-cal-btn');
btn.addEventListener('click', function (){
    const baseValue = document.getElementById('inputBase').value;
    const base = parseFloat(baseValue);
    const heightValue = document.getElementById('inputHeight').value;
    const height = parseFloat(heightValue);
    const triangleArea = 0.5 * base * height;
    // console.log(triangleArea)
    const areaCalculationContainer = document.getElementById('areaCalculationContainer');
    const para = document.createElement('p');
    para.innerText = 'The area of the triangle is : ' + triangleArea + ' cm^2';
    areaCalculationContainer.appendChild(para);
})