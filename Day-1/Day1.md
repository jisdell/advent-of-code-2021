# advent-of-code-2021

Day 1: My answer is one result shy of the correct answer. I'm planning to revisit to try to find the correct way of pulling the answer.

Update: Solution was to convert the string objects to numbers.

Answer 2 was answered by tweaking the code from answer 1 to check if the sum of three numbers were greater than or less than the sum of the next three numbers

Duncan Feedback:
"You've done great so far! Everything is more of a nitpick than a problem:

In general, I'd recommend looking into using const and let instead of var. It's fine for what you've done so far, but in general you won't "need" var anymore (it's more of a legacy way to declare variables and comes with some baggage as such).

Appending count here works by all means and helps confirm that it's increasing when it should, but maybe you could include "Count: " so you know exactly what that number is. Optionally, you could include one final console.log() after the for loop that says what the final count is.
Have you looked into template strings yet? They're helpful when you find yourself doing a lot of string concatenation (i.e. 'someString ' + value + 'anotherString' + anotherValue)

Finally, notice how you're typing textByLine[i] and textByLine[i+1] a lot? It's not a huge deal, but what you could do is assign these each to variables inside the for loop for easier reference. You'll find this is especially helpful if you ever need to make changes, like if you were to use textByLine[i+2] for some reason, you'd only have to change the variable instead of each spot you have textByLine[i+1].

Day 2 looks good, same general styling feedback applies, but your approach is fine.