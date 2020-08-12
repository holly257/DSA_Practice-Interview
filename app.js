// 1. Given a document, implement an algorithm to count the number of word occurrences.

// - Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
// - Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

//time complexity: linear - O(n) - beacuse it only goes through the loop once, but it has to go through every letter

console.log('test');

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
    let string = str.toLowerCase().replace(/[^\w\s]/gi, '')
    let item = '';

    for (let i=0; i<string.length+1; i++) {
        let char = string.charAt(i);
        
        if (char !== ' ') {
            item = item.concat('', char)
        } else {
            if (pairs[item]) {
                pairs[item] = pairs[item]+1;
            } else {
                pairs[item]
                pairs[item] = 1;
            }
            item = '';
        }
    }
    let occurances = '';

    for(const [key, value] of Object.entries(pairs)){
        occurances = occurances.concat('', key + ' = ' + value + ', ')
    }

    return occurances;
}

//last word not printing? 
console.log(wordOccurances('Hello there, how are you? Can you tell me how to get to the nearest Starbucks?'));

//___________________________________________________________________________________________
// 2. Given a sorted linked list, write an algorithm to delete all duplicate numbers
// from the sorted linked list.

//___________________________________________________________________________________________
// 3. Given a string, write an algorithm to count the number of words in the string that
// are palindromes. The output must include a list of the palindromes and the number of palindromes.

//  - Input: `"Dad gave mom a Tesla as a racecar"`
//  - Output: `Dad, mom, racecar, 3 Palindromes`

//function takes a string
//create array=[] & counter = 0 item = ''
//slice on ' ', for each sliced off word set to item -> check isPalin()
//call function to determine if its a palindrome
//////isPalin() takes word
//////find length of word,
//////middle = Math.floor(word.length / 2)
/////pop letters off front from 0 to middle, push them into array
//////if length was odd, ignore middle char - if even start at remaining char
//////if for each remaining char if array.pop item === continue,
////////if not return false, if no remaining chars then return true
//if palindrome:
////counter + 1
////array.push(item)
//once string.length = 0
////construct string that for each item in array, itt concatonates each item + ', '
////return string + {counter} + ' Palindromes'

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

//___________________________________________________________________________________________
// 6. Given a list of integers find the mode and the frequency of the mode. The mode in a
// list of numbers is the value that occurs the most often. If no number in the list
// is repeated, then there is no mode for the list.

// - Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
// - Output: `Mode = 3, Frequency of mode = 4`
