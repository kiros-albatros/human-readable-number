module.exports = function toReadable(number) {
    if (number == 0) {
        return 'zero';
    }
    if (!number) {
        return 0;
    }

    let arred = String(number).split('');
    let collection = {
        units: [" ", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        decs: [' ', ' ', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    }

    function fromTwo(arr) {
        if (arr[0] < 2) {
            if (arr[0] == 0) {
                return collection['units'][(arr[1])];
            } else {
                return (collection['units'][String(arr[0]) + String(arr[1])]).trim();
            }
        } else {
            let twoNums = String(collection['decs'][arr[0]]) + String(" " + collection['units'][arr[1]]);
            return twoNums.trim();
        }
    }

    if (arred.length == 1) {
        return collection['units'][arred[0]];
    } else if (arred.length == 2) {
        return fromTwo(arred);
    } else if (arred.length == 3) {
        var hundreds = String(collection['units'][arred[0]]) + " hundred ";
        return ((hundreds + fromTwo((arred.slice(1)))).trim());
    }
}




