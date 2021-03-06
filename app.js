// 1. Given a document, implement an algorithm to count the number of word occurrences.

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

//time complexity: linear - O(n) - beacuse it only goes through the loop once, but it has to go through every letter

//function takes input string
//create new hashmap/obj = {}
//if string length is 0 - return error
//if string length is 1 - return 'word = 1'
//go through string unitl find ' '
////initialize item string holder
////while char != ' ', take char off initial string and add the char to item string
////once you hit a ' '
//////take the space off, add item to hashmap
//////// if hashmap[word] doesn't exist, -> start new list item
//////// //new item would be hashmap[word] = 1 to start off count sequence
//////// if hashmap[word] exists, .push to add next occurance of word to list
//////// //OR if exists, then second item in array is count, increase count by 1
////////// {[hello, hello], [there], [how, how], [are], [you]}
//initialist countStr
// for each object.keys,
// //countStr.concat row[0] + ' = ' + row[1] + ', '
//return countStr

function wordOccurances(str) {
    let pairs = {};
    if (str.length === 0) {
        return false;
    }
    if (str.length === 1) {
        return string + '= 1';
    }
    let string = str.toLowerCase().replace(/[^\w\s]/gi, '');

    let allWords = string.split(' ');

    allWords.forEach(item => {
        if (pairs[item]) {
            pairs[item] = pairs[item] + 1;
        } else {
            pairs[item];
            pairs[item] = 1;
        }
    });

    let occurances = '';

    for (const [key, value] of Object.entries(pairs)) {
        occurances = occurances.concat('', key + ' = ' + value + ', ');
    }

    return occurances;
}

// console.log(
//     wordOccurances('Hello there, how are you? Can you tell me how to get to the nearest Starbucks?')
// );

//
//___________________________________________________________________________________________
// 2. Given a sorted linked list, write an algorithm to delete all duplicate numbers
// from the sorted linked list.

// input: {head:{value:1, next: _Node{value: 1, next: _Node{value: 2, next: _Node{value: 2, next: null}}}}}

// function - takes sorted linked list
// if list head is empty - return error
// if list.head.next is null - return linked list
//
// track current value - initialize at head.value
// track nxt value - initialize at head.next
//
// while !next.null
// // if not match curr = nxt
// // nxt = nxt.next
// // if match curr.next = nxt.next
// // nxt.next = null
//
// return list

function removeDuplicates(list){
    if(!list.head.value){
        return false;
    }
    if(list.head.next === null){
        return list;
    }

    let currNode = list.head.value;
    let nxtNode = list.head.next;

    while(nxtNode !== null){
        if(currNode.value === nxtNode.value){
            currNode.next = nxtNode.next;
            nxtNode.next = null;
            nxtNode = currNode.next;
        } else {
            currNode = nxtNode;
            nxtNode = nxtNode.next;
        }
    }

    return list;
}

//___________________________________________________________________________________________
// 3. Given a string, write an algorithm to count the number of words in the string that
// are palindromes. The output must include a list of the palindromes and the number of palindromes.

//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`

//time complexity - quadratic/polynomial O(n^2) - or linear b/c not nested for loop

//function takes a string
//if length is 0 - return error
//if length is 1 - return string + 1 Palindrome
//if length is 2 - return 'no palindromes'
//let allWords = string.split(' ')
//let match = []
//for each item in array
////call function to determine if its a palindrome
//////isPalin() takes word
//////find length of word,
//////middle = Math.floor(word.length / 2)
////////check if odd - word.length % 2
/////pop letters off front from 0 to middle, push them into array/stack
//////if length was odd, ignore middle char - if even start at remaining char
//////if for each remaining char if array.pop item === continue,
////////if not return false, if no remaining chars then return true & push to match
//once string.length = 0
////construct string that for each item in array, itt concatonates each item + ', '
////return string + {match.length} + ' Palindromes'

function countPalindromes(string) {
    if (string.length === 0) {
        return 'No Palindromes';
    }

    if (string.length === 1) {
        return string + ', 1 Palindrome';
    }

    // if (string.length === 2) {
    //     return 'No Palindromes';
    // }

    let allWords = string.split(' ');
    let allPalindromes = [];

    allWords.forEach(word => {
        let odd = false;
        let mid = word.length / 2;

        if (word.length % 2 !== 0) {
            odd = true;
            mid = Math.floor(mid);
        }
        if (word.length === 1) {
            allPalindromes.push(word);
        }

        if (word.length > 1) {
            let firstHalf = [];
            for (let i = 0; i < mid; i++) {
                firstHalf.push(word.charAt(i));
            }
            if (!odd) {
                for (let j = 0; j < firstHalf.length + 1; j++) {
                    let itemA = firstHalf.pop();
                    let itemB = word.charAt(mid + j);
                    if (itemA.toLowerCase() !== itemB.toLowerCase()) {
                        return false;
                    }
                }
                allPalindromes.push(word);
            } else {
                for (let j = 1; j < firstHalf.length + 1; j++) {
                    let itemA = firstHalf.pop();
                    let itemB = word.charAt(mid + j);
                    if (itemA.toLowerCase() !== itemB.toLowerCase()) {
                        return false;
                    }
                }
                allPalindromes.push(word);
            }
        }
    });

    let returnPhrase = '';
    allPalindromes.forEach(word => {
        returnPhrase = returnPhrase.concat('', word + ', ');
    });

    return returnPhrase + allPalindromes.length + ' Palindromes';
}
//linear on each character 
// console.log(countPalindromes('Dad gave mom a Tesla as a racecar'));

//___________________________________________________________________________________________
// 5. Given 2 linked lists, where each node in each linked list represents a character in a
// string, write a function compare() that compares the 2 strings, i.e., it returns 0 if
// both strings are the same, 1 if the 1st linked list is lexicographically greater,
// and -1 if the 2nd string is lexicographically greater.

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o`
// - Output: `1`

// - Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
// - Output: `0`

// - Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b`
// - Output: `-1`

// function that takes 2 linked lists
// If both lists have lenght of 0 - return error
// if one of the lists lengths is 0 - return the other list is greater
// 
// initialize a counter for list one - start at node.head.value
// initialize a counter for list two - start at node.head.value
// 
// 
// for length of list one
//  if firstlist counter > second list counter
//      return 1
//  else if second list counter > first list count
//      return -1
//  else 
//      return 0;
// 
// return something at end?
// 

function lexicoCompare(list_one, list_two){
    let count_one = list_one.head;
    let count_two = list_two.head;

    // will list lengths always be the same?
    while(count_one !== null && count_two !== null){
        if(count_one.value.toLowerCase() > count_two.value.toLowerCase()){
            return 1;
        } else if(count_one.value.toLowerCase() < count_two.value.toLowerCase()){
            return -1;
        } else {
            count_one = count_one.next;
            count_two= count_two.next;
        }
    }

    if(count_one === null && count_two === null){
        return 0;
    }
    if(count_one === null){
        return -1;
    }
    if(count_two === null){
        return 1;
    }
}

//___________________________________________________________________________________________
// 6. Given a list of integers find the mode and the frequency of the mode. The mode in a
// list of numbers is the value that occurs the most often. If no number in the list
// is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`

// time complexity - O(n) - looks at each item twice, giving constant of two - but not nested

// function takes a sting of integers
// string split on ', '
// initialize an obj called countNums {}
//
// for each item in the array (from string split)
//      if countNums does not have that key already,
//          make key and set valule to 1
//      if countNums has that key
//          add one to countNums key of [1]
//
// initialize new array called max
//      for each pair in countNums
//          if key[1] is > max[1] - set pair as new max
//
// return mode = max[0], frequency of mode = max[1]
//

function findMode(string) {
    let nums = string.split(', ');
    let countNums = {};

    nums.forEach(num => {
        if (countNums[num]) {
            countNums[num] = countNums[num] + 1;
        } else {
            countNums[num];
            countNums[num] = 1;
        }
    });

    let max = [0, 0];

    for (const [key, value] of Object.entries(countNums)) {
        if (value > max[1]) {
            max = [key, value];
        }
    }

    return `Mode = ${max[0]}, Frequency of mode = ${max[1]}`;
}

// console.log(findMode(`1, 2, 3, 6, 10, 3, 5, 6, 3, 3`));
