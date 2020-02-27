// // Drills

// 1. What is the Big O for this?

// 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

// I'm going to guess this is O(1), constant time, since theoretically this is happening every time you sit in the room and ask, no matter how many people are in the room? This doesn't seem like an algorithm.

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// This is linear time, O(n), since the relationship is linear

// 2. Even or odd

// What is the Big O of the following algorithm? Explain your answer

// function isEven(value) {
//     if (value % 2 == 0) {
//         return true;
//     }
//     else
//         return false;
//     }
// }

// I think this is O(1), constant time, since there's only ever one input and only ever one operation

// 3. Are you here?

// What is the Big O of the following algorithm? Explain your answer

// function areYouHere(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         const el1 = arr1[i];
//         for (let j = 0; j < arr2.length; j++) {
//             const el2 = arr2[j];
//             if (el1 === el2) return true;
//         }
//     }
//     return false;
// }

// This is polynomial time, O(n^k), because there are nested loops

// 4. Doubler

// What is the Big O of the following algorithm? Explain your answer

// function doubleArrayValues(array) {
//     for (let i = 0; i < array.length; i++) {
//         array[i] *= 2;
//     }
//     return array;
// }

// This would be linear, I think, O(n), because the function is performing one operations for every item in the array, and the amount of time it takes to do that will increase linearly as the size of the input increases

// 5. Naive search

// What is the Big O of the following algorithm? Explain your answer

// function naiveSearch(array, item) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return i;
//         }
//     }
// }

// Linear again, I think -- O(n) -- because there is a linear relationship between the number of items in the array and the number of operations the function has to perform

// 6. Creating pairs:

// What is the Big O of the following algorithm? Explain your answer

// function createPairs(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             console.log(arr[i] + ", " +  arr[j] );
//         }
//     }
// }

// I would guess this is polynomial time -- O(n^k) -- because of the two nested loops.

// 7. Compute the sequence

// What does the following algorithm do? What is its runtime complexity? Explain your answer

// function compute(num) {
//     let result = [];
//     for (let i = 1; i <= num; i++) {

//         if (i === 1) {
//             result.push(0);
//         }
//         else if (i == 2) {
//             result.push(1);
//         }
//         else {
//             result.push(result[i - 2] + result[i - 3]);
//         }
//     }
//     return result;
// }

// This algorithm computes the Fibonacci sequence. I think its runtime complexity is O(n), linear, since the algorithm will take longer to complete with a larger input, but it is only performing one operation for each repetition of the loop.

// 8. An efficient search

// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

// function efficientSearch(array, item) {
//     let minIndex = 0;
//     let maxIndex = array.length - 1;
//     let currentIndex;
//     let currentElement;

//     while (minIndex <= maxIndex) {
//         currentIndex = Math.floor((minIndex + maxIndex) / 2);
//         currentElement = array[currentIndex];

//         if (currentElement < item) {
//             minIndex = currentIndex + 1;
//         }
//         else if (currentElement > item) {
//             maxIndex = currentIndex - 1;
//         }
//         else {
//             return currentIndex;
//         }
//     }
//     return -1;
// }

// The time complexity of this algorithm is O(log(n)), I think, because it is dividing the array in half before performing its operations

// 9. Random element

// What is the Big O of the following algorithm? Explain your answer

// function findRandomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// This time complexity is constant, O(1), because the random operation will take the same amount of time to perform no matter the size of the array.

// 10. What Am I?

// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

// function isWhat(n) {
//     if (n < 2 || n % 1 != 0) {
//         return false;
//     }
//     for (let i = 2; i < n; ++i) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }

// The conditional checks whether n is less than two or odd or even; if it's odd or less than two, it returns false.

// If the conditional is not triggered -- i.e. if it's even, it runs n through a for loop that sees if n is divisible by anything else. If it is, it returns false.

// If it's not, it returns true. The only numbers that satisfy this condition are prime numbers, so the function finds prime numbers. I would guess the time complexity of this is linear, since it seems like there's a linear relationship between the amount of computations that need to be done and the size of the input.

// 11. Tower of Hanoi

// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

//     There are three rods and a number of disks of different sizes which can slide onto any rod. The puzzle starts with the disks neatly stacked in ascending order of size on one rod, the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
//     The goal of the puzzle is to move the entire stack of rods to another rod (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well. This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already be present on that rod. iii) A larger disk may not placed on top of a smaller disk

// Input:
// Rod A 	Rod B 	Rod C
// ---- 		
// --------- 		
// ------------- 		

// Output:
// Rod A 	Rod B 	Rod C
// 		----
// 		---------
// 		-------------

//     Derive an algorithm to solve the Tower of Hanoi puzzle.
//     Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
//     If you are given 5 disks, how do the rods look like after 7 recursive calls?
//     How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
//     What is the runtime of your algorithm?

// hanoi = (n, a, b, c) => {
//     if (n > 0) {
//        hanoi(n-1, a, c, b);
//        console.log("Move disk from " + a + " to " + c);
//        hanoi(n-1, b, a, c);
//     }
// }

// hanoi(4, "A", "B", "C");

// I think the time complexity of this algorithm is O(n).


// 12. Iterative version

// Solve the drills 1 - 7 from your previous checkpoint (Recursion) iteratively.
// 13. Recursive Big O

// Sheep counter

countSheep = n => {

    while (n > 0) {
        console.log ('Another sheep jumped over the fence')
        n--
    }

    console.log('All sheep have jumped over the fence.')
    
}

// O(n)?

countSheep(4)

// Power calculator

powerCalculator = (num, exponent) => {
  
    let runningTotal;
    
    for (let i = 0; i < exponent; i++) {
      
      (i === 1)
      ? runningTotal =+ num * num
      : runningTotal =+ runningTotal * num
                  
    }
    
    console.log(runningTotal)
}

// O(n) ?
  
powerCalculator(5, 5);


reverseString = str => {

    return [...str].reverse().join('');
        
}
  
reverseString('aString')

// O(n) worst-case, and possibly O(1)!


calculateNthTriangular = n => {
    
    let accumulator = 0
    
    for (let i = 0; i <= n; i++) {
        accumulator += i
    }
  
  	return accumulator
}

calculateNthTriangular(4);

// Possibly O(1)?!


splitString = (strToSplit, separator) => {

    strToSplit.split(separator)
  
}

splitString('Wrapper\'s delight', 'e')

// O(n)

calculateFactorial = n => {

    for (let i = (n-1); i > 0; i--) {			
      n += n * (i - 1);
    }
    return n

}

calculateFactorial(8)

// O(n), possibly O(1)?


clear ()

calculateFib = n => {
   
    x = 0, 
    y = 1, 
    z = 1;
  
  	for (let i = 0; i < n; i++) {
      x = y;
      y = z;
      z = x + y;
    }
  
  return x;
		    
}

calculateFib(5);

// O(n), total guess



// Take your solutions from the recursive exercises that you completed in the previous checkpoint and identify the time complexities (big O) of each of them.
// 14. Iterative Big O

// Take your solutions from the iterative exercises today and identify the time complexities (big O) of each of them.