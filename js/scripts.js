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
  let three = "won't you be my neighbor?";
  let result = []; 
  for (let i = 0; i <= input.length -1; i++) {
    if (input[i].toString().includes("3")) {
      result.push(three);
    } else if (input[i].toString().includes("2")) {
      result.push(two); 
    } else if (input[i].toString().includes("1")) {
      result.push(one); 
    } else {
      result.push(input[i]); 
    }
  }
  console.log(typeof result[1]);
  return result; 
}