module.exports = function toReadable (number) {
        const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen'];
    const b = ['teen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const c = ['hundred'];
    if (number <= 15) {
        return a[number];
    }
    else if (number < 20) {
        number = String(number).split('');
        if (number[0] == 1 && number[1] == 8) {
            return a[number[1]] + '' + b[0].slice(1);
        }
        return a[number[1]] + '' + b[0];
    }
    else if (number < 100) {
        number = String(number).split('');
        if (number[1] == 0) {
            return b[number[0] - 1];
        }
        return b[number[0] - 1] + " " + a[number[1]];
    }
    else if (number < 1000) {
        number = String(number).split('');

        if (number[2] == 0 && number[1] == 0) {
            return a[number[0]] + ' ' + c[0];
        }
        if (number[1] == 0){
            return a[number[0]]+' '+ c[0]+ ' ' +a[number[2]];
        }
        if (number[2] == 0) {
            if (number[1] == 1) {
                return a[number[0]] + ' ' + c[0] + ' ' + a[10];
            }
            return a[number[0]] + ' ' + c[0] + ' ' + b[number[1] - 1];
        }
        if (number[1] == 1) {
            if (number[2] == 8) {
                return a[number[0]] + ' ' + c[0] + ' ' + a[number[2]] + '' + b[0].slice(1);
            }
            if (number[2]>5){
                return a[number[0]] + ' ' + c[0] + ' ' + a[number[2]] + b[0];
            }
            return a[number[0]] + ' ' + c[0] + ' ' + a[number[2] * 1 + 10];
        }
        return a[number[0]] + ' ' + c[0] + ' ' + b[number[1] - 1] + ' ' + a[number[2]];
    }

  
}
