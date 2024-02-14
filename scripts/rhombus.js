function calculateTheAreaOfRhombus(){
    const corner1 = getValueFromInputById('rhombus-corner-1');
    const corner2 = getValueFromInputById('rhombus-corner-2');
    const area = 0.5 * corner1 * corner2;
    setAreaValueToAreaCalculationSection('areaCalculationContainer',area);
    
    }