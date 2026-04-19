function isPositiveInt(number)
{
    if (isFinite(number))
    {
        if (Number.isInteger(number) && number > 0) return true;
    }
    else return false;
}

const sumAll = function(startNum, endNum) {
    if (!(isPositiveInt(startNum) && isPositiveInt(endNum))) return "ERROR";

    // return ((Math.abs(endNum - startNum) + 1) * (startNum + endNum)) / 2;

        if (startNum > endNum)
    {
        let temp = startNum;
        startNum = endNum;
        endNum = temp;    
    }
    const numbers = [];
    for (startNum; startNum <= endNum;)
    {
        numbers.push(startNum++);
    }
    return numbers.reduce((sum, num) => sum += num, 0);
};


// Do not edit below this line
module.exports = sumAll;
