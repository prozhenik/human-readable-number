module.exports = function toReadable (number) {
    let units = new Map([
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
    ]);
    let dozens = new Map([
        [2, 'twenty'],
        [3, 'thirty'],
        [4, 'forty'],
        [5, 'fifty'],
        [6, 'sixty'],
        [7, 'seventy'],
        [8, 'eighty'],
        [9, 'ninety'],
    ]);
    function double (num) {
        if(num <= 19){
            return units.get(num);
        } else if (num.toString()[1] == '0'){
            return dozens.get(Number(num.toString()[0]));
        } else {
            return dozens.get(Number(num.toString()[0])) + ' ' + units.get(Number(num.toString()[1]));
        }
    }
    function triple (num) {
        if(num.toString()[1] + num.toString()[2] == '00'){
            return (units.get(Number(num.toString()[0])) + ' ' + 'hundred');        
        } else {
            return (units.get(Number(num.toString()[0])) + ' ' + 'hundred' + ' ' + double(Number(num.toString()[1] + num.toString()[2])));
        }
    }
    switch(number.toString().length){
        case 1: return units.get(number);
        case 2: return double(number);
        case 3: return triple(number);
    }
}
