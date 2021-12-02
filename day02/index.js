const fs = require("fs")

const data = fs.readFileSync("data.txt").toString().split("\n")

const part1 = () => {
  let forward = 0
  let depth = 0

  data.forEach((e)=>{
    const [direction, distance] = e.split(" ")

    switch (direction) {
      case "forward":
        forward += parseInt(distance)
        break;
      case "down":
        depth += parseInt(distance)
        break;
      case "up":
        depth -= parseInt(distance)
        break;
      default:
        break;
    }
  })

  return forward * depth
}

const part2 = () => {
  let forward = 0
  let depth = 0
  let aim = 0

  data.forEach((e)=>{
    const [direction, distance] = e.split(" ")

    switch (direction) {
      case "forward":
        forward += parseInt(distance)
        depth += aim * parseInt(distance)
        break;
      case "down":
        aim += parseInt(distance)
        break;
      case "up":
        aim -= parseInt(distance)
        break;
      default:
        break;
    }
  })

  return forward * depth
}

console.log('Part 1 Answer: ', part1())
console.log('Part 2 Answer: ', part2())