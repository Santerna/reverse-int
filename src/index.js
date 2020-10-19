module.exports = function reverse (n) {
    let string = '';
    string = n.toString();
    return parseInt(string.split('').reverse('').join(''));
}
