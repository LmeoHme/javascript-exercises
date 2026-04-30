const fibonacci = function(number) {
    if (!validateInput(number)) return "OOPS";
    if (+number === 0) return 0;
    else if (+number === 1) return 1;
    else return fibonacci(number - 1) + fibonacci(number - 2);
};

function validateInput(input)
{
    if (isFinite(input) && input >= 0) return true;
    else return false;
}
// Do not edit below this line
module.exports = fibonacci;
