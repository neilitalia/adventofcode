const fs = require("fs")

const data = fs.readFileSync("data.txt").toString().split("\n")

const part1 = () => {
  let count = {}
  let gamma = []
  let epsilon = []

  data.forEach((e) => {
    const bits = e.split('')
    bits.forEach((b, i) => {
      if(!count[i]) count[i] = {}
      if(!count[i][b]) count[i][b] = {}
      count[i][b] = parseInt(count[i][b]) + 1 || 1
    })
  });

  Object.values(count).forEach((el) => {
    if(el['0'] > el['1']){
      gamma.push('0')
      epsilon.push('1')
    } else {
      gamma.push('1')
      epsilon.push('0')
    }
  })

  gamma = parseInt(gamma.join(''), 2)
  epsilon = parseInt(epsilon.join(''), 2)
  
  return gamma * epsilon
}

console.log('Part 1 Answer: ', part1())