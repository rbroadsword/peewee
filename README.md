##Tests

Describe: range(number)

Test: "it will return a range starting at 0, and incrementing by 1 up to the entered number."
Code: range("5"); 
Expected Output: [0, 1, 2, 3, 4, 5];

Describe: replacement(range)

Test 1: "it will return "beep" for a number with a 1 in it"
Code: replacement([1]); 
Expected Output: "beep"

Test 2: "It will return "boop" for a number that has a 2 in it."
Code: replacement([2]);
Expected Output: "boop"

Test 3: "It will return "boop" for a number with both a 1 and 2 in it."
Code: replacement([12]); 
Expected Output: "boop"

Test 4: "It will return "won't you be my neighbor" for a number with a 3 in it"
Code: replacement([3]);
Expected Output: "Won't you be my neighbor"

Test 5: "It will return "won't you be my neighbor" for a number that includes both a 3 and 1 or 3 and 2"
Code: replacement([13]);
Expected Output: "Won't you be my neighbor"

Test 6: "It will return the number if the number does not include a 1, 2, or 3"
Code: replacement([4]);
Expected Output: 4

Test 7: "It will return an array with multiple numbers, and numbers changed if it includes a 1, 2, or 3"
Code: replacement([1, 2, 3, 4]);
Expected Output: "beep", "boop", "won't you be my neighbor", 4
