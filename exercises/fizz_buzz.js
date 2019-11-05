for (let i = 0; i < 20; i +=1) {
  if (i % 15 === 0) {
    console.log(i + " Fizz Buzz")
  }
  else if (i % 3 === 0) {
    console.log(i + " Fizz")
  }
  else if (i % 5 === 0) {
    console.log(i + " Buzz")
  }
  else {
    console.log(i)
  }
}
