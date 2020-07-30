// 1. Given a document, implement an algorithm to count the number of word occurrences.

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

console.log('test')

//function take input 
//for each new word -> start new list
//if word exists, add next occurance of word to list
//{[hello, hello], [there], [how, how], [are], [you]}
//for each row, return {[hello, 2], [there, 1], [how, 2]. [you, 1]}
//for each row, print row[0] + ' = ' + row[1] + ' , '