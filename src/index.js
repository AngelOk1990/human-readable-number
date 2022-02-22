module.exports = function toReadable (number) {
    let first = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    }
  
    let second = {
      1: 'eleven',
      2: 'twelve',
      3: 'thirteen',
      4: 'fourteen',
      5: 'fifteen',
      6: 'sixteen',
      7: 'seventeen',
      8: 'eighteen',
      9: 'nineteen',
      0: 'twenty'
    }
  
  let third = {
      1: 'ten',
      2: 'twenty',
      3: 'thirty',
      4: 'forty',
      5: 'fifty',
      6: 'sixty',
      7: 'seventy',
      8: 'eighty',
      9: 'ninety'
  }
  
  if (number > 0 && number <= 10) {
    return first[number]
  }
  if (number > 10 && number < 21) {
    return second[number.toString()[1]]
  }
  if (number > 20 && number < 100) {
    if (number.toString()[1] == "0"){
        return third[number.toString()[0]];
    } else {
        return third[number.toString()[0]] + " " + first[number.toString()[1]];
    }
}
  if (number > 100 && number <= 999) {
      if (number.toString()[1] == 0 && number.toString()[2] == 0) {
      return first[number.toString()[0]] + ' hundred '
      }
      if (number.toString()[1] == 0) {
          return first[number.toString()[0]] + ' hundred ' + first[number.toString()[2]]
      }
      if (number.toString()[2] == 0) {
          return first[number.toString()[0]] + ' hundred ' + third[number.toString()[1]]
      }
      if (number.toString()[1] == "1") {
      return first[number.toString()[0]] + ' hundred ' + second[number.toString()[2]]
      }
      if (number.toString()[2] == "0") {
      return first[number.toString()[0]] + ' hundred ' + third[number.toString()[1]];
      } else {
      return first[number.toString()[0]] + ' hundred ' + third[number.toString()[1]] + ' ' + first[number.toString()[2]];
      }
    }
}
