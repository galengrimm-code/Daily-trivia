// src/data/bibleQuestions.js
// KJV Bible questions - verified facts only with scripture references

const bibleQuestions = [
  { q: "According to Genesis 5:27, how many years did Methuselah live?", options: ["777 years", "869 years", "969 years", "999 years"], correct: 2, fact: "Genesis 5:27 - 'And all the days of Methuselah were nine hundred sixty and nine years: and he died.'" },
  { q: "How many books are in the King James Bible?", options: ["39", "52", "66", "73"], correct: 2, fact: "The KJV contains 39 Old Testament books and 27 New Testament books, totaling 66." },
  { q: "According to Genesis 7:12, how many days and nights did it rain during the flood?", options: ["7", "40", "100", "150"], correct: 1, fact: "Genesis 7:12 - 'And the rain was upon the earth forty days and forty nights.'" },
  { q: "In John 11:35, what is the shortest verse in the KJV Bible?", options: ["Jesus wept.", "Amen.", "Rejoice evermore.", "Pray without ceasing."], correct: 0, fact: "John 11:35 - 'Jesus wept.' contains only two words in the King James Version." },
  { q: "According to Matthew 10:2-4, how many apostles did Jesus choose?", options: ["7", "10", "12", "70"], correct: 2, fact: "Matthew 10:2 - 'Now the names of the twelve apostles are these...'" },
  { q: "In Genesis 2:7, what did God form man from?", options: ["Water", "Dust of the ground", "Clay", "Stone"], correct: 1, fact: "Genesis 2:7 - 'And the LORD God formed man of the dust of the ground.'" },
  { q: "According to Exodus 20, how many commandments did God give Moses?", options: ["5", "7", "10", "12"], correct: 2, fact: "The Ten Commandments are recorded in Exodus 20:1-17." },
  { q: "In Genesis 1:27, God created man in whose image?", options: ["Angels' image", "His own image", "Adam's image", "The heavens' image"], correct: 1, fact: "Genesis 1:27 - 'So God created man in his own image.'" },
  { q: "According to Matthew 1:23, what does 'Emmanuel' mean?", options: ["Son of David", "King of Kings", "God with us", "The Anointed One"], correct: 2, fact: "Matthew 1:23 - 'they shall call his name Emmanuel, which being interpreted is, God with us.'" },
  { q: "In Genesis 5:5, how many years did Adam live?", options: ["430 years", "777 years", "930 years", "969 years"], correct: 2, fact: "Genesis 5:5 - 'And all the days that Adam lived were nine hundred and thirty years: and he died.'" },
  { q: "According to John 2:1-11, where did Jesus perform his first miracle?", options: ["Jerusalem", "Bethlehem", "Cana of Galilee", "Nazareth"], correct: 2, fact: "John 2:1 - 'And the third day there was a marriage in Cana of Galilee.'" },
  { q: "In Jonah 1:17, how many days was Jonah in the belly of the great fish?", options: ["1 day", "3 days", "7 days", "40 days"], correct: 1, fact: "Jonah 1:17 - 'And Jonah was in the belly of the fish three days and three nights.'" },
  { q: "According to Genesis 7:2, how many of each clean beast did Noah take on the ark?", options: ["2", "7", "12", "14"], correct: 1, fact: "Genesis 7:2 - 'Of every clean beast thou shalt take to thee by sevens.'" },
  { q: "In Matthew 4:2, how many days did Jesus fast in the wilderness?", options: ["7 days", "12 days", "40 days", "70 days"], correct: 2, fact: "Matthew 4:2 - 'And when he had fasted forty days and forty nights, he was afterward an hungred.'" },
  { q: "According to Genesis 11:31, what city did Abram originally come from?", options: ["Haran", "Ur of the Chaldees", "Canaan", "Egypt"], correct: 1, fact: "Genesis 11:31 - 'they went forth...from Ur of the Chaldees.'" },
  { q: "In 1 Kings 11:3, how many wives did Solomon have?", options: ["100", "300", "500", "700"], correct: 3, fact: "1 Kings 11:3 - 'And he had seven hundred wives, princesses, and three hundred concubines.'" },
  { q: "According to Genesis 25:26, who was born holding Esau's heel?", options: ["Isaac", "Jacob", "Joseph", "Benjamin"], correct: 1, fact: "Genesis 25:26 - 'his hand took hold on Esau's heel; and his name was called Jacob.'" },
  { q: "In Daniel 6:16, into what was Daniel cast?", options: ["Fiery furnace", "Den of lions", "Prison", "The sea"], correct: 1, fact: "Daniel 6:16 - 'and they brought Daniel, and cast him into the den of lions.'" },
  { q: "According to Exodus 7:7, how old was Moses when he spoke to Pharaoh?", options: ["40 years", "60 years", "80 years", "120 years"], correct: 2, fact: "Exodus 7:7 - 'And Moses was fourscore years old...when they spake unto Pharaoh.'" },
  { q: "In Genesis 37:28, for how many pieces of silver was Joseph sold?", options: ["10", "20", "30", "40"], correct: 1, fact: "Genesis 37:28 - 'sold Joseph to the Ishmeelites for twenty pieces of silver.'" },
  { q: "According to Luke 2:7, where was Jesus laid after his birth?", options: ["A bed", "A basket", "A manger", "The ground"], correct: 2, fact: "Luke 2:7 - 'and laid him in a manger; because there was no room for them in the inn.'" },
  { q: "In Acts 9:36, what was Tabitha also called?", options: ["Mary", "Martha", "Dorcas", "Lydia"], correct: 2, fact: "Acts 9:36 - 'a certain disciple named Tabitha, which by interpretation is called Dorcas.'" },
  { q: "According to Genesis 4:1, who was the first son of Adam and Eve?", options: ["Abel", "Cain", "Seth", "Enoch"], correct: 1, fact: "Genesis 4:1 - 'And Adam knew Eve his wife; and she conceived, and bare Cain.'" },
  { q: "In Revelation 21:21, what are the twelve gates of the holy city made of?", options: ["Gold", "Silver", "Pearl", "Jasper"], correct: 2, fact: "Revelation 21:21 - 'And the twelve gates were twelve pearls; every several gate was of one pearl.'" },
  { q: "According to 1 Samuel 17:4, how tall was Goliath?", options: ["Six cubits and a span", "Seven cubits", "Eight cubits", "Ten cubits"], correct: 0, fact: "1 Samuel 17:4 - 'whose height was six cubits and a span' (about 9 feet 9 inches)." },
  { q: "In Genesis 6:3, to how many years did God limit man's days?", options: ["70 years", "100 years", "120 years", "150 years"], correct: 2, fact: "Genesis 6:3 - 'yet his days shall be an hundred and twenty years.'" },
  { q: "According to Matthew 27:5, how did Judas die?", options: ["By the sword", "He hanged himself", "He fell from a cliff", "He drowned"], correct: 1, fact: "Matthew 27:5 - 'and went and hanged himself.'" },
  { q: "In 2 Kings 2:11, how did Elijah go up to heaven?", options: ["He walked", "By a whirlwind", "Angels carried him", "He ascended a mountain"], correct: 1, fact: "2 Kings 2:11 - 'Elijah went up by a whirlwind into heaven.'" },
  { q: "According to Genesis 9:29, how many years did Noah live?", options: ["777 years", "850 years", "950 years", "969 years"], correct: 2, fact: "Genesis 9:29 - 'And all the days of Noah were nine hundred and fifty years.'" },
  { q: "In Psalm 23:1, what follows 'The LORD is my shepherd'?", options: ["I shall not want", "I shall not fear", "I shall not die", "I shall not sin"], correct: 0, fact: "Psalm 23:1 - 'The LORD is my shepherd; I shall not want.'" },
];

export default bibleQuestions;
