// 1. Given a document, implement an algorithm to count the number of word occurrences.

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

console.log('test')

//function takes input string
//creates new hashmap/obj = {}
//if hashmap[word] doesn't exist, -> start new list item
////new item would be hashmap[word] = 1 to start off count sequence
//if hashmap[word] exists, .push to add next occurance of word to list
////OR if exists, then second item in array is count, increase count by 1
//{[hello, hello], [there], [how, how], [are], [you]}
//for each row, return {[hello, 2], [there, 1], [how, 2], [you, 1]}
//for each row, print row[0] + ' = ' + row[1] + ' , '