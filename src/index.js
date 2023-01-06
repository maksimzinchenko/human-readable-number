const ones = number => number % 10;

const ones_string = number => {
    number_names = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    return number_names[ones(number)];    
}

const hundreds = number => Math.floor(number / 100);

const hundreds_string = number => hundreds(number) > 0? `${ones_string(hundreds(number))} hundred`:''

const tens = number => Math.floor((number - (hundreds(number) * 100)) / 10);

const tens_ones_string = number => {
    number_strings = [
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    ]
    if (tens(number) > 0){
        if (tens(number) === 1){
            return number_strings[0][ones(number)];
        } else {
            return `${number_strings[1][tens(number)]} ${ones_string(number)}`
        }
    } else {
        return ones_string(number);
    }
}

module.exports = function toReadable (number) {
    if (number == 0){
        return 'zero'
    } else {
        return (`${hundreds_string(number)} ${tens_ones_string(number)}`).trim();
    }
}
