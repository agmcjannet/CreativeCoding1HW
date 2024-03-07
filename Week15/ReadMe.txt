Here is my Week 15 final project, a crossword puzzle!

I began this project by finding an old crossword puzzle with the clues by the New York Times. 
Using that as a template, I researched how to create a grid and made a grid for the squares of
the crossword. Adding the text boxes was next and proved to be difficult to size. I had initially 
made notes about the exact pixel measurements of all the grid and the canvas, but the way it 
processed didn't always follow that math, like the text boxes on the grid.

I wanted to keep the color palette simple. Crosswords are usually printed on newspapers, so I 
made the background grey to emulate that black and white nature of the printed game. The text
was next and I added a title and credits to the original crossword creator. Even simple things 
like this took quite a bit of time when formatting because even though I made notes of the math
and where I wanted everything to be pixel wise, the way the website processed didn't always align
with those notes. 

Next, I added the blacked out squares after doing more research on arrays and how I could create 
them using a row and column system. This helped to just plug in where the squares should be, but 
got a bit confusing at times when I would forget that the first row was technically row 0, not row 
1. Again, the formatting got a bit off and often had to be adjusted pixel by pixel. However, one of
the biggest challenges I came across was adding the numbers to the squares to correspond with the 
across and down clues. 

I first thought I could just add text over the boxes and adjust their position as needed, and then
I could also make them smaller and in the top left corner like how they're formated in crosswords in
print or like the NYT games app. However, after many trials, lots of research about how to code layer 
orders and failure everytime to get the text to appear over the box, I found I could put placeholder 
text within the boxes. This allowed the text to disappear once the player typed in the box and then 
reappear if they removed their letter. It also made the text slightly lighter and even closer to the 
NYT crossword games on their app. While doing all of these things I tried to keep my 'draw' section 
full of as many functions as possible to keep the code cleaner and more condensed. 

The most tedious part was adding the clues that would appear when selecting the corresponding dropdown.
I struggled to figure out how to make the dropdown say either across or down for each individual clue,
and eventually just settled on having it correspond with the clue number. Then if it had both an
across and down clue both would appear instead of just one. Filling out the clues often resulted in 
errors or misalignment with the dropdown selections. It was one of the most tedious parts along with 
putting in all the correct letters for the 'check answers' button.

One of my favorite features of the New York Times crossword games in their app is there's a function
that allows you to check to see if your answers are correct and if they're not it'll mark which ones
are wrong. I did this in my project by making the box appear red if the answers from the array I 
created were wrong. If the correct letter was inputed and then the button clicked the square would 
return to white/correct. 

This project was extremely challenging to apply all that we have learned in this semester of Creative
Coding I. Trying to make my code function as best it could while having to sacrifice some of my more 
ideas in favor of functionality and simplicity was difficult. I had a great time really applying the
skills we have been taught and am glad to have tried and been sucessful with something such as this 
crossword!
