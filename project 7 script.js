let story = 'Last weekend, I took literally the most beautiful trip to the beach. I went to the beach with my friends and we literally had a great time. The waves were literally crashing and the sand was literally so hot. We ate literally sandwiches and drank literally lemonade. It was literally the best day ever.';

let storyWords = story.split(' ');
console.log(storyWords);

console.log(storyWords.join(' '));

let count = 0;
storyWords.forEach(word => {
  count++;
});
console.log(count);

storyWords = storyWords.filter(word => word!== 'literally');
console.log(storyWords.join(' '));

storyWords = storyWords.map(word => {
  if (word === 'beautiful') {
    return 'stunning';
  } else {
    return word;
  }
});
console.log(storyWords.join(' '));

const badWordIndex = storyWords.findIndex(word => word === 'sandwiches');
storyWords[badWordIndex] = 'snacks';
console.log(storyWords.join(' '));

let longWord = storyWords.find(word => word.length > 10);
console.log(longWord);