const data = require('./data.json')

let larger = 0

for(let i = 1; i < data.length; i++){
  if(data[i] > data[i-1]){
    larger += 1
  }
}

console.log(larger)