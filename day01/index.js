const data = require('./data.json')

const part1 = () => {
  let counter = 0
  
  for(let i = 1; i < data.length; i++){
    if(data[i] > data[i-1]){
      counter += 1
    }
  }

  return counter
}

const part2 = () => {
  let counter = 0

  for(let i = 3; i < data.length; i++){
    const current = data[i] + data[i-1] + data[i-2]
    const previous = data[i-1] + data[i-2] + data[i-3]

    if(current > previous){
      counter += 1
    }
  }

  return counter
}

console.log('Part 1 Answer: ', part1())
console.log('Part 2 Answer: ', part2())