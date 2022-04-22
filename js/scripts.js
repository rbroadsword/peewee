//Business Logic 

function range(number) {
  let userNumber = parseInt(number); 
  const range = [];
  for (let i = 0; i <= userNumber; i++) {
    range.push(i); 
  }
  return range; 
}

function replacement(range) {
  let input = range; 
  let one = "beep"; 
  let two = "boop"; 
  let result = []; 
  for (let i = 0; i <= input.length -1; i++) {
    if (input[i].toString().includes("1")) {
      result.push(one); 
      console.log(result); 
    } else if (input[i].toString().includes("2")) {
      result.push(two); 
      console.log(result); 
    }
  }
}