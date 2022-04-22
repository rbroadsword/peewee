##Tests

Describe: range(number)

Test: "it will return a range starting at 0, and incrementing by 1 up to the entered number."
Code: range("5"); 
Expected Output: [0, 1, 2, 3, 4, 5];

Describe: replacement(range)

Test: "it will return "beep" for a number with a 1 in it"
Code: replacement([1]); 
Expected Output: "beep"

Test: "It will return "boop" for a number that has a 2 in it."
Code: replacement([2]);
Expected Output: "boop"

