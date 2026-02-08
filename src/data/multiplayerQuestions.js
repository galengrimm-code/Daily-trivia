// src/data/multiplayerQuestions.js
// Separate question pool for multiplayer trivia games
// These questions are tracked separately from daily trivia

const multiplayerQuestions = {
  History: [
    { q: "Who was the first wife of King Henry VIII?", options: ["Catherine of Aragon", "Anne of Cleves", "Anne Boleyn", "Jane Seymour"], correct: 0 },
    { q: "In 1453, which important city fell?", options: ["Rome", "Athens", "Hamburg", "Constantinople"], correct: 3 },
    { q: "The collapse of the Soviet Union took place in which year?", options: ["1990", "1992", "1991", "1989"], correct: 2 },
    { q: "Which U.S. president was said to have been too honest to lie about chopping down a cherry tree?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correct: 1 },
    { q: "How was Socrates executed?", options: ["Poison", "Crucifixion", "Firing squad", "Decapitation"], correct: 0 },
  ],
  Geography: [
    { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
    { q: "Which country has the most natural lakes?", options: ["USA", "Russia", "Canada", "Finland"], correct: 2 },
    { q: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
    { q: "Which desert is the largest in the world?", options: ["Sahara", "Arabian", "Gobi", "Antarctic"], correct: 3 },
    { q: "Mount Everest is located on the border of which two countries?", options: ["India and China", "Nepal and Tibet", "Nepal and China", "India and Nepal"], correct: 2 },
  ],
  Science: [
    { q: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Au", "Ag"], correct: 2 },
    { q: "What planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 1 },
    { q: "What is the hardest natural substance on Earth?", options: ["Titanium", "Diamond", "Quartz", "Granite"], correct: 1 },
    { q: "How many bones are in the adult human body?", options: ["186", "206", "216", "256"], correct: 1 },
    { q: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 2 },
  ],
  Math: [
    { q: "What is the value of Pi to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], correct: 1 },
    { q: "What is 15% of 200?", options: ["25", "30", "35", "40"], correct: 1 },
    { q: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correct: 1 },
    { q: "What is the square root of 144?", options: ["10", "11", "12", "14"], correct: 2 },
    { q: "If a triangle has angles of 60°, 60°, and 60°, what type is it?", options: ["Isoceles", "Scalene", "Right", "Equilateral"], correct: 3 },
  ],
  Animals: [
    { q: "What is the largest mammal in the world?", options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], correct: 1 },
    { q: "How many legs does a spider have?", options: ["6", "8", "10", "12"], correct: 1 },
    { q: "What is a group of lions called?", options: ["Pack", "Herd", "Pride", "Flock"], correct: 2 },
    { q: "Which bird is known for its ability to mimic human speech?", options: ["Crow", "Parrot", "Owl", "Eagle"], correct: 1 },
    { q: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Leopard", "Gazelle"], correct: 1 },
  ],
  Bible: [
    { q: "How many days and nights did it rain during the flood?", options: ["7", "40", "100", "150"], correct: 1 },
    { q: "How many apostles did Jesus choose?", options: ["7", "10", "12", "70"], correct: 2 },
    { q: "In what city did Jesus perform his first miracle?", options: ["Jerusalem", "Bethlehem", "Cana of Galilee", "Nazareth"], correct: 2 },
    { q: "How many books are in the King James Bible?", options: ["39", "52", "66", "73"], correct: 2 },
    { q: "Who said, 'Am I my brother's keeper?'", options: ["Abel", "Adam", "Cain", "Seth"], correct: 2 },
  ],
};

export default multiplayerQuestions;
