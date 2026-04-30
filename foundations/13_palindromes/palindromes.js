const palindromes = function (string) {
    string = normalizeString(string);
    const charArray = string.split("");
    let i = 0;
    let j = charArray.length - 1;
    let midIndex = Math.round(charArray.length / 2);
    let isRunning = true;
    while(isRunning)
    {
        if (charArray[i] !== charArray[j] || i - j > 0) return false;
        if (i === j) return true;
        i++;
        j--;
    }
};

function normalizeString(string)
{
  let specialChars = /[^a-zA-Z0-9]/g;
  return string.toLowerCase().replace(specialChars, "");
}
// Do not edit below this line
module.exports = palindromes;
