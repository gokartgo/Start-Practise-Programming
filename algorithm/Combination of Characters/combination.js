const string = 'AC' // AACC
const count = [2,2]
const answer = []

function combination(index, output, index_i) {
  for(let i = 0;i<count.length;i++) {
    if(count[i] > 0) {
      break
    }
    if((count[i] === 0 && i === count.length - 1)) {
      return
    }
  }

  for(let i=index_i;i<string.length;i++) {
    if(count[i] === 0) {
      continue
    }
    count[i]--
    output[index] = string[i]
    console.log(output)
    let clone_output = []
    for(let j=0;j<output.length;j++) {
      clone_output[j] = output[j]
    }
    combination(index + 1, clone_output, i)
    count[i]++
  }
}

// for(let i = 0;i < string.length;i++) {
//   count[i] = 1
// }

combination(0, [], 0)