module.exports = function toReadable(number) {
  const ones = [
                '', 
                'one', 
                'two', 
                'three', 
                'four', 
                'five', 
                'six', 
                'seven', 
                'eight', 
                'nine'
              ];

  const teens = [
                 'ten', 
                 'eleven', 
                 'twelve', 
                 'thirteen', 
                 'fourteen', 
                 'fifteen', 
                 'sixteen', 
                 'seventeen', 
                 'eighteen', 
                 'nineteen'
               ];

  const tens = [
                '', 
                '', 
                'twenty', 
                'thirty', 
                'forty', 
                'fifty', 
                'sixty', 
                'seventy', 
                'eighty', 
                'ninety'
              ];

  let result = '';

    if (number === 0) return 'zero';

    if (number >= 100) {
      result += ones[Math.floor(number / 100)] + ' hundred ';
      number %= 100;
    }
  
    return result.trim();

};
