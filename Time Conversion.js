function timeConversion(s) {
    /*
     * Write your code here.
     */
    let chars = [...s];
    let amPm = chars[8] + chars[9];
    let time = '';
    let hours = chars[0] + chars[1];
    hours = Number(hours);
    if ((amPm === 'AM' && hours != 12) || (hours == 12 && amPm == 'PM')) {
        return chars.join('').substring(0, 8);
    }
    if (amPm == 'AM' && hours == 12) {
        chars[0] = 0
        chars[1] = 0
    }
    else {
        hours += 12;
        chars[0] = Math.floor(hours / 10);
        chars[1] = hours % 10;
    }
    time = chars.join('').substring(0, 8);
    return time;

}
