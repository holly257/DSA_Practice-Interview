# Mock Interview 4 - Technical Interview

### Preparing for the Interview
During technical interviews, keep the following in mind and try to follow these steps.

1. Understand the problem. It is very difficult to demonstrate your ability if you don’t understand the problem. The interviewer may be vague, and the explanation may be very brief. This can be done on purpose to see if you will clarify your assumption or if you will spend time moving in the wrong direction.

2. Go over an example. Take a minute to come up with an example that includes the input and output of the problem. This is not code – you should just tell your interviewer in plain English what you are thinking the problem should have as an input and what would be the output.

3. Start the algorithm in natural language (English). Think about the definition of an algorithm that you learned. It is a recipe to solve a problem. The recipe does not have to be perfect, in fact, you want to start with a naïve solution. Take a few minutes to come up with a solution and then start talking to the interviewer about your solution. Don’t code yet.

4. Walk through it with the interviewer. After you have a solution, walk through your approach with the interviewer. If you know of a better solution, let the interviewer know that as well. This step will generate a lot of conversation and will help you optimize the solution you came up with.

5. Implement. Now that you and your interviewer are on the same page, you can start coding. Sometimes interviewers are happy with pseudocode, but that is not always the case so ask your interviewer if they are expecting perfect working code or not. If the interviewers are providing a code editor for you to implement your solution, then it's likely they are expecting you to use good coding practices, so be mindful of that.

6. Analyze time complexity. At this point, your interviewer may ask you about the efficiency of your code, or they may not. Even if they don’t, you should assess the time complexity of your algorithm and talk about it with your interviewer. This will help you realize if you need to make modifications to your algorithm. This will also impress the interviewer that you are proactively thinking about making your algorithm better.

7. Test and debug. After you're done, walk through your code with your interviewer like you would during code review. Think about edge cases and any special cases. If you have not thought about these cases before, make a point that those areas could be improved. The point of this step is to let the interviewer know that you are not afraid to refactor your code and make it better.

### Practice Questions

Work through the practice questions below to prepare for your mock interview:

#### Done
1. Given a document, implement an algorithm to count the number of word occurrences.

- Input: `"Hello there, how are you? Can you tell me how to get to the nearest Starbucks?"`
- Output: `Hello = 1, there = 1, how = 2, are = 1, you = 2`

3. Given a string, write an algorithm to count the number of words in the string that are palindromes. The output must include a list of the palindromes and the number of palindromes.

 - Input: `"Dad gave mom a Tesla as a racecar"`
 - Output: `Dad, mom, racecar, 3 Palindromes`
 
4. Explain how a hash table works.
    - A hash table hold the key and and values associated with it. It is usually implemented using an array, with each slot staring out empty and being filled according to the hash function using hasing. Hasing is the process in which a key is mapped to a position in the hash table and the hash function is the function that determines the position for that key. The benefit to using a hash table is that it allows you to store data and find that data faster than you would in a linked list, since you would not have to traverse the whole list to find if an item exists or not. You would use the hash function to determine the locaiton of the item stored and then if there were values with that key, you would return them. If there were no values, you would know they do not exist anywhere else on the hashtable(unless you used open addressing for dealing with collisions). Hash maps has a search process time of O(1), where as linked lists typically have a search time of O(n).

#### In Progress

#### Next

2. Given a sorted linked list, write an algorithm to delete all duplicate numbers from the sorted linked list.



5. Given 2 linked lists, where each node in each linked list represents a character in a string, write a function compare() that compares the 2 strings, i.e., it returns 0 if both strings are the same, 1 if the 1st linked list is lexicographically greater, and -1 if the 2nd string is lexicographically greater.

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o` 
- Output: `1`

- Input: `list 1: B->i->l->b->o, list 2: B->i->l->b->o`
- Output: `0`

- Input: `list 1: B->i->l->b->o->a, list 2: B->i->l->b->o->b` 
- Output: `-1`

6. Given a list of integers find the mode and the frequency of the mode. The mode in a list of numbers is the value that occurs the most often. If no number in the list is repeated, then there is no mode for the list.

- Input: `1, 2, 3, 6, 10, 3, 5, 6, 3, 3`
- Output: `Mode = 3, Frequency of mode = 4`

If you want more practice here are some good resources:

http://blog.teamtreehouse.com/passing-google-interview-without-computer-science-degree