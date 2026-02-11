// src/data/questions.js
// Master question pool - all questions in one place
// Each question has a 'pool' field: 'daily' or 'multiplayer'
//
// Categories: History, Geography, Science, Math, Animals, Bible, General Knowledge, Logic & Applied Geography
//
// Pool counts:
//   History: 286 daily, 5 multiplayer
//   Geography: 327 daily, 5 multiplayer
//   Science: 300 daily, 5 multiplayer
//   Math: 300 daily, 5 multiplayer
//   Animals: 300 daily, 5 multiplayer
//   Bible: 129 daily, 55 multiplayer
//   General Knowledge: 0 daily, 161 multiplayer

const questions = {
  "History": [
    {
      "q": "With which Greek philosopher would you associate the phrase, \"I know that I know nothing\"?",
      "options": [
        "Socrates",
        "Pythagoras",
        "Plato",
        "Aristotle"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the first wife of King Henry VIII?",
      "options": [
        "Catherine of Aragon",
        "Anne of Cleves",
        "Anne Boleyn",
        "Jane Seymour"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which U.S. President was in office when the Gulf War began?",
      "options": [
        "George H. W. Bush",
        "Ronald Regan",
        "George W. Bush ",
        "Richard Nixon"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country did the Eureka Rebellion, an 1856 battle against colonial rule, take place in?",
      "options": [
        "Canada",
        "India",
        "Brazil",
        "Australia"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Where was Portuguese explorer Ferdinand Magellan killed in 1521?",
      "options": [
        "The Phillipines",
        "Argentina",
        "Guam",
        "Canary Islands"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which historical conflict killed the most people?",
      "options": [
        "World War II",
        "Mongol conquests",
        "Three Kingdoms War",
        "Taiping Rebellion"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "According to scholarly estimates, what percentage of the world population at the time died due to Tamerlane's conquests?",
      "options": [
        "<1%",
        "5%",
        "3%",
        "1%"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following ancient Near Eastern peoples still exists as a modern ethnic group?",
      "options": [
        "Elamites",
        "Assyrians",
        "Hittites",
        "Babylonians"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which U.S. president was said to have been too honest to lie to his father about chopping down a cherry tree?",
      "options": [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "James Monroe"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these theoretical phycisists first predicted the existence of antimatter?",
      "options": [
        "Werner Heisenberg",
        "Niels Bohr",
        "Albert Einstein",
        "Paul Dirac"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The \"Trail of Tears\" was a result of which United States President's Indian Removal Policy?",
      "options": [
        "Martin Van Buren",
        "Harry S. Truman",
        "John Quincy Adams",
        "Andrew Jackson"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How was Socrates executed?",
      "options": [
        "Poison",
        "Crucifixion ",
        "Firing squad",
        "Decapitation"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In 1453, which important city fell?",
      "options": [
        "Rome",
        "Athens",
        "Hamburg",
        "Constantinople"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The collapse of the Soviet Union took place in which year?",
      "options": [
        "1990",
        "1992",
        "1991",
        "1891"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The Ottoman Empire was dissolved after their loss in which war?",
      "options": [
        "Second Balkan War",
        "Serbian Revolution",
        "Crimean War",
        "World War I"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "During the Mongolian invasions of Japan, what were the Mongol boats mostly stopped by?",
      "options": [
        "Tornados",
        "Economic depression",
        "Samurai",
        "Typhoons"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Herero genocide was perpetrated in Africa by which of the following colonial nations?",
      "options": [
        "Britain",
        "Belgium",
        "France",
        "Germany"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was found in 1946 by two young shepards near a cave?",
      "options": [
        "Dead Sea Scrolls",
        "The Blackbeard Chest",
        "The First Oaxaca Cave Sleeper",
        "Sheep"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which Apollo mission was the last one in NASA's Apollo program?",
      "options": [
        "Apollo 17",
        "Apollo 11",
        "Apollo 13",
        "Apollo 15"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In 1939, Britain and France declared war on Germany after it invaded which country?",
      "options": [
        "Poland",
        "Czechoslovakia",
        "Hungary",
        "Austria"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What did the abbreviation \"RMS\" stand for in the RMS Titanic in 1912?",
      "options": [
        "Royal Majesty Service",
        "Regulated Maelstrom Sensor",
        "Royal Mail Ship",
        "Regular Maritime Schedule "
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which one of these tanks was designed and operated by the United Kingdom?",
      "options": [
        "T-34",
        "M4 Sherman",
        "Tiger H1",
        "Tog II"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which King of England was faced with the Peasants' Revolt in 1381?",
      "options": [
        "Edward III",
        "Edward II",
        "Richard II",
        "Henry IV"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which U.S. president took part in the Potsdam Conference, where the Allies reached a peace settlement with Germany?",
      "options": [
        "Dwight D. Eisenhower",
        "Harry S. Truman",
        "Franklin D. Roosevelt",
        "Herbert Hoover"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the first ruler of Haiti after the country had gained its independence?",
      "options": [
        "Alexandre Petion",
        "Jean-Jacques Dessalines",
        "Henri Christophe",
        "Toussaint Louverture"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the historical name of Sri Lanka?",
      "options": [
        "Myanmar",
        "Ceylon",
        "Colombo",
        "Badulla"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which Louis was known as 'The Sun King of France'?",
      "options": [
        "Louis XV",
        "Louis XIII",
        "Louis XIV",
        "Louis XVI"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which one of these countries was NOT in the Central Powers during WWI?",
      "options": [
        "Spain",
        "Austria-Hungary",
        "Germany",
        "Turkey"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The Battle of the Somme in World War I took place in which country?",
      "options": [
        "Germany",
        "Italy",
        "France",
        "Austria"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the President of the United States during the signing of the Gadsden Purchase?",
      "options": [
        "Andrew Johnson",
        "Abraham Lincoln",
        "James Polk",
        "Franklin Pierce"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the last colony the UK ceded marking the end of the British Empire?",
      "options": [
        "Hong Kong",
        "Ireland",
        "Australia",
        "India"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these positions did the astronomer and physicist Isaac Newton not hold?",
      "options": [
        "Surveyor to the City of London",
        "Member of Parliament",
        "Warden of the Royal Mint",
        "Professor of Mathematics"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "List the following Iranic empires in chronological order:",
      "options": [
        "Median, Achaemenid, Sassanid, Parthian",
        "Achaemenid, Median, Parthian, Sassanid",
        "Achaemenid, Median, Sassanid, Parthian",
        "Median, Achaemenid, Parthian, Sassanid"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How old was Adolf Hitler when he died?",
      "options": [
        "47",
        "65",
        "43",
        "56"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "When did Norway become free from Sweden?",
      "options": [
        "1925",
        "1905",
        "1814",
        "1834"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the first man to travel into outer space twice?",
      "options": [
        "Yuri Gagarin",
        "Charles Conrad",
        "Vladimir Komarov",
        "Gus Grissom"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What year did the Boxing Day earthquake & tsunami occur in the Indian Ocean?",
      "options": [
        "2006",
        "2008",
        "2004",
        "2002"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country was an allied power in World War II?",
      "options": [
        "Soviet Union",
        "Japan",
        "Germany",
        "Italy"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Las Vegas casino was originally constructed and operated by mobster Bugsy Siegel?",
      "options": [
        "The Sands",
        "The MGM Grand",
        "The Sahara",
        "The Flamingo"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On what street did the 1666 Great Fire of London start?",
      "options": [
        "Pudding Lane",
        "Houses of Parliament",
        "St Paul's Cathedral",
        "Baker Street"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "When did construction of the Suez Canal finish?",
      "options": [
        "1859",
        "1860",
        "1869",
        "1850"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was Google founded?",
      "options": [
        "Feburary 7th, 2000",
        "October 9, 1997",
        "September 4, 1998",
        "December 12, 1989"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In the year 1900, what were the most popular first names given to boy and girl babies born in the United States?",
      "options": [
        "Joseph and Catherine",
        "William and Elizabeth",
        "George and Anne",
        "John and Mary"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When did the Battle of the Somme begin?",
      "options": [
        "July 2nd, 1916",
        "August 1st, 1916",
        "June 30th, 1916",
        "July 1st, 1916"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the capital of South Vietnam before the Vietnam War?",
      "options": [
        "Ho Chi Minh City",
        "Hanoi",
        "Hue",
        "Saigon"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": " What Russian automatic gas-operated assault rifle was developed in the Soviet Union in 1947, and is still popularly used today?",
      "options": [
        "MG 42",
        "M16",
        "AK-47",
        "RPK"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which war did the atomic bombings of Hiroshima and Nagasaki occur?",
      "options": [
        "World War II",
        "World War I",
        "Russo-Japanese War",
        "First Sino-Japanese War"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the name of the planned invasion of Japan towards the end of World War II?",
      "options": [
        "Operation Boarding Party",
        "Operation Downfall",
        "Operation Ironclad",
        "Operation Aflame"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the first sport to have been played on the moon?",
      "options": [
        "Golf",
        "Soccer",
        "Tennis",
        "Football"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What does the United States of America celebrate during the 4th of July?",
      "options": [
        "The signing of the Declaration of Independence",
        "The ratification of the Constitution",
        "The crossing of the Delaware River",
        "The anniversary of the Battle of Gettysburg"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which king was killed at the Battle of Bosworth Field in 1485? ",
      "options": [
        "Edward V",
        "Henry VII",
        "James I",
        "Richard III"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the first explorer to sail to North America?",
      "options": [
        "Christopher Columbus",
        "Leif Erikson",
        "Amerigo Vespucci",
        "Ferdinand Magellan"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which year did the Tokyo Subway Sarin Attack occur?",
      "options": [
        "2001",
        "1995",
        "2011",
        "1991"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which famous military commander marched an army, which included war elephants, over the Alps during the Second Punic War?",
      "options": [
        "Tiberius",
        "Alexander the Great",
        "Hannibal",
        "Garmanicus"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the oldest US state?",
      "options": [
        "Delaware",
        "Virginia",
        "Maine",
        "Rhode Island"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "After the 1516 Battle of Marj Dabiq, the Ottoman Empire took control of Jerusalem from which sultanate?",
      "options": [
        "Ayyubid",
        "Ummayyad",
        "Seljuq",
        "Mamluk"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the first Chancellor of a united Germany in 1871? ",
      "options": [
        "Otto Von Bismark",
        "Robert Koch",
        "Fredrick the 2nd",
        "Kaiser Wilhelm "
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year did the First World War end?",
      "options": [
        "1914",
        "1916",
        "1912",
        "1918"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year did the North American Video Game Crash occur?",
      "options": [
        "1982",
        "1993",
        "1970",
        "1983"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the name of the ship which was only a few miles away from the RMS Titanic when it struck an iceberg on April 14, 1912?",
      "options": [
        "Commerce",
        "Carpathia",
        "Californian",
        "Cristol"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Bohemian Revolt (1618-1620) started after Protestants in Prague did what to their Catholic Lords Regents?",
      "options": [
        "Insulted their mothers",
        "Threw them out of a window",
        "Locked them in stockades",
        "Hung them."
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the unofficial name for Germany between 1919 and 1933?",
      "options": [
        "Oesterreich ",
        "Weimar Republic",
        "German Democratic Republic",
        "Federal Republic of Germany"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "During which American Civil War campaign did Union troops dig a tunnel beneath Confederate troops to detonate explosives underneath them?",
      "options": [
        "Gettysburg Campagin",
        "Siege of Petersburg",
        "Antietam Campaign",
        "Siege of Vicksburg"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following African countries was most successful in resisting colonization?",
      "options": [
        "Ethiopia",
        "C&ocirc;te d'Ivoire",
        "Congo",
        "Namibia"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In 1547 who became the 1st Tsar of Russia",
      "options": [
        "Alexis of Russia",
        "Ivan the Terrible",
        "Mikhail Romanov",
        "Peter the Great"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "To what political party did Abraham Lincoln belong when elected POTUS?",
      "options": [
        "Democrat",
        "Republican",
        "Independent",
        "Whig"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the bloodiest event in United States history, in terms of casualties?",
      "options": [
        "D-Day",
        "September 11th",
        "Pearl Harbor",
        "Battle of Antietam"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was the Grand Patriotic War in the USSR concluded?",
      "options": [
        "September 2nd, 1945",
        "August 9th, 1945",
        "December 11th, 1945",
        "May 9th, 1945"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On which day did the attempted coup d'etat of 1991 in the Soviet Union begin?",
      "options": [
        "December 24",
        "August 19",
        "August 21",
        "December 26"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year did the Berlin Wall fall?",
      "options": [
        "1989",
        "1993",
        "1991",
        "1987"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which English king was married to Eleanor of Aquitaine?",
      "options": [
        "Henry V",
        "Henry I",
        "Henry II",
        "Richard I"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The minigun was designed in 1960 by which manufacturer.",
      "options": [
        "Colt Firearms",
        "Heckler & Koch",
        "General Electric",
        "Sig Sauer"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Nazi General was known as the \"Desert Fox\"?",
      "options": [
        "Gerd von Rundstadt",
        "Wilhelm Keitel",
        "Heinz Guderian ",
        "Erwin Rommel"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of his six wives was Henry VIII married to the longest?",
      "options": [
        "Jane Seymour",
        "Catherine Parr",
        "Catherine of Aragon",
        "Anne Boleyn"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Abolitionist John Brown raided the arsenal in which Virginia Town?",
      "options": [
        "Richmond",
        "Harrisonburg",
        "Martinsburg",
        "Harper's Ferry"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In what year did the nuclear power plant in Chernobyl melt down?",
      "options": [
        "1986",
        "1975",
        "1998",
        "1991"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following Physicists aided Nazi Germany in their production of a nuclear weapon?",
      "options": [
        "Max Planck",
        "Albert Einstein",
        "Werner Heisenberg",
        "John von Neumann"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The ancient city of Chichén Itz&aacute; was built by which civilization?",
      "options": [
        "Mayans",
        "Toltecs",
        "Incas",
        "Aztecs"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What were the first states to break away from Yugoslavia?",
      "options": [
        "Macedonia, Montenegro",
        "Slovenia, Macedonia",
        "Montenegro, Slovenia",
        "Slovenia, Croatia"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When did the Battle of the Bulge end?",
      "options": [
        "December 7, 1941",
        "January 25, 1945",
        "December 16, 1944",
        "August 6, 1945"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When did Norway get its constitution?",
      "options": [
        "1854",
        "1932",
        "1814",
        "1905"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Toussaint Louverture led a successful slave revolt in which country?",
      "options": [
        "Haiti",
        "France",
        "Cuba",
        "United States"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many manned moon landings have there been?",
      "options": [
        "1",
        "3",
        "7",
        "6"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the name of the famous Apache leader who died in 1909 at the age of 70?",
      "options": [
        "Sitting Bull",
        "Red Cloud",
        "Crazy Horse",
        "Geronimo"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When did the Crisis of the Third Century begin?",
      "options": [
        "242 AD",
        "235 BC",
        "235 AD",
        "210 AD"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which American civilization is the source of the belief that the world would end or drastically change on December 21st, 2012?",
      "options": [
        "The Aztecs",
        "The Incas",
        "The Mayans",
        "The Navajos"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Roman Emperor led the Roman Empire to reach its maximum territorial extent?",
      "options": [
        "Julius Caesar",
        "Trajan",
        "Claudius",
        "Constantine the Great"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who led the Communist Revolution of Russia?",
      "options": [
        "Vladimir Lenin",
        "Mikhail Gorbachev",
        "Vladimir Putin",
        "Joseph Stalin"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which country gifted the Statue of Liberty to the United States of America?",
      "options": [
        "Germany",
        "Spain",
        "France",
        "England"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which game was the Game of the Year in 2018?",
      "options": [
        "God of War",
        "A Way Out",
        "Red Dead Redemption 2",
        "Detroit: Become Human"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "When Christopher Columbus sailed to America, what was the first region he arrived in?",
      "options": [
        "The Bahamas Archipelago",
        "Nicaragua",
        "Isthmus of Panama",
        "Florida"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In the Seven Wonders of the World, which wonder is the only that has survived to this day?",
      "options": [
        "Colossus of Rhodes",
        "Lighthouse of Alexandria",
        "Statue of Zeus at Olympia",
        "Great Pyramid of Giza"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name of the Boeing B-29 that dropped the 'Little Boy' atomic bomb on Hiroshima?",
      "options": [
        "Enola Gay",
        "Full House",
        "The Great Artiste",
        "Necessary Evil"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When did Canada leave the confederation to become their own nation?",
      "options": [
        "July 1st, 1867",
        "July 1st, 1902",
        "July 1st, 1763",
        "July 1st, 1832"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was among those killed in the 2010 Smolensk, Russia plane crash tragedy?",
      "options": [
        "Pope John Paul II",
        "Bang-Ding Ow",
        "Albert Putin",
        "The Polish President"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who tutored Alexander the Great?",
      "options": [
        "King Philip",
        "Socrates",
        "Aristotle",
        "Plato"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "During the Spanish Civil War (1936), Francisco Franco fought for which political faction?",
      "options": [
        "Popular Front",
        "Republican Spain",
        "Nationalist Spain",
        "Papal State"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the Prime Minister of Japan when Japan declared war on the US?",
      "options": [
        "Hideki Tojo",
        "Fumimaro Konoe",
        "Michinomiya Hirohito",
        "Isoroku Yamamoto"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In what year did the Great Northern War, between Russia and Sweden, end?",
      "options": [
        "1727",
        "1721",
        "1726",
        "1724"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who was the first prime minister of Canada?",
      "options": [
        "Robert Borden",
        "Alexander Mackenzie",
        "John Abbott",
        "John Macdonald"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the name of the spy ring that helped the United States win the Revolutionary War?",
      "options": [
        "New York Spy Ring",
        "Culper Ring",
        "Washington's Spies",
        "Unnamed"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In 1961, an American B-52 aircraft crashed and nearly detonated two 4mt nuclear bombs over which US city?",
      "options": [
        "Jacksonville, Florida",
        "Goldsboro, North Carolina",
        "Hicksville, New York",
        "Conway, Arkansas"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the last Roman emperor in the Year of Four Emperors (69 AD)?",
      "options": [
        "Vitellius",
        "Galba",
        "Otho",
        "Vespasian"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What country joined the EU in 2013?",
      "options": [
        "Bulgaria",
        "Slovenia",
        "Turkey",
        "Croatia"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who invented the \"Flying Shuttle\" in 1738; one of the key developments in the industrialization of weaving?",
      "options": [
        "John Kay",
        "John Deere",
        "Richard Arkwright",
        "James Hargreaves"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who is believed to have been the first European to 'discover' the land of New Zealand?",
      "options": [
        "Abel Tasman",
        "John Cabot ",
        "Jeanne Baré",
        "Christopher Columbus"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The main objective of the German operation \"Case Blue\" during World War II was originally to capture what?",
      "options": [
        "Crimea",
        "Stalingrad",
        "Caucasus",
        "Voronezh"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which Nation did NOT have a Colony in modern-day North America?",
      "options": [
        "Spain",
        "Sweden",
        "Netherlands",
        "Portugal"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these countries was NOT a part of the Soviet Union?",
      "options": [
        "Uzbekistan",
        "Afghanistan",
        "Turkmenistan",
        "Kazakhstan"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the real name of the Albanian national leader Skanderbeg?",
      "options": [
        "Diturak Zhulati",
        "Gjergj Kastrioti",
        "Iskander Bejko",
        "Mirash Krasniki"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many times was Albert Einstein married in his lifetime?",
      "options": [
        "Five",
        "Thrice",
        "Twice",
        "Once"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How long did the Warsaw Uprising during World War II last?",
      "options": [
        "224 Days",
        "55 Days",
        "63 Days",
        "20 Days"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which day did World War I begin?",
      "options": [
        "January 28",
        "July 28",
        "June 28",
        "April 28"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the leader of the Communist Party of Yugoslavia ?",
      "options": [
        "Josip Broz Tito",
        "Aleskandar Petrovic",
        "Milos Obilic",
        "Karadjordje Petrovic"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "During WWII, in 1945, the United States dropped atomic bombs on the two Japanese cities of Hiroshima and what other city?",
      "options": [
        "Tokyo",
        "Kagoshima",
        "Nagasaki",
        "Kawasaki"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which countries participated in the Lobster War?",
      "options": [
        "France and Brazil",
        "United States and England",
        "Australia and New Zealand",
        "Canada and Norway"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the leader of Sweden in the Great Northern War?",
      "options": [
        "Per Albin Hansson",
        "Gustavus Adolphus",
        "Peter the Great",
        "Charles XII"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was Genghis Khan's real name?",
      "options": [
        "Temür",
        "&Ouml;gedei",
        "Temüjin",
        "Möngke"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The idea of Socialism was articulated and advanced by whom?",
      "options": [
        "Joseph Stalin",
        "Vladimir Lenin",
        "Karl Marx",
        "Vladimir Putin"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What Southeast Asian country was formerly known as 'Lan Xang'?",
      "options": [
        "Laos",
        "Vietnam",
        "Thailand",
        "Cambodia"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The pantheon in Rome was used to worship what god?",
      "options": [
        "Zeus",
        "Athena",
        "Any god they wanted",
        "Both Athena and Zeus"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Tsar Bomba, the most powerful nuclear bomb ever tested, had a yield of 50 megatons but theoretically had a maximum yield of how much?",
      "options": [
        "100 Megatons",
        "150 Megatons",
        "75 Megatons",
        "200 Megatons"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Before the American colonies switched to the Gregorian calendar in 1752, on what date did their new year start?",
      "options": [
        "June 1st",
        "March 25th",
        "September 25th",
        "December 1st"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "During World War I, which nation's monarchs were blood related?",
      "options": [
        "France, Russia, Germany",
        "Serbia, Russia, Croatia",
        "Germany, Spain, Austria",
        "England, Germany, Russia"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Panama Canal was finished under the administration of which U.S. president?",
      "options": [
        "Herbert Hoover",
        "Woodrow Wilson",
        "Franklin Delano Roosevelt",
        "Theodore Roosevelt"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who assassinated President James A. Garfield?",
      "options": [
        "Leon Czolgosz",
        "John Wilkes Booth",
        "Charles Guiteau",
        "Sirhan Sirhan"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which German field marshal was known as the `Desert Fox`?",
      "options": [
        "Wilhelm List",
        "Erwin Rommel",
        "Wolfram Freiherr von Richthofen",
        "Ernst Busch"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "When did Lithuania declare independence from the Soviet Union?",
      "options": [
        "December 25th, 1991",
        "December 5th, 1991",
        "March 11th, 1990",
        "April 20th, 1989"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "On what day did Germany invade Poland?",
      "options": [
        "December 7, 1941",
        "June 22, 1941",
        "July 7, 1937",
        "September 1, 1939"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the name of the chemical that was dropped on Vietnam during the Vietnam war?",
      "options": [
        "Phosgene",
        "Mustard Gas",
        "Hydrogen Cyanide",
        "Agent Orange"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which modern day country is the region that was known as Phrygia in ancient times?",
      "options": [
        "Syria",
        "Greece",
        "Egypt",
        "Turkey"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Under which name was Rodrigo Borgia made Pope?",
      "options": [
        "Rodrigo I",
        "John Paul II",
        "Pius VII",
        "Alexander VI"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the name given to the series of confrontations between the UK and Iceland over North Atlantic fishing rights?",
      "options": [
        "The Cod Wars",
        "The Halibut Wars",
        "The Mackerel Wars",
        "The Lobster Wars"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what dialogue did Socrates defend himself to the court of Athens? ",
      "options": [
        "The Euthyphro",
        "The Laws",
        "The Republic",
        "The Apology"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Greek god was the god of the Sun?",
      "options": [
        "Poseidon",
        "Hades",
        "Zeus",
        "Helios"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these countries remained neutral during World War II?",
      "options": [
        "Switzerland",
        "France",
        "United Kingdom",
        "Italy"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What event marked the start of World War II?",
      "options": [
        "Invasion of Russia (1942)",
        "Battle of Britain (1940)",
        "Invasion of Normandy (1944)",
        "Invasion of Poland (1939)"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Spain was formed in 1469 with the marriage of Isabella I of Castile and Ferdinand II of what other Iberian kingdom?",
      "options": [
        "Galicia",
        "Le&oacute;n",
        "Navarre",
        "Aragon"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When was Finland's 100th year of being independent?",
      "options": [
        "2018",
        "2015",
        "2017",
        "2016"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these founding fathers of the United States of America later became president?",
      "options": [
        "Roger Sherman",
        "Alexander Hamilton",
        "James Monroe",
        "Samuel Adams"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When did O, Canada officially become the national anthem?",
      "options": [
        "1980",
        "1950",
        "1880",
        "1920"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What age was King Henry V when he died?",
      "options": [
        "62",
        "87",
        "73",
        "35"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following physicists did NOT work on the Manhattan project?",
      "options": [
        "Richard Feynman",
        "Murray Gell-Mann",
        "J. Robert Oppenheimer",
        "John Von-Neumann"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Second Boer War in 1899 was fought where?",
      "options": [
        "Nepal",
        "Argentina",
        "South Africa",
        "Bulgaria"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In which year did the Invasion of Kuwait by Iraq occur?",
      "options": [
        "1990",
        "1986",
        "1988",
        "1992"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "One of the deadliest pandemics, the \"Spanish Flu\", killed off what percentage of the human world population at the time?",
      "options": [
        "6 to 10 percent",
        "3 to 6 percent",
        "1 to 3 percent",
        "less than 1 percent"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What disease crippled President Franklin D. Roosevelt and led him to help the nation find a cure? ",
      "options": [
        "Polio",
        "Cancer",
        "Meningitis",
        "HIV"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the bloodiest single-day battle during the American Civil War?",
      "options": [
        "The Battle of Antietam",
        "The Battles of Chancellorsville",
        "The Battle of Gettysburg",
        "The Siege of Vicksburg"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which naval battle was considered the turning point of the Pacific Ocean Theater during World War 2?",
      "options": [
        "Attack on Truk Island",
        "Attack on Pearl Harbor",
        "Battle of the Coral Sea",
        "Battle of Midway"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the first President of the People's Republic of China?",
      "options": [
        "Li Xiannian",
        "Dong Biwu",
        "Mao Zedong",
        "Liu Shaoqi"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the mnemonic device for remembering the fates of the wives of Henry VIII?",
      "options": [
        "Beheaded, Died, Divorced, Divorced, Beheaded, Survived",
        "Died, Beheaded, Divorced, Beheaded, Survived, Divorced",
        "Survived, Beheaded, Died, Divorced, Divorced, Beheaded",
        "Divorced, Beheaded, Died, Divorced, Beheaded, Survived"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What year was Canada founded in?",
      "options": [
        "1798",
        "1859",
        "1668",
        "1867"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the first president of the United States?",
      "options": [
        "George Washington",
        "James K. Polk",
        "Thomas Jefferson",
        "James Madison"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who famously coined the phrase \"I think, therefore I am\"?",
      "options": [
        "Descartes",
        "Aristotle",
        "Plato",
        "Shakespeare"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The United States Army Air Corps became the United States Air Force on what date?",
      "options": [
        "December 14, 1946",
        "October 27, 1945",
        "November 08, 1944",
        "September 18, 1947"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What year is considered to be the year that the British Empire ended?",
      "options": [
        "1997",
        "1971",
        "1981",
        "1986"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country attacked the USS Liberty on June 8, 1967?",
      "options": [
        "Israel",
        "Syria",
        "Saudi Arabia",
        "Iran"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What year did World War I begin?",
      "options": [
        "1914",
        "1905",
        "1919",
        "1925"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which country was Josef Stalin born in?",
      "options": [
        "Georgia",
        "Germany",
        "Russia",
        "Poland"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What number does the Roman numeral \"D\" stand for?",
      "options": [
        "100",
        "50",
        "1000",
        "500"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the original name of New York City?",
      "options": [
        "New Rome",
        "New London",
        "New Paris",
        "New Amsterdam"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following Presidents of the United States was assassinated?",
      "options": [
        "Chester Arthur",
        "William McKinley",
        "Lyndon Johnson",
        "Franklin Roosevelt"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The crown of the Empire State Building was originally built for what purpose?",
      "options": [
        "Airship Dock",
        "Flag Pole",
        "Antennae",
        "Lightning Rod"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the total length of the Titanic?",
      "options": [
        "882 ft | 268.8 m",
        "759 ft | 231.3 m",
        "1042 ft | 317.6 m",
        "825 ft | 251.5 m"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Adolf Hitler was born on which date?",
      "options": [
        "April 20, 1889",
        "June 12, 1889",
        "February 6, 1889",
        "April 16, 1889"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the main developer of the Suez Canal?",
      "options": [
        "Johann Lukas von Hildebrandt",
        "Louis-Eug&egrave;ne Cavaignac",
        "John Milton",
        "Ferdinand de Lesseps"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who assassinated Archduke Franz Ferdinand?",
      "options": [
        "Nedeljko Čabrinović",
        "Oskar Potiorek",
        "Ferdinand Cohen-Blind",
        "Gavrilo Princip"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What year did the Battle of Agincourt take place?",
      "options": [
        "1415",
        "1401",
        "1463",
        "1422"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following snipers has the highest amount of confirmed kills?",
      "options": [
        "Chris Kyle",
        "Vasily Zaytsev",
        "Craig Harrison",
        "Simo Häyhä"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country had an \"Orange Revolution\" between 2004 and 2005?",
      "options": [
        "Belarus",
        "Latvia",
        "Ukraine",
        "Lithuania"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was the city of Rome, Italy founded?",
      "options": [
        "753 BCE",
        "902 BCE",
        "524 BCE",
        "697 BCE"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In which year was Constantinople conquered by the Turks?",
      "options": [
        "1453",
        "1440",
        "1454",
        "1435"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The coat of arms of the King of Spain contains the arms from the monarchs of Castille, Leon, Aragon and which other former Iberian kingdom?",
      "options": [
        "Galicia",
        "Granada",
        "Catalonia",
        "Navarre"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Hagia Sophia was commissioned by which emperor of the Byzantine Empire?",
      "options": [
        "Constantine IV",
        "Theodosius the Great",
        "Arcadius",
        "Justinian I"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What year did Australia become a federation?",
      "options": [
        "1899",
        "1901",
        "1910",
        "1911"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the aim of the \"Umbrella Revolution\" in Hong Kong in 2014?",
      "options": [
        "Genuine universal suffrage",
        "Go back under British Rule",
        "Lower taxes",
        "Gaining Independence"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the name of the first permanent English settlement in America?",
      "options": [
        "New York",
        "St. John's",
        "Jamestown",
        "Plymouth"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where and when was the first cardboard box made for industrial use?",
      "options": [
        "United States, 1917",
        "United States, 1817",
        "England, 1817",
        "England, 1917"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The original Roman alphabet lacked the following letters EXCEPT:",
      "options": [
        "J",
        "X",
        "U",
        "W"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Against which country did the Dutch Republic fight the Eighty Years' War?",
      "options": [
        "Portugal",
        "England",
        "France",
        "Spain"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Pol Pot was the former dictator of which country?",
      "options": [
        "Vietnam",
        "Cambodia",
        "North Korea",
        "Laos"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What year were the Marian Reforms instituted in the Roman Republic?",
      "options": [
        "107 BCE",
        "102 CE",
        "264 BCE",
        "42 BCE"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these facilities was not present on the Titanic?",
      "options": [
        "Fainting room",
        "Squash court",
        "Kennel",
        "Turkish bath"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the name of one of the surviving palaces of Henry VIII located near Richmond, London?",
      "options": [
        "St James's Palace",
        "Coughton Court",
        "Buckingham Palace",
        "Hampton Court"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In 1720, England was in massive debt and became involved in the South Sea Bubble. Who was the main mastermind behind it?",
      "options": [
        "John Churchill",
        "Robert Harley",
        "Daniel Defoe",
        "John Blunt"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In which year did the First World War begin?",
      "options": [
        "1917",
        "1914",
        "1930",
        "1939"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Battle of Hastings was fought in which year?",
      "options": [
        "911",
        "1066",
        "1204",
        "1420"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When was the \"Siege of Leningrad\" lifted during World War II?",
      "options": [
        "March 1944",
        "November 1943",
        "January 1944",
        "September 1943"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When did the British hand-over sovereignty of Hong Kong back to China?",
      "options": [
        "1999",
        "1841",
        "1900",
        "1997"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "After his loss at the Battle of Waterloo, Napoleon Bonaparte was exiled to which island?",
      "options": [
        "St. Helena",
        "Elba",
        "Corsica",
        "Canary"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who crowned Charlemagne as Holy Roman Emperor on Christmas Day in 800?",
      "options": [
        "Pope Stephen V",
        "Pope Leo III",
        "Pope Valentine",
        "Pope Urban IV"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When did Jamaica receive its independence from England? ",
      "options": [
        "1492",
        "1963",
        "1962",
        "1987"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which years did the Battle of Gallipoli take place?",
      "options": [
        "1914 - 1918",
        "1914 - 1915",
        "1915 - 1918",
        "1915 - 1916"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these countries was sea charted in 1500 by the Portuguese maritime explorations?",
      "options": [
        "Brazil",
        "Madagascar",
        "Mozambique",
        "India"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "King Henry VIII was the second monarch of which European royal house?",
      "options": [
        "York",
        "Stuart",
        "Lancaster",
        "Tudor"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The seed drill was invented by which British inventor?",
      "options": [
        "J.J Thomson",
        "Charles Babbage",
        "Isaac Newton",
        "Jethro Tull"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In the War of the Pacific (1879 - 1883), Bolivia lost its access to the Pacific Ocean after being defeated by which South American country?",
      "options": [
        "Brazil",
        "Argentina",
        "Peru",
        "Chile"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "America's Strategic Defense System during the Cold War was nicknamed after this famous movie.",
      "options": [
        "Star Wars",
        "Alien",
        "Blade Runner",
        "Jaws"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the name of the US Navy spy ship which was attacked and captured by North Korean forces in 1968?",
      "options": [
        "USS North Carolina",
        "USS Constitution",
        "USS Indianapolis",
        "USS Pueblo"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was Napoleon Bonaparte's name before he changed it?",
      "options": [
        "Napoleone di Buonaparte",
        "Napole&atilde;o do Boaparte",
        "Naapolion van Bonijpaart",
        "Napoleona de Buenoparte"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "During the Wars of the Roses (1455 - 1487) which Englishman was dubbed \"the Kingmaker\"?",
      "options": [
        "Thomas Warwick",
        "Henry V",
        "Richard Neville",
        "Richard III"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When did the Byzantine Empire collapse?",
      "options": [
        "1299",
        "1353",
        "1498",
        "1453"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the name of the national hero of the Philippines who inspired and lead the Philippine Revolution against colonial Spain?",
      "options": [
        "Sim&oacute;n Bol&iacute;var",
        "José de San Mart&iacute;n",
        "José Rizal",
        "Benito Ju&aacute;rez"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the only US President to be elected four times?",
      "options": [
        "Franklin Roosevelt",
        "Abraham Lincoln",
        "George Washington",
        "Theodore Roosevelt"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following was Brazil was a former colony under?",
      "options": [
        "Portugal",
        "France",
        "The Netherlands",
        "Spain"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The creator of the Enigma Cypher and Machine was of what nationality?",
      "options": [
        "American",
        "British",
        "Polish",
        "German"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The ontological argument for the proof of God's existence is first attributed to whom?",
      "options": [
        "Anselm of Canterbury",
        "Aristotle",
        "Immanuel Kant",
        "René Descartes"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who is the creator of the soft drink, Dr. Pepper?",
      "options": [
        "James Wellington",
        "Johnson Hinsin",
        "Boris Heviltik",
        "Charles Alderton"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In what year did the Wall Street Crash take place?",
      "options": [
        "1932",
        "1930",
        "1929",
        "1925"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "These two countries held a commonwealth from the 16th to 18th century.",
      "options": [
        "Hutu and Rwanda",
        "North Korea and South Korea",
        "Bangladesh and Bhutan",
        "Poland and Lithuania"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these 1900s tanks were designed and built BEFORE the others?",
      "options": [
        "Renault FT",
        "Cromwell ",
        " Panzer IV",
        "M4 Sherman"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "From 1940 to 1942, what was the capital-in-exile of Free France ?",
      "options": [
        "Tunis",
        "Brazzaville",
        "Paris",
        "Algiers"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What year did the Vietnam War end?",
      "options": [
        "1978",
        "1967",
        "1969",
        "1975"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year was the famous 45 foot tall Hollywood sign first erected?",
      "options": [
        "1933",
        "1913",
        "1903",
        "1923"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who discovered Penicillin?",
      "options": [
        "Alexander Flemming",
        "Marie Curie",
        "Alfred Nobel",
        "Louis Pasteur"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which famous world leader is famed for the saying, \"Let them eat cake\", yet is rumored that he/she never said it at all?",
      "options": [
        "Czar Nicholas II",
        "Elizabeth I",
        "Henry VIII",
        "Marie Antoinette"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Joseph Smith was the founder of what religion?",
      "options": [
        "Buddhism",
        "Christianity",
        "Hinduism",
        "Mormonism"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year did Kentucky become the 15th state to join the union?",
      "options": [
        "1782",
        "1792",
        "1788",
        "1798"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year did Neil Armstrong and Buzz Aldrin land on the moon?",
      "options": [
        "1965",
        "1966",
        "1973",
        "1969"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following was not one of Joseph Stalin's ten blows during World War II?",
      "options": [
        "Crimean Offensive",
        "Leningrad-Novgorod Offensive",
        "Operation Bagration",
        "Vistula-Oder Offensive"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the code name for the German invasion of the Soviet Union in WW2?",
      "options": [
        "Operation Unthinkable",
        "Operation Barbarossa",
        "Operation Kaiserschlact",
        "Operation Molotov"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What year was the United States Declaration of Independence signed?",
      "options": [
        "1774",
        "1775",
        "1777",
        "1776"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In addition to his career as an astrologer and \"prophet\", Nostradamus published a 1555 treatise that included a section on what?",
      "options": [
        "Making jams and jellies",
        "Digging graves",
        "Cheating at card games",
        "Teaching parrots to talk"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "During what war did the \"Cuban Missile Crisis\" occur?",
      "options": [
        "World War I",
        "World War II",
        "Cold War",
        "Revolutionary War"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who rode on horseback to warn the Minutemen that the British were coming during the U.S. Revolutionary War?",
      "options": [
        "Henry Longfellow",
        "Thomas Paine",
        "Nathan Hale",
        "Paul Revere"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the code name for the Allied invasion of Southern France on August 15th, 1944?",
      "options": [
        "Operation Overlord",
        "Operation Torch",
        "Operation Dragoon",
        "Operation Market Garden"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Bohdan Khmelnytsky was which of the following?",
      "options": [
        "General Secretary of the Communist Party of the USSR",
        "Grand Prince of Novgorod",
        "Prince of Wallachia",
        "Leader of the Ukrainian Cossacks"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which dictator killed the most people?",
      "options": [
        "Mao Zedong",
        "Adolf Hitler",
        "Kim Il Sung",
        "Joseph Stalin"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the last emperor of Mexico?",
      "options": [
        "Andrés Manuel L&oacute;pez Obrador",
        "Napoleon III",
        "Agust&iacute;n de Iturbide",
        "Ferdinand Maximilian"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who was the first president born in the independent United States?",
      "options": [
        "John Adams",
        "George Washington",
        "James Monroe ",
        "Martin Van Buren"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year was the last natural case of smallpox documented?",
      "options": [
        "1977",
        "1990",
        "1980",
        "1982"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which one of these rulers did not belong to the Habsburg dynasty?",
      "options": [
        "Charles V",
        "Philip II",
        "Francis Joseph",
        "Philip V"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following countries was not an axis power during World War II?",
      "options": [
        " Soviet Union",
        "Japan",
        "Germany",
        "Italy"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the transfer of disease, crops, and people across the Atlantic shortly after the discovery of the Americas called?",
      "options": [
        "Transatlantic Slave Trade",
        "Triangle Trade",
        "The Columbian Exchange",
        "The Silk Road"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following is not in the Indo-European language family?",
      "options": [
        "Russian",
        "Hindi",
        "English",
        "Finnish"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was William Frederick Cody better known as?",
      "options": [
        "Billy the Kid",
        "Wild Bill Hickok",
        "Pawnee Bill",
        "Buffalo Bill"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which U.S. President was famously 'attacked' by a swimming rabbit?",
      "options": [
        "Jimmy Carter",
        "Lydon B. Johnson",
        "Ronald Reagan",
        "Gerald Ford"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which modern country is known as \"The Graveyard of Empires\"?",
      "options": [
        "Russia",
        "Iraq",
        "China",
        "Afghanistan"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What micro-state is considered to have the oldest constitution still in effect?",
      "options": [
        "Andorra",
        "San Marino",
        "Monaco",
        "Saint Kitts and Nevis"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In World War I, what was the name of the alliance of Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria?",
      "options": [
        "Authoritarian Alliance",
        "The Federation of Empires",
        "The Axis Powers",
        "The Central Powers"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was \"The Gadget\", the first nuclear device to be detonated, tested?",
      "options": [
        "August 6, 1945",
        "July 16, 1945",
        "June 22, 1945",
        "April 5, 1945"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the first American in space?",
      "options": [
        "Jim Lovell",
        "John Glenn",
        "Alan Shephard",
        "Neil Armstrong"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The Thirty Years War ended with which treaty?",
      "options": [
        "Peace of Westphalia",
        "Peace of Prague",
        "Treaty of Paris",
        "Treaty of Versailles"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many sonatas did Ludwig van Beethoven write?",
      "options": [
        "21",
        "32",
        "31",
        "50"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "On which day did construction start on \"The Pentagon\", the headquarters for the United States Department of Defense?",
      "options": [
        "September 2, 1962",
        "September 11, 1941",
        "January 15, 1943",
        "June 15, 1947"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who is attributed credit for recording the epic poem The Odyssey?",
      "options": [
        "Socrates",
        "Homer",
        "Odysseus",
        "Aristotle"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was the People's Republic of China founded?",
      "options": [
        "May 7, 1945",
        "April 3, 1947",
        "December 6, 1950",
        "October 1, 1949"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Joseph Stalin had a criminal past doing what?",
      "options": [
        "Robbing Trains",
        "Identity Fraud",
        "Tax Evasion",
        "Murder for Hire"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On which aircraft carrier did the Doolitte Raid launch from on April 18, 1942 during World War II?",
      "options": [
        "USS Lexington",
        "USS Enterprise",
        "USS Saratoga",
        "USS Hornet"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following battles is often considered as marking the beginning of the fall of the Western Roman Empire?",
      "options": [
        "Battle of Thessalonica",
        "Battle of Pollentia",
        "Battle of Adrianople",
        "Battle of Constantinople"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which one of these was not a beach landing site in the Invasion of Normandy?",
      "options": [
        "Gold",
        "Juno",
        "Sword",
        "Silver"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is NOT classified as a Semetic language?",
      "options": [
        "Maltese",
        "Sumerian",
        "Akkadian",
        "Mandaic"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When did the United States formally declare war on Japan, entering World War II?",
      "options": [
        "December 8, 1941",
        "June 6, 1944",
        "June 22, 1941",
        "September 1, 1939"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How long did World War II last?",
      "options": [
        "7 years",
        "6 years",
        "5 years",
        "4 years"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who was the first emperor of Rome?",
      "options": [
        "Augustus ",
        "Julius Caesar",
        "Pompey Magnus",
        "Claudius"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what prison was Adolf Hitler held in 1924?",
      "options": [
        "Landsberg Prison",
        "Spandau Prison",
        "Ebrach Abbey",
        "Hohenasperg"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was the United States National Security Agency established?",
      "options": [
        "November 4, 1952",
        " November 25, 2002",
        " July 1, 1973",
        "July 26, 1908"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The RMS Titanic sunk during her maiden voyage from Southampton, England to which American city?",
      "options": [
        "Philadelphia",
        "Boston ",
        "Washington",
        "New York City"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What happened on June 6, 1944?",
      "options": [
        "Attack on Pearl Harbor",
        "The Liberation of Paris",
        "D-Day",
        "Atomic bombings of Hiroshima and Nagasaki"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which building was set aflame on August 24th, 1812?",
      "options": [
        "Parliament Building",
        "Grand National Assembly Building",
        "Palace of the Nation",
        "The White House"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When did Spanish Peninsular War start?",
      "options": [
        "1806",
        "1810",
        "1809",
        "1808"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was Manfred von Richthofen's nickname?",
      "options": [
        "The Blue Serpent ",
        "The Germany Gunner",
        "The High Flying Ace",
        "The Red Baron"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In what year was the M1911 pistol designed?",
      "options": [
        "1911",
        "1917",
        "1899",
        "1907"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the name of the German offensive operation in October 1941 to take Moscow before winter?",
      "options": [
        "Case Blue",
        "Operation Barbarossa",
        "Operation Sunflower",
        "Operation Typhoon"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following ancient peoples was NOT classified as Hellenic (Greek)?",
      "options": [
        "Illyrians",
        "Ionians",
        "Achaeans",
        "Dorians"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "A collection of Sanskrit hymns and verses known as the Vedas are sacred texts in what religion?",
      "options": [
        "Judaism",
        "Buddhism",
        "Hinduism",
        "Islam"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following countries was the first to send an object into space?",
      "options": [
        "USA",
        "Russia",
        "China",
        "Germany"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the name commonly given to the ancient trade routes that connected the East and West of Eurasia?",
      "options": [
        "Salt Road",
        "Silk Road",
        "Spice Road",
        "Clay Road"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "John Moses Browning, the designer of the M1918 BAR (Browning Automatic Rifle) was a part of which religion?",
      "options": [
        "Jewish",
        "Atheist",
        "Mormon",
        "Catholic"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What historical event was Tchaikovsky's 1812 Overture referencing?",
      "options": [
        "The Napoleonic Wars",
        "The American War of 1812",
        "The Russian Revolution",
        "The Charge of the Light Brigade (Crimean War)"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which country was the Statue of Liberty built and exported to the United States of America?",
      "options": [
        "Spain",
        "France",
        "England",
        "Germany"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In what year did Texas secede from Mexico?",
      "options": [
        "1838",
        "1844",
        "1845",
        "1836"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Who was the Prime Minister of the United Kingdom for most of World War II?",
      "options": [
        "Neville Chamberlain",
        "Harold Macmillan",
        "Edward Heath",
        "Winston Churchill"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What nationality was sultan Saladin?",
      "options": [
        "Kurdish",
        "Syrian",
        "Arab",
        "Egyptian"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was Napoleon Bonaparte crowned emperor of the French? ",
      "options": [
        " October 15th 1804",
        " December 2nd 1804",
        " July 3rd 1802",
        " March 8th 1803"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was Adolf Hitler appointed as Chancellor of Germany?",
      "options": [
        "October 6, 1939",
        "February 27, 1933",
        "January 30, 1933",
        "September 1, 1939"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many women joined the United States Armed Services during World War II?",
      "options": [
        "225,000",
        "100,000",
        "500,000",
        "350,000"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When did Vesuvius destroy the city of Pompeii? ",
      "options": [
        "62 AD",
        "79 AD",
        "31 BC",
        "54 BC"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which infamous European traitor was known as \"the last person to enter Parliament with honest intentions\"?",
      "options": [
        "Robert Catesby",
        "Guy Fawkes",
        "Francis Tresham",
        "Everard Digby"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many years did the Hundred Years' War last?",
      "options": [
        "116",
        "100",
        "90",
        "101"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In relation to the British Occupation in Ireland, what does the IRA stand for.",
      "options": [
        "Irish Republican Army",
        "Irish Rebel Alliance",
        "Irish Reformation Army",
        "Irish-Royal Alliance"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How old was Lyndon B. Johnson when he assumed the role of President of the United States?",
      "options": [
        "54",
        "50",
        "60",
        "55"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In what year was the video game company Electronic Arts founded?",
      "options": [
        "1982",
        "2005",
        "1981",
        "1999"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In 1845, a series of wars named after which indigenous people began in New Zealand?",
      "options": [
        "Aborigines",
        "Polynesians",
        "Papuans",
        "Māori"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Pianist Frédéric Chopin was a composer of which musical era?",
      "options": [
        "Renaissance",
        "Baroque",
        "Classic",
        "Romantic"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Who painted the Mona Lisa?",
      "options": [
        "Michelangelo",
        "Leonardo da Vinci",
        "Raphael",
        "Donatello"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who was the first wife of King Henry VIII?",
      "options": [
        "Catherine of Aragon",
        "Anne of Cleves",
        "Anne Boleyn",
        "Jane Seymour"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "In 1453, which important city fell?",
      "options": [
        "Rome",
        "Athens",
        "Hamburg",
        "Constantinople"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "The collapse of the Soviet Union took place in which year?",
      "options": [
        "1990",
        "1992",
        "1991",
        "1989"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which U.S. president was said to have been too honest to lie about chopping down a cherry tree?",
      "options": [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "How was Socrates executed?",
      "options": [
        "Poison",
        "Crucifixion",
        "Firing squad",
        "Decapitation"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    { "q": "In what year did the American Revolutionary War begin?", "options": ["1765", "1770", "1775", "1781"], "correct": 2, "fact": "The war began in 1775 with the battles of Lexington and Concord.", "pool": "daily" },
    { "q": "Which battle is considered the first battle of the Revolutionary War?", "options": ["Bunker Hill", "Saratoga", "Lexington and Concord", "Yorktown"], "correct": 2, "fact": "The first shots were fired at Lexington and Concord in Massachusetts.", "pool": "daily" },
    { "q": "Who was the commander of the Continental Army?", "options": ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"], "correct": 1, "fact": "George Washington led the Continental Army throughout the war.", "pool": "daily" },
    { "q": "Which document officially declared independence from Britain?", "options": ["Articles of Confederation", "Treaty of Paris", "Declaration of Independence", "Bill of Rights"], "correct": 2, "fact": "The Declaration of Independence was adopted on July 4, 1776.", "pool": "daily" },
    { "q": "Which country became a major ally of the American colonies?", "options": ["Spain", "France", "Netherlands", "Germany"], "correct": 1, "fact": "France provided troops, ships, and funding to the colonies.", "pool": "daily" },
    { "q": "What winter camp nearly broke the Continental Army?", "options": ["Yorktown", "Trenton", "Valley Forge", "Saratoga"], "correct": 2, "fact": "Soldiers endured extreme cold and shortages at Valley Forge.", "pool": "daily" },
    { "q": "Which battle is considered the turning point of the Revolutionary War?", "options": ["Bunker Hill", "Saratoga", "Trenton", "Lexington"], "correct": 1, "fact": "The victory at Saratoga convinced France to support the colonies.", "pool": "daily" },
    { "q": "Who wrote most of the Declaration of Independence?", "options": ["John Adams", "Benjamin Franklin", "Thomas Jefferson", "James Madison"], "correct": 2, "fact": "Thomas Jefferson was the principal author of the document.", "pool": "daily" },
    { "q": "Which river did Washington famously cross on Christmas night?", "options": ["Hudson River", "Potomac River", "Delaware River", "Susquehanna River"], "correct": 2, "fact": "Washington crossed the Delaware River to surprise British troops.", "pool": "daily" },
    { "q": "Which battle effectively ended the Revolutionary War?", "options": ["Saratoga", "Yorktown", "Bunker Hill", "Trenton"], "correct": 1, "fact": "British surrender at Yorktown in 1781 ended major fighting.", "pool": "daily" },
    { "q": "What treaty officially ended the Revolutionary War?", "options": ["Treaty of Versailles", "Treaty of Paris", "Treaty of Ghent", "Treaty of London"], "correct": 1, "fact": "The Treaty of Paris was signed in 1783.", "pool": "daily" },
    { "q": "What group opposed British rule in the colonies?", "options": ["Loyalists", "Redcoats", "Patriots", "Royalists"], "correct": 2, "fact": "Patriots supported independence from Britain.", "pool": "daily" },
    { "q": "Which pamphlet helped inspire independence?", "options": ["The Federalist", "Common Sense", "The Rights of Man", "Poor Richard's Almanack"], "correct": 1, "fact": "Thomas Paine's Common Sense rallied public support.", "pool": "daily" },
    { "q": "Who was the British king during the Revolutionary War?", "options": ["George I", "George II", "George III", "George IV"], "correct": 2, "fact": "King George III ruled Britain during the conflict.", "pool": "daily" },
    { "q": "Which city served as the first capital of the United States?", "options": ["New York City", "Philadelphia", "Boston", "Washington, D.C."], "correct": 0, "fact": "New York City was the first capital under the Constitution in 1789.", "pool": "daily" },
    { "q": "In what year did the American Civil War begin?", "options": ["1856", "1860", "1861", "1865"], "correct": 2, "fact": "The Civil War began in 1861.", "pool": "multiplayer" },
    { "q": "Which event marked the start of the Civil War?", "options": ["Battle of Gettysburg", "Fort Sumter", "Emancipation Proclamation", "Antietam"], "correct": 1, "fact": "The war began when Confederate forces fired on Fort Sumter.", "pool": "multiplayer" },
    { "q": "Who was President of the United States during the Civil War?", "options": ["Ulysses S. Grant", "Andrew Johnson", "Abraham Lincoln", "James Buchanan"], "correct": 2, "fact": "Abraham Lincoln served as president throughout most of the war.", "pool": "multiplayer" },
    { "q": "Which states formed the Confederacy?", "options": ["Northern states", "Western states", "Southern states", "Border states"], "correct": 2, "fact": "Southern states seceded to form the Confederate States of America.", "pool": "multiplayer" },
    { "q": "What was the main cause of the Civil War?", "options": ["Trade disputes", "Territorial expansion", "Slavery", "Foreign invasion"], "correct": 2, "fact": "Slavery was the central issue leading to the war.", "pool": "multiplayer" },
    { "q": "Which battle is considered the bloodiest single day of the Civil War?", "options": ["Gettysburg", "Antietam", "Bull Run", "Shiloh"], "correct": 1, "fact": "Antietam had the highest number of casualties in one day.", "pool": "multiplayer" },
    { "q": "Which battle is considered the turning point of the Civil War?", "options": ["Gettysburg", "Vicksburg", "Antietam", "Bull Run"], "correct": 0, "fact": "The Union victory at Gettysburg shifted momentum.", "pool": "multiplayer" },
    { "q": "Who was the leading general of the Union Army?", "options": ["Robert E. Lee", "Stonewall Jackson", "Ulysses S. Grant", "William Sherman"], "correct": 2, "fact": "Ulysses S. Grant commanded Union forces late in the war.", "pool": "multiplayer" },
    { "q": "Who led the Confederate Army?", "options": ["Jefferson Davis", "Stonewall Jackson", "Robert E. Lee", "James Longstreet"], "correct": 2, "fact": "Robert E. Lee commanded the Confederate Army of Northern Virginia.", "pool": "multiplayer" },
    { "q": "What document freed slaves in Confederate states?", "options": ["Gettysburg Address", "13th Amendment", "Emancipation Proclamation", "Compromise of 1850"], "correct": 2, "fact": "The Emancipation Proclamation was issued in 1863.", "pool": "multiplayer" },
    { "q": "Which speech redefined the purpose of the war?", "options": ["Farewell Address", "Gettysburg Address", "Inaugural Address", "State of the Union"], "correct": 1, "fact": "Lincoln delivered the Gettysburg Address in 1863.", "pool": "multiplayer" },
    { "q": "Which city was the capital of the Confederacy?", "options": ["Atlanta", "Charleston", "Richmond", "Montgomery"], "correct": 2, "fact": "Richmond, Virginia served as the Confederate capital.", "pool": "multiplayer" },
    { "q": "Which general led the famous March to the Sea?", "options": ["Grant", "Sherman", "Lee", "McClellan"], "correct": 1, "fact": "William Tecumseh Sherman led the march through Georgia.", "pool": "multiplayer" },
    { "q": "Where did General Lee surrender to end the Civil War?", "options": ["Gettysburg", "Richmond", "Appomattox Court House", "Antietam"], "correct": 2, "fact": "Lee surrendered to Grant at Appomattox in 1865.", "pool": "multiplayer" },
    { "q": "Approximately how many soldiers died in the Civil War?", "options": ["200,000", "400,000", "620,000", "1 million"], "correct": 2, "fact": "About 620,000 soldiers died, making it the deadliest U.S. war.", "pool": "multiplayer" },
    { "q": "In what year did the Vietnam War officially begin for the United States?", "options": ["1955", "1960", "1964", "1968"], "correct": 0, "fact": "The U.S. officially began involvement in 1955 by supporting South Vietnam.", "pool": "daily" },
    { "q": "What incident led to major U.S. escalation in Vietnam?", "options": ["Tet Offensive", "Battle of Khe Sanh", "Gulf of Tonkin Incident", "Fall of Saigon"], "correct": 2, "fact": "The Gulf of Tonkin Incident in 1964 led to expanded U.S. military involvement.", "pool": "daily" },
    { "q": "Which country did the U.S. support during the Vietnam War?", "options": ["North Vietnam", "South Vietnam", "China", "Cambodia"], "correct": 1, "fact": "The U.S. supported South Vietnam against communist North Vietnam.", "pool": "daily" },
    { "q": "What type of warfare was commonly used by the Viet Cong?", "options": ["Naval warfare", "Guerrilla warfare", "Trench warfare", "Aerial combat"], "correct": 1, "fact": "The Viet Cong relied heavily on guerrilla tactics.", "pool": "daily" },
    { "q": "Which event marked a turning point in public opinion about the Vietnam War?", "options": ["Fall of Saigon", "Battle of Hue", "Tet Offensive", "Paris Peace Accords"], "correct": 2, "fact": "The Tet Offensive in 1968 shifted U.S. public opinion.", "pool": "daily" },
    { "q": "Which chemical agent was used by the U.S. to remove jungle cover?", "options": ["Agent Blue", "Agent Red", "Agent Orange", "Agent White"], "correct": 2, "fact": "Agent Orange was used to defoliate forests.", "pool": "daily" },
    { "q": "What year did U.S. combat troops leave Vietnam?", "options": ["1971", "1973", "1975", "1977"], "correct": 1, "fact": "U.S. combat troops withdrew in 1973.", "pool": "daily" },
    { "q": "Which city fell in 1975, ending the Vietnam War?", "options": ["Hanoi", "Hue", "Da Nang", "Saigon"], "correct": 3, "fact": "The fall of Saigon marked the end of the war.", "pool": "daily" },
    { "q": "Approximately how many U.S. soldiers died in the Vietnam War?", "options": ["25,000", "40,000", "58,000", "100,000"], "correct": 2, "fact": "About 58,000 U.S. service members were killed.", "pool": "multiplayer" },
    { "q": "Which U.S. president escalated troop levels significantly in Vietnam?", "options": ["John F. Kennedy", "Richard Nixon", "Lyndon B. Johnson", "Gerald Ford"], "correct": 2, "fact": "President Johnson greatly expanded U.S. involvement.", "pool": "multiplayer" },
    { "q": "What was the Ho Chi Minh Trail used for?", "options": ["Tourism", "Trade", "Military supply route", "Evacuation"], "correct": 2, "fact": "It was a key supply route for North Vietnamese forces.", "pool": "multiplayer" },
    { "q": "Which agreement aimed to end U.S. involvement in Vietnam?", "options": ["Geneva Accords", "Paris Peace Accords", "Treaty of Saigon", "ASEAN Pact"], "correct": 1, "fact": "The Paris Peace Accords were signed in 1973.", "pool": "multiplayer" },
    { "q": "Vietnam was divided along which parallel?", "options": ["17th", "25th", "32nd", "38th"], "correct": 0, "fact": "The country was divided at the 17th parallel.", "pool": "multiplayer" },
    { "q": "Which neighboring country was heavily bombed during the Vietnam War?", "options": ["Thailand", "Laos", "Malaysia", "Indonesia"], "correct": 1, "fact": "Laos was heavily bombed due to the Ho Chi Minh Trail.", "pool": "multiplayer" },
    { "q": "What was the U.S. policy of gradual withdrawal from Vietnam called?", "options": ["Containment", "Vietnamization", "Detente", "Rollback"], "correct": 1, "fact": "Vietnamization aimed to transfer combat roles to South Vietnam.", "pool": "multiplayer" },
    { "q": "In what year did the U.S. invade Afghanistan?", "options": ["2000", "2001", "2003", "2005"], "correct": 1, "fact": "The U.S. invaded Afghanistan in October 2001.", "pool": "daily" },
    { "q": "What event triggered the war in Afghanistan?", "options": ["Embassy bombings", "USS Cole attack", "September 11 attacks", "Iraq invasion"], "correct": 2, "fact": "The war followed the September 11, 2001 attacks.", "pool": "daily" },
    { "q": "Which group controlled Afghanistan before the U.S. invasion?", "options": ["Al-Qaeda", "Taliban", "ISIS", "Northern Alliance"], "correct": 1, "fact": "The Taliban ruled most of Afghanistan before 2001.", "pool": "daily" },
    { "q": "What was the main U.S. objective in Afghanistan?", "options": ["Oil access", "Nation-building", "Defeat Al-Qaeda", "Territorial expansion"], "correct": 2, "fact": "The primary goal was to dismantle Al-Qaeda.", "pool": "daily" },
    { "q": "Which city is the capital of Afghanistan?", "options": ["Kandahar", "Herat", "Kabul", "Mazar-i-Sharif"], "correct": 2, "fact": "Kabul is Afghanistan's capital city.", "pool": "daily" },
    { "q": "Which international alliance supported the U.S. in Afghanistan?", "options": ["UN", "EU", "NATO", "ASEAN"], "correct": 2, "fact": "NATO forces supported operations in Afghanistan.", "pool": "daily" },
    { "q": "How long did the Afghanistan War last?", "options": ["10 years", "15 years", "20 years", "25 years"], "correct": 2, "fact": "The war lasted from 2001 to 2021.", "pool": "daily" },
    { "q": "Which U.S. president announced the final withdrawal from Afghanistan?", "options": ["Barack Obama", "Donald Trump", "Joe Biden", "George W. Bush"], "correct": 2, "fact": "President Biden announced the final withdrawal in 2021.", "pool": "multiplayer" },
    { "q": "Which group regained control of Afghanistan in 2021?", "options": ["ISIS", "Northern Alliance", "Taliban", "Al-Qaeda"], "correct": 2, "fact": "The Taliban returned to power in 2021.", "pool": "multiplayer" },
    { "q": "What terrain made combat especially difficult in Afghanistan?", "options": ["Desert plains", "Dense jungle", "Mountainous regions", "Urban centers"], "correct": 2, "fact": "Afghanistan's mountains posed major logistical challenges.", "pool": "multiplayer" },
    { "q": "Which city served as a former Taliban stronghold?", "options": ["Kabul", "Herat", "Kandahar", "Bagram"], "correct": 2, "fact": "Kandahar was a Taliban stronghold.", "pool": "multiplayer" },
    { "q": "Which organization claimed responsibility for 9/11?", "options": ["ISIS", "Taliban", "Al-Qaeda", "Hezbollah"], "correct": 2, "fact": "Al-Qaeda carried out the September 11 attacks.", "pool": "multiplayer" },
    { "q": "What was the U.S.-led effort to train Afghan forces called?", "options": ["Operation Enduring Freedom", "Operation Freedom Sentinel", "Operation Resolute Support", "Operation Desert Storm"], "correct": 2, "fact": "Resolute Support focused on training Afghan forces.", "pool": "multiplayer" },
    { "q": "Which neighboring country played a major regional role in the Afghanistan War?", "options": ["India", "Iran", "Pakistan", "China"], "correct": 2, "fact": "Pakistan was a key regional player.", "pool": "multiplayer" },
    { "q": "Approximately how many U.S. service members died in Afghanistan?", "options": ["1,200", "1,800", "2,400", "3,500"], "correct": 2, "fact": "About 2,400 U.S. service members were killed.", "pool": "multiplayer" },
    { "q": "In what year did World War II begin?", "options": ["1937", "1939", "1941", "1945"], "correct": 1, "fact": "World War II began in 1939 when Germany invaded Poland.", "pool": "daily" },
    { "q": "Which event brought the U.S. into World War II?", "options": ["Battle of Britain", "Invasion of France", "Attack on Pearl Harbor", "D-Day"], "correct": 2, "fact": "Japan attacked Pearl Harbor on December 7, 1941.", "pool": "daily" },
    { "q": "Who was the leader of Nazi Germany?", "options": ["Joseph Stalin", "Adolf Hitler", "Winston Churchill", "Benito Mussolini"], "correct": 1, "fact": "Adolf Hitler ruled Germany during WWII.", "pool": "daily" },
    { "q": "What was D-Day?", "options": ["Germany's surrender", "Allied invasion of Normandy", "Battle of Britain", "Attack on Pearl Harbor"], "correct": 1, "fact": "D-Day was the Allied invasion of Normandy on June 6, 1944.", "pool": "daily" },
    { "q": "Which countries made up the Axis Powers?", "options": ["Germany, Italy, Japan", "Germany, France, Italy", "Japan, China, Italy", "Germany, Russia, Japan"], "correct": 0, "fact": "Germany, Italy, and Japan formed the Axis Powers.", "pool": "daily" },
    { "q": "Which countries were part of the Allied Powers in WWII?", "options": ["Germany, Italy, Japan", "U.S., U.K., Soviet Union", "France, Spain, Italy", "China, Japan, Korea"], "correct": 1, "fact": "The U.S., U.K., and Soviet Union were key Allies.", "pool": "daily" },
    { "q": "What was the name of the genocide carried out by Nazi Germany?", "options": ["The Purge", "The Holocaust", "The Final War", "Ethnic Cleansing"], "correct": 1, "fact": "The Holocaust led to the murder of six million Jews.", "pool": "daily" },
    { "q": "Which city was first hit by an atomic bomb?", "options": ["Nagasaki", "Tokyo", "Hiroshima", "Osaka"], "correct": 2, "fact": "Hiroshima was bombed on August 6, 1945.", "pool": "daily" },
    { "q": "Which city was hit by the second atomic bomb?", "options": ["Hiroshima", "Tokyo", "Kyoto", "Nagasaki"], "correct": 3, "fact": "Nagasaki was bombed on August 9, 1945.", "pool": "multiplayer" },
    { "q": "In what year did World War II end?", "options": ["1944", "1945", "1946", "1947"], "correct": 1, "fact": "World War II ended in 1945.", "pool": "multiplayer" },
    { "q": "Which leader gave the famous 'We shall fight on the beaches' speech?", "options": ["Franklin D. Roosevelt", "Winston Churchill", "Joseph Stalin", "Charles de Gaulle"], "correct": 1, "fact": "Winston Churchill delivered the speech in 1940.", "pool": "multiplayer" },
    { "q": "Which battle was the largest naval battle in history?", "options": ["Pearl Harbor", "Midway", "Coral Sea", "Leyte Gulf"], "correct": 3, "fact": "The Battle of Leyte Gulf was the largest naval battle ever.", "pool": "multiplayer" },
    { "q": "Which U.S. president served during most of World War II?", "options": ["Harry Truman", "Herbert Hoover", "Franklin D. Roosevelt", "Dwight Eisenhower"], "correct": 2, "fact": "FDR served through most of the war.", "pool": "multiplayer" },
    { "q": "What was the name of the U.S. project to build the atomic bomb?", "options": ["Project Apollo", "Manhattan Project", "Operation Overlord", "Project Trinity"], "correct": 1, "fact": "The Manhattan Project developed nuclear weapons.", "pool": "multiplayer" },
    { "q": "Which German city was divided after World War II?", "options": ["Munich", "Berlin", "Hamburg", "Frankfurt"], "correct": 1, "fact": "Berlin was divided into East and West after the war.", "pool": "multiplayer" },
    { "q": "What years did the Cold War generally span?", "options": ["1939–1945", "1945–1991", "1950–1989", "1961–1990"], "correct": 1, "fact": "The Cold War began after WWII and ended with the collapse of the Soviet Union.", "pool": "daily" },
    { "q": "Which two superpowers were primarily involved in the Cold War?", "options": ["U.S. and China", "U.S. and Germany", "U.S. and Soviet Union", "Britain and Soviet Union"], "correct": 2, "fact": "The Cold War was mainly between the United States and the Soviet Union.", "pool": "daily" },
    { "q": "What ideology did the United States promote during the Cold War?", "options": ["Communism", "Socialism", "Capitalism", "Monarchy"], "correct": 2, "fact": "The U.S. promoted capitalism and democratic governance.", "pool": "daily" },
    { "q": "What ideology did the Soviet Union promote?", "options": ["Capitalism", "Fascism", "Communism", "Democracy"], "correct": 2, "fact": "The Soviet Union followed a communist system.", "pool": "daily" },
    { "q": "What was the main goal of the U.S. policy of containment?", "options": ["Eliminate communism", "Spread democracy worldwide", "Stop the spread of communism", "Overthrow the Soviet Union"], "correct": 2, "fact": "Containment aimed to prevent communism from spreading to new countries.", "pool": "daily" },
    { "q": "Which organization was formed as a military alliance during the Cold War?", "options": ["United Nations", "NATO", "League of Nations", "Red Cross"], "correct": 1, "fact": "NATO was formed in 1949 to counter Soviet influence.", "pool": "daily" },
    { "q": "What alliance was created by the Soviet Union in response to NATO?", "options": ["Warsaw Pact", "Iron Curtain", "Comintern", "Red Alliance"], "correct": 0, "fact": "The Warsaw Pact was formed in 1955.", "pool": "daily" },
    { "q": "What was the Iron Curtain?", "options": ["A physical wall", "A military base", "A political and ideological divide", "A peace treaty"], "correct": 2, "fact": "The Iron Curtain described the division between Eastern and Western Europe.", "pool": "daily" },
    { "q": "Which city was divided into East and West during the Cold War?", "options": ["Vienna", "Warsaw", "Berlin", "Prague"], "correct": 2, "fact": "Berlin was divided into communist East and democratic West.", "pool": "daily" },
    { "q": "What structure was built in 1961 to separate East and West Berlin?", "options": ["Iron Wall", "Berlin Wall", "Checkpoint Charlie", "Soviet Barrier"], "correct": 1, "fact": "The Berlin Wall became a powerful symbol of the Cold War.", "pool": "daily" },
    { "q": "Which U.S. agency was responsible for foreign intelligence gathering?", "options": ["FBI", "CIA", "NSA", "DHS"], "correct": 1, "fact": "The CIA played a major role in Cold War espionage.", "pool": "daily" },
    { "q": "Which Soviet agency served a role similar to the CIA?", "options": ["KGB", "GRU", "NKVD", "FSB"], "correct": 0, "fact": "The KGB handled intelligence and internal security.", "pool": "daily" },
    { "q": "What was the Space Race?", "options": ["A race to colonize Mars", "Competition to explore outer space", "Nuclear weapons testing", "Military satellite defense"], "correct": 1, "fact": "The Space Race symbolized technological competition.", "pool": "daily" },
    { "q": "Which country launched the first artificial satellite, Sputnik?", "options": ["United States", "United Kingdom", "Soviet Union", "China"], "correct": 2, "fact": "Sputnik was launched by the Soviet Union in 1957.", "pool": "multiplayer" },
    { "q": "What doctrine stated that nuclear war would result in total destruction for both sides?", "options": ["Containment", "Domino Theory", "Mutually Assured Destruction", "Deterrence Policy"], "correct": 2, "fact": "MAD discouraged nuclear war through fear of annihilation.", "pool": "multiplayer" },
    { "q": "Which crisis brought the U.S. and USSR closest to nuclear war?", "options": ["Berlin Blockade", "Korean War", "Cuban Missile Crisis", "Vietnam War"], "correct": 2, "fact": "The Cuban Missile Crisis occurred in October 1962.", "pool": "multiplayer" },
    { "q": "Which country did the Soviet Union place nuclear missiles in during the Cuban Missile Crisis?", "options": ["Cuba", "Vietnam", "East Germany", "Poland"], "correct": 0, "fact": "Missiles were placed in Cuba, just 90 miles from the U.S.", "pool": "multiplayer" },
    { "q": "What term describes countries under Soviet influence during the Cold War?", "options": ["Allied Nations", "Buffer States", "Non-Aligned Movement", "Satellite States"], "correct": 3, "fact": "Satellite states were influenced by the Soviet Union.", "pool": "multiplayer" },
    { "q": "Which war was considered a Cold War proxy conflict?", "options": ["World War II", "Korean War", "Spanish-American War", "Gulf War"], "correct": 1, "fact": "The Korean War was fought between communist and non-communist forces.", "pool": "multiplayer" },
    { "q": "What was the purpose of the Marshall Plan?", "options": ["Rebuild Western Europe", "Arm NATO", "Spy on the USSR", "Colonize Asia"], "correct": 0, "fact": "The Marshall Plan helped rebuild Europe and limit communist influence.", "pool": "multiplayer" },
    { "q": "Which U.S. senator led aggressive anti-communist investigations?", "options": ["Joseph McCarthy", "John Kennedy", "Richard Nixon", "Lyndon Johnson"], "correct": 0, "fact": "McCarthyism became associated with fear-driven accusations.", "pool": "multiplayer" },
    { "q": "What term describes the fear of communist infiltration in the U.S.?", "options": ["Red Alert", "Red Scare", "Iron Fear", "Cold Panic"], "correct": 1, "fact": "The Red Scare caused widespread suspicion and investigations.", "pool": "multiplayer" },
    { "q": "Which event symbolized the end of the Cold War?", "options": ["Cuban Missile Crisis", "Fall of the Berlin Wall", "Vietnam War end", "Korean Armistice"], "correct": 1, "fact": "The Berlin Wall fell on November 9, 1989.", "pool": "multiplayer" },
    { "q": "What happened to the Soviet Union in 1991?", "options": ["It joined NATO", "It collapsed", "It expanded", "It renamed itself"], "correct": 1, "fact": "The Soviet Union dissolved on December 26, 1991, ending the Cold War.", "pool": "multiplayer" },
    { "q": "What hotline was created after the Cuban Missile Crisis?", "options": ["Red Phone", "White Line", "Washington-Moscow Hotline", "Cold Line"], "correct": 2, "fact": "The hotline allowed direct communication to prevent nuclear war.", "pool": "multiplayer" },
    { "q": "Which U.S. president authorized the creation of the CIA?", "options": ["Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy"], "correct": 1, "fact": "President Truman signed the National Security Act of 1947 creating the CIA.", "pool": "daily" },
    { "q": "What does the acronym CIA stand for?", "options": ["Central Intelligence Agency", "Civil Investigation Authority", "Central Information Administration", "Covert Intelligence Association"], "correct": 0, "fact": "CIA stands for Central Intelligence Agency.", "pool": "daily" },
    { "q": "What does KGB stand for in Russian?", "options": ["Committee for State Security", "Central Government Bureau", "Council of Soviet Defense", "Communist Guard Authority"], "correct": 0, "fact": "KGB translates to Committee for State Security.", "pool": "daily" },
    { "q": "Which Cold War president was a former WWII general?", "options": ["John F. Kennedy", "Dwight D. Eisenhower", "Richard Nixon", "Lyndon B. Johnson"], "correct": 1, "fact": "Eisenhower was Supreme Allied Commander in WWII.", "pool": "daily" },
    { "q": "What was the primary role of the CIA during the Cold War?", "options": ["Domestic law enforcement", "Foreign intelligence gathering", "Border security", "Military command"], "correct": 1, "fact": "The CIA focused on gathering foreign intelligence.", "pool": "daily" },
    { "q": "Which agency handled domestic intelligence in the United States?", "options": ["CIA", "NSA", "FBI", "DHS"], "correct": 2, "fact": "The FBI handled domestic intelligence and counterintelligence.", "pool": "daily" },
    { "q": "What famous spy plane was used by the CIA?", "options": ["SR-71 Blackbird", "B-52", "U-2", "F-117"], "correct": 2, "fact": "The U-2 spy plane flew high-altitude reconnaissance missions.", "pool": "daily" },
    { "q": "Which incident involved the shooting down of a U-2 spy plane?", "options": ["Berlin Crisis", "Cuban Missile Crisis", "U-2 Incident", "Bay of Pigs"], "correct": 2, "fact": "The U-2 Incident occurred in 1960 over the Soviet Union.", "pool": "daily" },
    { "q": "Which pilot was captured after his U-2 plane was shot down?", "options": ["Francis Gary Powers", "Neil Armstrong", "Buzz Aldrin", "Charles Lindbergh"], "correct": 0, "fact": "Francis Gary Powers survived and was captured by the Soviets.", "pool": "daily" },
    { "q": "What was the Bay of Pigs?", "options": ["A Soviet invasion", "A failed CIA-backed invasion of Cuba", "A Cuban missile base", "A peace treaty"], "correct": 1, "fact": "The Bay of Pigs invasion failed in 1961.", "pool": "daily" },
    { "q": "Which president approved the Bay of Pigs invasion?", "options": ["Dwight D. Eisenhower", "John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon"], "correct": 1, "fact": "President Kennedy approved the operation shortly after taking office.", "pool": "daily" },
    { "q": "What was the main purpose of CIA covert operations?", "options": ["Public diplomacy", "Secret influence or regime change", "Humanitarian aid", "Military training"], "correct": 1, "fact": "Covert operations aimed to influence events without open conflict.", "pool": "daily" },
    { "q": "Which leader previously worked in the KGB?", "options": ["Joseph Stalin", "Nikita Khrushchev", "Mikhail Gorbachev", "Vladimir Putin"], "correct": 3, "fact": "Putin served as a KGB officer before entering politics.", "pool": "daily" },
    { "q": "What gadget famously concealed a Soviet microfilm?", "options": ["Pen camera", "Umbrella gun", "Hollow coin", "Cigarette lighter"], "correct": 2, "fact": "A hollow nickel once concealed Soviet microfilm.", "pool": "multiplayer" },
    { "q": "What was the name of the Soviet listening device hidden in the U.S. embassy seal?", "options": ["The Bug", "The Thing", "Red Ear", "Iron Mic"], "correct": 1, "fact": "'The Thing' was a passive listening device discovered in 1952.", "pool": "multiplayer" },
    { "q": "Which CIA operation involved mind-control experiments?", "options": ["Operation Mockingbird", "Operation Paperclip", "MKUltra", "Operation Ajax"], "correct": 2, "fact": "MKUltra researched psychological and behavioral control.", "pool": "multiplayer" },
    { "q": "Operation Paperclip brought which group to the U.S.?", "options": ["Soviet spies", "German scientists", "Cuban refugees", "British agents"], "correct": 1, "fact": "German scientists were recruited after WWII.", "pool": "multiplayer" },
    { "q": "Which intelligence agency focused on signals intelligence?", "options": ["CIA", "FBI", "NSA", "DIA"], "correct": 2, "fact": "The NSA specializes in communications intelligence.", "pool": "multiplayer" },
    { "q": "Which Cold War project decrypted Soviet spy communications?", "options": ["Watergate", "Iran-Contra", "Venona Project", "Red Scare"], "correct": 2, "fact": "Venona revealed Soviet espionage within the U.S. government.", "pool": "multiplayer" },
    { "q": "What was Checkpoint Charlie?", "options": ["CIA headquarters", "Berlin Wall crossing point", "NATO base", "KGB prison"], "correct": 1, "fact": "Checkpoint Charlie was a major Berlin Wall crossing.", "pool": "multiplayer" },
    { "q": "Which Cold War president resigned after a scandal?", "options": ["Lyndon B. Johnson", "Richard Nixon", "Gerald Ford", "Jimmy Carter"], "correct": 1, "fact": "Nixon resigned following the Watergate scandal.", "pool": "multiplayer" },
    { "q": "What tunnel did the CIA and MI6 secretly build in Berlin?", "options": ["Operation Gold", "Iron Tunnel", "Red Line", "Berlin Link"], "correct": 0, "fact": "Operation Gold tapped Soviet communication lines.", "pool": "multiplayer" },
    { "q": "Which Cold War phrase described espionage secrecy?", "options": ["Loose lips sink ships", "Trust but verify", "Need to know", "Iron fist"], "correct": 2, "fact": "'Need to know' limited access to sensitive information.", "pool": "multiplayer" },
    { "q": "Which city was the center of Cold War espionage?", "options": ["Paris", "London", "Berlin", "Vienna"], "correct": 2, "fact": "Berlin was a hotspot for spies from both sides.", "pool": "multiplayer" },
    { "q": "What items were often used to conceal spy messages?", "options": ["Shoes", "Coins", "Newspapers", "All of the above"], "correct": 3, "fact": "Spies hid messages in everyday objects.", "pool": "multiplayer" }
  ],
  "Geography": [
    {
      "q": "What is the name of the ocean that Hawaii is located in?",
      "options": [
        "Arctic",
        "Pacific",
        "Indian",
        "Atlantic"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many counties in the Republic of Ireland.",
      "options": [
        "26",
        "30",
        "28",
        "32"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The body of the Egyptian Sphinx was based on which animal?",
      "options": [
        "Bull",
        "Horse",
        "Lion",
        "Dog"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many countries does Mexico border?",
      "options": [
        "2",
        "4",
        "3",
        "1"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "On which continent is the country of Angola located?",
      "options": [
        "Africa",
        "Europe",
        "South America",
        "Asia"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Denmark?",
      "options": [
        "Aarhus",
        "Odense",
        "Aalborg",
        "Copenhagen"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Mauritius?",
      "options": [
        "Port Louis",
        "Port-au-Prince",
        "Port Vila",
        "Port Moresby"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these countries is \"doubly landlocked\" (surrounded entirely by one or more landlocked countries)?",
      "options": [
        "Uzbekistan",
        "Ethiopia",
        "Bolivia",
        "Switzerland"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which country is the city of Rio de Janeiro?",
      "options": [
        "Brazil",
        "Peru",
        "Chile",
        "Venezuela"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is the longest river in Europe?",
      "options": [
        "Ural",
        "Volga",
        "Danube",
        "Dnieper"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Bir Tawil, an uninhabited track of land claimed by no country, is located along the border of which two countries?",
      "options": [
        "Israel and Jordan",
        "Chad and Libya",
        "Iraq and Saudi Arabia",
        "Egypt and Sudan"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The prefix Sino- (As in Sino-American) is used to refer to what nationality?",
      "options": [
        "Russian",
        "Chinese",
        "Japanese",
        "Indian"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Australia?",
      "options": [
        "Melbourne",
        "Sydney",
        "Brisbane",
        "Canberra"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest freshwater lake by volume?",
      "options": [
        "Lake Baikal",
        "Lake Huron",
        "Lake Superior",
        "Lake Michigan"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Greenland?",
      "options": [
        "Nuuk",
        "Maniitsoq",
        "Narsaq",
        "Sisimiut"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following countries banned the use of personal genetic ancestry tests?",
      "options": [
        "Austria",
        "Canada",
        "Sweden",
        "Germany"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the African nation of Zimbabwe formerly known as?",
      "options": [
        "Zambia",
        "Mozambique",
        " Bulawayo",
        "Rhodesia"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The historical city Timbuktu is located in which West African country?",
      "options": [
        "Senegal",
        "Niger",
        "Burkina Faso",
        "Mali"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country was NOT formerly part of Yugoslavia?",
      "options": [
        "Croatia",
        "Albania",
        "Serbia",
        "Macedonia"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the county seat of King County, Washington?",
      "options": [
        "Seattle",
        "Skykomish",
        "Enumclaw",
        "Bellevue"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the official language of Bhutan?",
      "options": [
        "Ladakhi",
        "Dzongkha",
        "Karen",
        "Groma"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the Polish city known to Germans as Danzig?",
      "options": [
        "Gdańsk",
        "Poznań",
        "Zakopane",
        "Warsaw"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the official language of Costa Rica?",
      "options": [
        "English",
        "Portuguese",
        "Creole",
        "Spanish"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch is located on which Welsh island?",
      "options": [
        "Barry",
        "Anglesey",
        "Bardsey",
        "Caldey"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many provinces are in the Netherlands?",
      "options": [
        "10",
        "12",
        "13",
        "14"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is NOT a real tectonic plate?",
      "options": [
        "North American Plate",
        "Eurasian Plate",
        "Nazca Plate",
        "Atlantic Plate"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Andaman and Nicobar Islands in South East Asia are controlled by which country?",
      "options": [
        "India",
        "Vietnam",
        "Thailand",
        "Indonesia"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the most populous city in the Americas in 2015?",
      "options": [
        "New York",
        "S&atilde;o Paulo",
        "Mexico City",
        "Los Angeles"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the area of Vatican City?",
      "options": [
        "0.44km^2",
        "12.00km^2",
        "0.86km^2",
        "0.10km^2"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name of the peninsula containing Spain and Portugal?",
      "options": [
        "Iberian Peninsula",
        "Scandinavian Peninsula",
        "European Peninsula",
        "Peloponnesian Peninsula"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the busiest port in Europe?",
      "options": [
        "Port of Antwerp",
        "Port of Hamburg",
        "Port of Amsterdam",
        "Port of Rotterdam"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which is not a country in Africa?",
      "options": [
        "Somalia",
        "Liberia",
        "Guyana",
        "Senegal"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of the US state Nevada?",
      "options": [
        "Carson City",
        "Henderson",
        "Reno",
        "Las Vegas"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only country in the world with a flag that doesn't have four right angles?",
      "options": [
        "Nepal",
        "Egypt",
        "Angola",
        "Panama"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which small country is located between the borders of France and Spain?",
      "options": [
        "Andorra",
        "Vatican City",
        "San Marino",
        "Lichtenstein"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is Canada's smallest province?",
      "options": [
        "Nova Scotia",
        "Prince Edward Island",
        "New Brunswick",
        "Yukon"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "On a London Underground map, what colour is the Circle Line?",
      "options": [
        "Yellow",
        "Red",
        "Green",
        "Blue"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What state is the largest state of the United States of America?",
      "options": [
        "California",
        "Alaska",
        "Texas",
        "Washington"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which country is the home of the largest Japanese population outside of Japan?",
      "options": [
        "The United States",
        "Brazil",
        "Russia",
        "China"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many countries border Kyrgyzstan?",
      "options": [
        "4",
        "6",
        "1",
        "3"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the Capital of the United States?",
      "options": [
        "Los Angelas, CA",
        "Washington, D.C.",
        "Houston, TX",
        "New York City, NY"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which US state is nicknamed \"The Golden State\"?",
      "options": [
        "Florida",
        "New Mexico",
        "Alaska",
        "California"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the name of the formerly rich fishing grounds off the island of Newfoundland, Canada?",
      "options": [
        "Hudson Bay",
        "Great Barrier Reef",
        "Mariana Trench",
        "Grand Banks"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following countries has a flag featuring a yellow lion wielding a sword on a dark red background?",
      "options": [
        "Kiribati",
        "Scotland",
        "Bhutan",
        "Sri Lanka"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these American cities has fewer than 1,000,000 people?",
      "options": [
        "San Antonio, Texas",
        "Phoenix, Arizona",
        "Philadelphia, Pennsylvania",
        "San Francisco, California"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the name of the only remaining Grand Duchy in the world ?",
      "options": [
        "Andorra",
        "Liechtenstein",
        "Montenegro",
        "Luxembourg"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Gibraltar, located just south of the Iberian peninsula, is a territory of which West Europe country?",
      "options": [
        "Spain",
        "United Kingdom",
        "Portugal",
        "France"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Spain?",
      "options": [
        "Sevilla",
        "Madrid",
        "Toledo",
        "Barcelona"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following Arab countries does NOT have a flag containing only Pan-Arab colours?",
      "options": [
        "Kuwait",
        "United Arab Emirates",
        "Jordan",
        "Qatar"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital city of Bermuda?",
      "options": [
        "Santo Dominigo",
        "San Juan",
        "Hamilton",
        "Havana"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Pyrenees mountains are located on the border of which two countries?",
      "options": [
        "Russia and Ukraine",
        "Italy and Switzerland",
        "France and Spain",
        "Norway and Sweden"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following is not a megadiverse country - one that harbors a high number of the earth's endemic species?",
      "options": [
        "South Africa",
        "Peru",
        "Thailand",
        "Mexico"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the most populous Muslim-majority nation in 2010?",
      "options": [
        "Indonesia",
        "Iran",
        "Sudan",
        "Saudi Arabia"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the largest country, by area, that has only one time zone?",
      "options": [
        "India",
        "Canada",
        "China",
        "Russia"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What are the four corner states of the US?",
      "options": [
        "Utah, Colorado, Arizona, New Mexico",
        "South Dakota, Minnesota, Nebraska, Iowa",
        "Kansas, Oklahoma, Arkansas, Louisiana",
        "Oregon, Idaho, Nevada, Utah"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Chile?",
      "options": [
        "Santiago",
        "Antofagasta",
        "Valpara&iacute;so",
        "Copiap&oacute;"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many countries are larger than Australia?",
      "options": [
        "5",
        "6",
        "3",
        "4"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest Muslim country in the world?",
      "options": [
        "Iran",
        "Saudi Arabia",
        "Pakistan",
        "Indonesia"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Broome is a town in which state of Australia?",
      "options": [
        "Western Australia",
        "Tasmania",
        "South Australia",
        "Northern Territory"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What country is not a part of Scandinavia?",
      "options": [
        "Finland",
        "Denmark",
        "Sweden",
        "Norway"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of India?",
      "options": [
        "New Delhi",
        "Tithi",
        "Montreal",
        "Beijing"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these countries is NOT located in Africa?",
      "options": [
        "Burkina Faso",
        "Mozambique",
        "Algeria",
        "Suriname"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which English county is the city of Portsmouth?",
      "options": [
        "Surrey",
        "Hampshire",
        "Buckinghamshire",
        "Oxfordshire"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the longest river in Europe?",
      "options": [
        "Danube",
        "Rhine",
        "Thames",
        "Volga"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many rivers are in Saudi Arabia?",
      "options": [
        "3",
        "0",
        "2",
        "1"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many sovereign states are members of the United Nations?",
      "options": [
        "201",
        "153",
        "178",
        "195"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is NOT an island that is part of the Philippines?",
      "options": [
        "Java",
        "Palawan",
        "Mindanao",
        "Luzon"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest lake in the African continent?",
      "options": [
        "Lake Victoria",
        "Lake Turkana",
        "Lake Malawi",
        "Lake Tanganyika"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital city of Slovenia?",
      "options": [
        "Ljubljana",
        "Velenje",
        "Maribor",
        "Trbovlje"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these Japanese islands is the largest by area?",
      "options": [
        "Shikoku",
        "Odaiba",
        "Okinawa",
        "Iki"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital city of New Zealand?",
      "options": [
        "Wellington",
        "Melbourne",
        "Auckland",
        "Christchurch"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When does Finland celebrate their independence day?",
      "options": [
        "November 12th",
        "December 6th",
        "January 2nd",
        "February 8th"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following Japanese islands is the biggest?",
      "options": [
        "Hokkaido",
        "Shikoku",
        "Honshu",
        "Kyushu"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The World Health Organization headquarters is located in which European country?",
      "options": [
        "Belgium",
        "Switzerland",
        "United Kingdom",
        "France"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the smallest country in the world?",
      "options": [
        "Maldives",
        "Monaco",
        "Malta",
        "Vatican City"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What continent is the country Lesotho in?",
      "options": [
        "Asia",
        "Africa",
        "South America",
        "Europe"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the name of the capital of Turkey?",
      "options": [
        "Bursa",
        "Istanbul",
        "Ankara",
        "Izmir"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is Laos?",
      "options": [
        "Country",
        "Region",
        "River",
        "City"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Harvard University is located in which city?",
      "options": [
        "Providence",
        "New York",
        "Washington D.C.",
        "Cambridge"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Jamaica?",
      "options": [
        "San Juan",
        "Port-au-Prince",
        "Kingston",
        "Bridgetown"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
      "options": [
        "Yugoslavia",
        "Czechoslovakia",
        "South Ossetia",
        "Abkhazia"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest country in the world ?",
      "options": [
        "China",
        "Russian Federation",
        "Canada",
        "Brazil"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these Mediterranian islands is under the sovereign rule of France?",
      "options": [
        "Corsica",
        "Majorca",
        "Malta",
        "Sardinia"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which is the largest freshwater lake in the world?",
      "options": [
        "Caspian Sea",
        "Lake Huron",
        "Lake Michigan",
        "Lake Superior "
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the nickname for the US state Delaware?",
      "options": [
        "The First State",
        "The Fiftieth State",
        "The Second State",
        "The Sixteenth State"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following countries does NOT recognize Armenia as an independent country?",
      "options": [
        "Azerbaijan",
        "Pakistan",
        "Iran",
        "Turkey"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many time zones does China have?",
      "options": [
        "3",
        "4",
        "2",
        "1"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these is NOT a province in China?",
      "options": [
        "Fujian",
        "Sichuan",
        "Guangdong",
        "Yangtze"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of the State of Washington, United States?",
      "options": [
        "Washington D.C.",
        "Seattle",
        "Yukon",
        "Olympia"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many timezones does Russia have?",
      "options": [
        "11",
        "16",
        "24",
        "6"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Russian oblast forms a border with Poland?",
      "options": [
        "Omsk",
        "Samara",
        "Nizhny Novgorod",
        "Kaliningrad"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these countries is NOT a part of the Asian continent?",
      "options": [
        "Georgia",
        "Suriname",
        "Singapore",
        "Russia"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Indonesia?",
      "options": [
        "Palembang",
        "Medan",
        "Bandung",
        "Jakarta"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which city is the capital of the United States of America?",
      "options": [
        "Albany",
        "Seattle",
        "Washington D.C",
        "Los Angeles"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Estonia?",
      "options": [
        "Riga",
        "Tartu",
        "Helsinki",
        "Tallinn"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the fifth largest country by area?",
      "options": [
        "India",
        "Australia",
        "Brazil",
        "United States"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Lithuania?",
      "options": [
        "Riga",
        "Tallinn",
        "Helsinki",
        "Vilnius"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Kuala Lumpur is the capital of which country?",
      "options": [
        "Thailand",
        "Singapore",
        "Malaysia",
        "Indonesia"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What island in the Canary Islands was the scene of one of the worst air disasters in history with the collision of two jumbo jets?",
      "options": [
        "Tenerife",
        "Maui",
        "Gran Canaria",
        "Fuerteventura"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Gambia is a nation found on which continent?",
      "options": [
        "Asia",
        "South America",
        "Africa",
        "Europe"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the 15th letter of the Greek alphabet?",
      "options": [
        "Sigma (&Sigma;)",
        "Pi (&Pi;)",
        "Nu (&Nu;)",
        "Omicron (&Omicron;)"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Where would you find the \"Spanish Steps\"?",
      "options": [
        "Berlin, Germany",
        "Barcelona, Spain",
        "London, England",
        "Rome, Italy"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many countries does Spain have a land border with?",
      "options": [
        "4",
        "2",
        "5",
        "3"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Seychelles?",
      "options": [
        "N'Djamena",
        "Tripoli",
        "Victoria",
        "Luanda"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which is the world's longest river?",
      "options": [
        "Yangtze",
        "Amazon",
        "Nile",
        "Missouri"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which European city has the highest mileage of canals in the world?",
      "options": [
        "Venice",
        "Birmingham",
        "Amsterdam",
        "Berlin"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country does Austria not border?",
      "options": [
        "Switzerland",
        "Slovakia",
        "Slovenia",
        "France"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these countries is not a United Nations member state?",
      "options": [
        "Montenegro",
        "South Sudan",
        "Niue",
        "Tuvalu"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where is the \"Sonoran Desert\" located?",
      "options": [
        "Africa",
        "South America",
        "Asia",
        "North America"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Japanese district Akihabara is also known by what nickname?",
      "options": [
        "Big Eyes",
        "Otaku Central ",
        "Moon Walk River",
        "Electric Town"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city is the capital of Switzerland?",
      "options": [
        "Wien",
        "Frankfurt",
        "Zürich",
        "Bern"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Scotland?",
      "options": [
        "Glasgow",
        "Dundee",
        "London",
        "Edinburgh"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The Maluku islands (informally known as the Spice Islands) belong to which country?",
      "options": [
        "Chile",
        "New Zealand",
        "Fiji",
        "Indonesia"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Greenland is a part of which kingdom?",
      "options": [
        "Norway",
        "Denmark",
        "Sweden",
        "United Kingdom"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What's the first National Park designated in the United States?",
      "options": [
        "Rocky Mountain",
        "Yellowstone",
        "Sequoia ",
        "Yosemite"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is the name of the largest city in the US state Tennessee?",
      "options": [
        "Alexandria",
        "Luxor",
        "Thebes",
        "Memphis"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The following Spanish provinces are located in the northern area of Spain except:",
      "options": [
        "Murcia",
        "Le&oacute;n",
        "Navarre",
        "Asturias"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country has three capital cities?",
      "options": [
        "United Kingdom",
        "South Africa",
        "China",
        "Somalia"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following is NOT a capital city?",
      "options": [
        "Sydney",
        "Beijing",
        "Moscow",
        "Cairo"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What European country is not a part of the EU?",
      "options": [
        "Czechia",
        "Ireland",
        "Lithuania",
        "Norway"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which is the largest city in Morocco?",
      "options": [
        "Rabat",
        "Fes",
        "Sale",
        "Casablanca"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is NOT an Australian state or territory?",
      "options": [
        "New South Wales",
        "Victoria",
        "Queensland",
        "Alberta"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many stars are featured on New Zealand's flag?",
      "options": [
        "2",
        "0",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The mountainous Khyber Pass connects which of the two following countries?",
      "options": [
        "India and Nepal",
        "Pakistan and India",
        "Afghanistan and Pakistan",
        "Tajikistan and Kyrgyzstan"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which German city is located on the River Isar?",
      "options": [
        "Munich",
        "Dortmund",
        "Hamburg",
        "Berlin"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What city is the Terracotta Army located in?",
      "options": [
        "Xi'an",
        "Hong Kong",
        "Shanghai",
        "Beijing"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Space Needle is located in which city?",
      "options": [
        "Seattle",
        "Vancouver",
        "Toronto",
        "Los Angles"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What name was historically used for the Turkish city currently known as Istanbul?",
      "options": [
        "Constantinople",
        "Adrianople",
        "Hüdavendigar",
        "Söğüt"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which UK country features a dragon on their flag?",
      "options": [
        "North Ireland",
        "England",
        "Scotland",
        "Wales"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of the US State of New York?",
      "options": [
        "Rochester",
        "New York",
        "Albany",
        "Buffalo"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In which country is Tallinn located?",
      "options": [
        "Poland",
        "Finland",
        "Estonia",
        "Sweden"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name of the Canadian national anthem?",
      "options": [
        "March of the Puck Drop",
        "Leaf-Spangled Banner",
        "O Red Maple",
        "O Canada"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these is NOT a city in India?",
      "options": [
        "Hyderabad",
        "Ahmedabad",
        "Ghaziabad",
        "Islamabad"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these country's capitals starts with the letter B?",
      "options": [
        "Jordan",
        "Kuwait",
        "Qatar",
        "Lebanon"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many countries are inside the United Kingdom?",
      "options": [
        "Three",
        "Two",
        "Four",
        "One"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which nation claims ownership of Antarctica?",
      "options": [
        "Australia",
        "United Nations",
        "No one, but there are claims.",
        "United States of America"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?",
      "options": [
        "South America",
        "Asia",
        "Europe",
        "Africa"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where is the area commonly known as the Bermuda Triangle?",
      "options": [
        "North Pacific Ocean, between Japan and the USA",
        "In the Caribbean Sea",
        "South Pacific Ocean, far off Chile",
        "North Atlantic Ocean, between Florida and Puerto Rico"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country was NOT part of the Soviet Union?",
      "options": [
        "Belarus",
        "Tajikistan",
        "Turkmenistan",
        "Romania"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these island countries is located in the Caribbean?",
      "options": [
        "Fiji",
        "Maldives",
        "Barbados",
        "Seychelles"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The longest shared border in the world can be found between which two nations?",
      "options": [
        "Canada and the United States",
        "Chile and Argentina",
        "India and Pakistan",
        "Russia and China"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which state of the United States is the smallest?",
      "options": [
        "Maine",
        "Vermont",
        "Massachusetts",
        "Rhode Island "
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the highest mountain in the world?",
      "options": [
        "Mount Godwin Austen",
        "Kangchenjunga",
        "Annapurna",
        "Mt. Everest"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Canadian province has Charlottetown as its capital?",
      "options": [
        "Prince Edward Island",
        "Ontario",
        "Northwest Terrirories",
        "Saskachewan"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What North American tourist attraction is served by the \"Maid of the Mist\" tour company?",
      "options": [
        "Whistler, British Columbia",
        "Niagara Falls",
        "Disney World",
        "Yosemite National Park"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Alps are a mountain range on which continent?",
      "options": [
        "Asia",
        "Europe",
        "North America",
        "Africa"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Where is Hadrian's Wall located?",
      "options": [
        "Dublin, Ireland",
        "Rome, Italy",
        "Alexandria, Egypt",
        "Carlisle, England"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where are the Nazca Lines located?",
      "options": [
        "Peru",
        "Brazil",
        "Colombia",
        "Ecuador"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Frankenmuth, a US city nicknamed \"Little Bavaria\", is located in what state?",
      "options": [
        "Kentucky",
        "Pennsylvania",
        "Michigan",
        "Virginia"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where is the world's oldest still operational space launch facility located?",
      "options": [
        "Russia",
        "Kazakhstan",
        "Iran",
        "United States"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What colour is the circle on the Japanese flag?",
      "options": [
        "Black",
        "Yellow",
        "Red",
        "White"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The formerly East-Prussian city of Königsberg is known as which Russian City today?",
      "options": [
        "Kazan",
        "Kursk",
        "Krasnodar",
        "Kaliningrad"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the right way to spell the capital of Hungary?",
      "options": [
        "Bhudapest",
        "Budapast",
        "Boodapest",
        "Budapest"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of British Columbia, Canada?",
      "options": [
        "Victoria",
        "Kelowna",
        "Vancouver",
        "Hope"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which city is the Big Nickel located in Canada?",
      "options": [
        "Calgary, Alberta",
        "Halifax, Nova Scotia ",
        "Victoria, British Columbia",
        "Sudbury, Ontario"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What country is the second largest in the world by area?",
      "options": [
        "Russia",
        "United States of America",
        "Canada",
        "China"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What mountain range lines the border between Spain and France?",
      "options": [
        "Alps",
        "Urals",
        "Carpathians",
        "Pyrenees"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which Indian city can the Taj Mahal be found?",
      "options": [
        "Agra",
        "Thane",
        "Faridabad",
        "Mumbai"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What city  has the busiest airport in the world?",
      "options": [
        "Atlanta, Georgia USA",
        "Tokyo,Japan",
        "Chicago,Illinois ISA",
        "London, England"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only state in the United States that does not have a flag in a shape with 4 edges?",
      "options": [
        "Florida",
        "Idaho",
        "Ohio",
        "New Mexico"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many time zones are in Russia?",
      "options": [
        "11",
        "8",
        "5",
        "2"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of South Korea?",
      "options": [
        "Kitakyushu",
        "Taegu",
        "Seoul",
        "Pyongyang"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which one of these countries borders with Poland?",
      "options": [
        "Netherlands",
        "Norway",
        "Lithuania",
        "France"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Principality of Sealand is an unrecognized micronation off the coast of what country?",
      "options": [
        "Austrailia",
        "Argentina",
        "The United Kingdom",
        "Japan"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many independent countries are there within the continent of South America?",
      "options": [
        "12",
        "8",
        "9",
        "10"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Lake Titicaca is located between which two nations?",
      "options": [
        "Peru and Bolivia",
        "India and Bangladesh",
        "Mexico and the United States",
        "Kenya and Uganda"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the smallest country in South America by area?",
      "options": [
        "Suriname",
        "Chile",
        "Uruguay",
        "Brazil"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Vatican City, the smallest country in the world, is fully enclosed by which country?",
      "options": [
        "Italy",
        "Germany",
        "Spain",
        "France"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many US states start with the letter K?",
      "options": [
        "One",
        "Three",
        "Two",
        "None"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the northernmost human settlement with year round inhabitants?",
      "options": [
        "Honningsv&aring;g, Norway",
        "Alert, Canada",
        "McMurdo Station, Antarctica ",
        "Nagurskoye, Russia"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country features a maple leaf on its flag?",
      "options": [
        "Brazil",
        "Mexico",
        "Canada",
        "India"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which country is the Taedong River in?",
      "options": [
        "South Korea",
        "North Korea",
        "China",
        "Japan"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following European languages is classified as a \"language isolate?\"",
      "options": [
        "Maltese",
        "Hungarian",
        "Galician",
        "Basque"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which country has the abbreviation \"CH\"?",
      "options": [
        "Switzerland",
        "No Country",
        "Canada",
        "China"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What African country has Portuguese as its official language?",
      "options": [
        "Gabon",
        "Botswana",
        "Mozambique",
        "Togo"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Wisconsin, USA?",
      "options": [
        "Madison",
        "Wisconsin Dells",
        "Milwaukee",
        "Green Bay"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name of one of the Neo-Aramaic languages spoken by the Jewish population from Northwestern Iraq?",
      "options": [
        "Hulaul&aacute;",
        "Lishana Deni",
        "Lishan Didan",
        "Chaldean Neo-Aramaic"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What event led to Liechenstein adding a crown to its flag?",
      "options": [
        "Charles VI's decree in 1719",
        "The 1936 Olympics",
        "Coronation of Prince Johann I Joseph in 1805",
        "Signing of the 1862 Constitution of Liechtenstein"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest non-continental island in the world?",
      "options": [
        "Greenland",
        "Madagascar",
        "Borneo",
        "New Guinea"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the Finnish word for \"Finland\"?",
      "options": [
        "Sverige",
        "Suomi",
        "Magyarorsz&aacute;g",
        "Eesti"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which country is completely landlocked by South Africa?",
      "options": [
        "Swaziland",
        "Botswana",
        "Lesotho",
        "Zimbabwe"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Slovakia?",
      "options": [
        "Bratislava",
        "Sarajevo",
        "Ljubljana",
        "Sofia"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many federal states does Germany have?",
      "options": [
        "25",
        "32",
        "16",
        "13"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many countries share a land border with Luxembourg?",
      "options": [
        "5",
        "2",
        "3",
        "4"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many countries does the United States share a land border with?",
      "options": [
        "1",
        "3",
        "4",
        "2"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which country inside the United Kingdom does NOT appear on its flag, the Union Jack?",
      "options": [
        "Scotland",
        "Ireland",
        "Isle of Wight",
        "Wales"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these African countries list \"Spanish\" as an official language?",
      "options": [
        "Cameroon",
        "Guinea",
        "Angola",
        "Equatorial Guinea"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest city and commercial capital of Sri Lanka?",
      "options": [
        "Moratuwa",
        "Negombo",
        "Kandy",
        "Colombo"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What city is known as the Rose Capital of the World?",
      "options": [
        "San Diego, California",
        "Miami, Florida",
        "Anaheim, California",
        "Tyler, Texas"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which area of Eastern Europe is famous for its association with vampires?",
      "options": [
        "Transylvania",
        "Macedonia",
        "Slovakia",
        "Silesia"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these cities is NOT in England?",
      "options": [
        "Oxford",
        "Manchester",
        "Southampton",
        "Edinburgh"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital city of the U.S. state of Texas?",
      "options": [
        "Dallas",
        "Austin",
        "Houston",
        "San Antonio"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Hunua Ranges is located in...",
      "options": [
        "New Zealand",
        "Nepal",
        "Mexico",
        "China"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these countries is located the FURTHEST away from the South China Sea?",
      "options": [
        "Philippines",
        "Bangladesh",
        "Vietnam",
        "Malaysia"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which English county is Stonehenge?",
      "options": [
        "Herefordshire",
        "Cumbria",
        "Somerset",
        "Wiltshire"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the most common climbing route for the second highest mountain in the world, K2?",
      "options": [
        "Magic Line",
        "Abruzzi Spur",
        "Cesen Route",
        "Polish Line"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Belarus?",
      "options": [
        "Warsaw",
        "Kiev",
        "Vilnius",
        "Minsk"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The land of Gotland is located in which European country?",
      "options": [
        "Sweden",
        "Germany",
        "Norway",
        "Denmark"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many states are in Australia?",
      "options": [
        "6",
        "5",
        "8",
        "7"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is NOT a city in Saudi Arabia?",
      "options": [
        "Riyadh",
        "Mecca",
        "Dubai",
        "Medina"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What country has a horizontal bicolor red and white flag?",
      "options": [
        "Bahrain",
        "Malta",
        "Monaco",
        "Liechenstein"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The land mass of modern day Turkey is called what?",
      "options": [
        "Anatolia",
        "Ismuth of Anatolia",
        "Ottoma",
        "Ismuth of Ottoma"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "If soccer is called football in England, what is American football called in England?",
      "options": [
        "Combball",
        "American football",
        "Touchdown",
        "Handball"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest hot desert in the world?",
      "options": [
        "Gobi",
        "Mojave",
        "Sahara",
        "Kalahari"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these countries is not written in its native language?",
      "options": [
        "Slova&scaron;ko",
        "Suomi",
        "Schweiz",
        "Ell&aacute;da"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which two modern-day countries used to be known as the region of Rhodesia between the 1890s and 1980?",
      "options": [
        "Togo & Benin",
        "Zambia & Zimbabwe",
        "Rwanda & Burundi",
        "Lesotho & Swaziland"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the region conjoining Pakistan, India, and China with unknown leadership called?",
      "options": [
        "Andorra",
        "Gibraltar",
        "Quin",
        "Kashmir"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How tall is One World Trade Center in New York City?",
      "options": [
        "1,225 ft",
        "1,888 ft",
        "1,960 ft",
        "1,776 ft"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What national museum will you find in Cooperstown, New York?",
      "options": [
        "Metropolitan Museum of Art",
        "National Toy Hall of Fame",
        "National Baseball Hall of Fame",
        "Museum of Modern Art"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Montreal is in which Canadian province?",
      "options": [
        "Ontario",
        "Nova Scotia",
        "Quebec",
        "Alberta"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Senegal?",
      "options": [
        "Nouakchott",
        "Conakry",
        "Monrovia",
        "Dakar"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which English county will you find the University of East Anglia?",
      "options": [
        "Essex",
        "Cambridgeshire",
        "Suffolk",
        "Norfolk"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Into which basin does the Jordan River flow into?",
      "options": [
        "Aral Sea",
        "Caspian Sea",
        "Dead Sea",
        "Salton Sea"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name of rocky region that spans most of eastern Canada?",
      "options": [
        "Himalayas",
        "Appalachian Mountains",
        "Rocky Mountains",
        "Canadian Shield"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Bridgetown is the capital of which island country in the Carribean?",
      "options": [
        "Barbados",
        "Jamaica&lrm;",
        "Dominica",
        "Cuba"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What tiny principality lies between Spain and France?",
      "options": [
        "Monaco",
        "Andorra",
        "Liechtenstein",
        "San Marino"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Peru?",
      "options": [
        "Santiago",
        "Montevideo",
        "Lima",
        "Buenos Aires"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of the American state of Arizona?",
      "options": [
        "Raleigh",
        "Phoenix",
        "Montgomery",
        "Tallahassee"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following former Yugoslavian states is landlocked?",
      "options": [
        "Croatia",
        "Bosnia and Herzegovina",
        "Montenegro",
        "Serbia"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following languages does NOT use the Latin alphabet?",
      "options": [
        "Georgian",
        "Vietnamese",
        "Swahili",
        "Turkish"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the official national language of Pakistan?",
      "options": [
        "Urdu",
        "Pashto",
        "Punjabi",
        "Indian"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "All of the following countries have official claims to territory in Antartica EXCEPT:",
      "options": [
        "Australia",
        "United States",
        "Norway",
        "Chile"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest country in the world?",
      "options": [
        "China",
        "United States",
        "Canada",
        "Russia"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the name of New Zealand's indigenous people?",
      "options": [
        "Maori",
        "Polynesians",
        "Samoans",
        "Vikings"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Vietnam?",
      "options": [
        "Da Nang",
        "Hai Phong",
        "Hanoi",
        "Ho Chi Minh City"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following countries is within the Eurozone but outside of the Schengen Area?",
      "options": [
        "Malta",
        "Cyprus",
        "Greece",
        "Portugal"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the tallest mountain in Canada?",
      "options": [
        "Mont Tremblant",
        "Mount Logan",
        "Whistler Mountain",
        "Blue Mountain"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "On which continent/s is the entire country of Spain specifically located when taking into account all of its territory?",
      "options": [
        "Europe and Asia",
        "Europe",
        "Europe, Africa and Asia",
        "Europe and Africa"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which ocean borders the west coast of the United States?",
      "options": [
        "Arctic",
        "Indian",
        "Atlantic",
        "Pacific"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which US state has the highest population?",
      "options": [
        "New York",
        "Texas",
        "Florida",
        "California"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these countries is the smallest by population?",
      "options": [
        "Hong Kong",
        "Slovakia",
        "Norway",
        "Finland"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which is the largest of these 4 islands?",
      "options": [
        "Borneo",
        "Great Britain",
        "Cuba",
        "Madagascar"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country claims ownership of the disputed state Kosovo?",
      "options": [
        "Macedonia",
        "Albania",
        "Serbia",
        "Croatia"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is Canada's largest island?",
      "options": [
        "Prince Edward Island",
        "Baffin Island",
        "Vancouver Island",
        "Newfoundland"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Australia?",
      "options": [
        "Sydney",
        "Melbourne",
        "Canberra",
        "Perth"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which river flows through Paris?",
      "options": [
        "Thames",
        "Seine",
        "Rhine",
        "Danube"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest ocean?",
      "options": [
        "Atlantic",
        "Indian",
        "Pacific",
        "Arctic"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which country has the largest population?",
      "options": [
        "India",
        "USA",
        "China",
        "Indonesia"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Canada?",
      "options": [
        "Toronto",
        "Vancouver",
        "Montreal",
        "Ottawa"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which continent is the Sahara Desert on?",
      "options": [
        "Asia",
        "Africa",
        "Australia",
        "South America"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the smallest US state by area?",
      "options": [
        "Delaware",
        "Connecticut",
        "Rhode Island",
        "Vermont"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country is known as the Land of the Rising Sun?",
      "options": [
        "China",
        "Korea",
        "Japan",
        "Thailand"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the longest mountain range?",
      "options": [
        "Himalayas",
        "Rocky Mountains",
        "Andes",
        "Alps"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which sea is the saltiest?",
      "options": [
        "Mediterranean",
        "Red Sea",
        "Dead Sea",
        "Black Sea"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Brazil?",
      "options": [
        "Rio de Janeiro",
        "Sao Paulo",
        "Brasilia",
        "Salvador"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country has the most time zones?",
      "options": [
        "Russia",
        "USA",
        "China",
        "France"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the largest island in the world?",
      "options": [
        "Madagascar",
        "Borneo",
        "Greenland",
        "New Guinea"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which African country was never colonized?",
      "options": [
        "Kenya",
        "Ethiopia",
        "Nigeria",
        "Ghana"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of South Korea?",
      "options": [
        "Busan",
        "Seoul",
        "Incheon",
        "Daegu"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which river is the longest in Europe?",
      "options": [
        "Danube",
        "Rhine",
        "Volga",
        "Seine"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the driest continent?",
      "options": [
        "Africa",
        "Australia",
        "Antarctica",
        "Asia"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which country has the most islands?",
      "options": [
        "Indonesia",
        "Philippines",
        "Sweden",
        "Finland"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Egypt?",
      "options": [
        "Alexandria",
        "Cairo",
        "Luxor",
        "Giza"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which US state is the largest by area?",
      "options": [
        "Texas",
        "California",
        "Alaska",
        "Montana"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What strait separates Europe and Africa?",
      "options": [
        "Bering",
        "Gibraltar",
        "Hormuz",
        "Malacca"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country is both in Europe and Asia?",
      "options": [
        "Russia",
        "Turkey",
        "Kazakhstan",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Argentina?",
      "options": [
        "Santiago",
        "Buenos Aires",
        "Lima",
        "Montevideo"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which ocean is the deepest?",
      "options": [
        "Atlantic",
        "Indian",
        "Pacific",
        "Southern"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest lake in Africa?",
      "options": [
        "Lake Chad",
        "Lake Tanganyika",
        "Lake Victoria",
        "Lake Malawi"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country is known as the Pearl of the Orient?",
      "options": [
        "Thailand",
        "Vietnam",
        "Philippines",
        "Malaysia"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Turkey?",
      "options": [
        "Istanbul",
        "Ankara",
        "Izmir",
        "Antalya"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which mountain is the tallest in North America?",
      "options": [
        "Mt. Whitney",
        "Mt. Rainier",
        "Denali",
        "Mt. Elbert"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of New Zealand?",
      "options": [
        "Auckland",
        "Wellington",
        "Christchurch",
        "Hamilton"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country has the longest coastline?",
      "options": [
        "Russia",
        "Australia",
        "Canada",
        "USA"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Thailand?",
      "options": [
        "Phuket",
        "Chiang Mai",
        "Bangkok",
        "Pattaya"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which European country is the smallest?",
      "options": [
        "Monaco",
        "Vatican City",
        "San Marino",
        "Liechtenstein"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest country in South America?",
      "options": [
        "Argentina",
        "Colombia",
        "Brazil",
        "Peru"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which sea lies between Italy and Croatia?",
      "options": [
        "Mediterranean",
        "Adriatic",
        "Aegean",
        "Ionian"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Vietnam?",
      "options": [
        "Ho Chi Minh City",
        "Hanoi",
        "Da Nang",
        "Hue"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country is home to Machu Picchu?",
      "options": [
        "Ecuador",
        "Bolivia",
        "Peru",
        "Colombia"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest desert in Asia?",
      "options": [
        "Thar",
        "Gobi",
        "Karakum",
        "Taklamakan"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country has the most volcanoes?",
      "options": [
        "Japan",
        "Philippines",
        "Indonesia",
        "Iceland"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Poland?",
      "options": [
        "Krakow",
        "Warsaw",
        "Gdansk",
        "Wroclaw"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which African country is the largest by area?",
      "options": [
        "Sudan",
        "Algeria",
        "DR Congo",
        "Egypt"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Norway?",
      "options": [
        "Bergen",
        "Oslo",
        "Trondheim",
        "Stavanger"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which river flows through London?",
      "options": [
        "Seine",
        "Rhine",
        "Thames",
        "Danube"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Chile?",
      "options": [
        "Valparaiso",
        "Santiago",
        "Concepcion",
        "Antofagasta"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country has the Great Barrier Reef?",
      "options": [
        "Indonesia",
        "Philippines",
        "Australia",
        "Fiji"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Morocco?",
      "options": [
        "Casablanca",
        "Marrakech",
        "Rabat",
        "Fez"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which lake is the deepest in the world?",
      "options": [
        "Lake Superior",
        "Lake Baikal",
        "Lake Tanganyika",
        "Caspian Sea"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Sweden?",
      "options": [
        "Gothenburg",
        "Malmo",
        "Stockholm",
        "Uppsala"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which country is the Taj Mahal in?",
      "options": [
        "Pakistan",
        "Bangladesh",
        "India",
        "Nepal"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Greece?",
      "options": [
        "Thessaloniki",
        "Athens",
        "Patras",
        "Heraklion"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which US state has the most national parks?",
      "options": [
        "Alaska",
        "California",
        "Utah",
        "Colorado"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which river formed the eastern boundary of the Promised Land?",
      "options": [
        "Nile",
        "Jordan River",
        "Euphrates",
        "Tigris"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was the first conquered by Israel after crossing the Jordan?",
      "options": [
        "Ai",
        "Jericho",
        "Hebron",
        "Bethel"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On which mountain did Elijah confront the prophets of Baal?",
      "options": [
        "Mount Sinai",
        "Mount Hermon",
        "Mount Carmel",
        "Mount Zion"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which sea formed Israel's western boundary?",
      "options": [
        "Sea of Galilee",
        "Dead Sea",
        "Mediterranean Sea",
        "Red Sea"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which body of water is called the \"Salt Sea\" in Scripture?",
      "options": [
        "Sea of Galilee",
        "Mediterranean Sea",
        "Red Sea",
        "Dead Sea"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city became King David's capital?",
      "options": [
        "Hebron",
        "Bethlehem",
        "Jerusalem",
        "Shechem"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which valley was known for fertile land and frequent battles?",
      "options": [
        "Valley of Rephaim",
        "Valley of Jezreel",
        "Valley of Siddim",
        "Valley of Hinnom"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was known as the \"City of Palms\"?",
      "options": [
        "Jericho",
        "Ai",
        "Gaza",
        "Hebron"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Near which city did Abraham live by the oaks of Mamre?",
      "options": [
        "Bethel",
        "Hebron",
        "Beersheba",
        "Shechem"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city marked Israel's southern boundary?",
      "options": [
        "Gaza",
        "Zoar",
        "Beersheba",
        "Lachish"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which river did Naaman wash to be healed?",
      "options": [
        "Euphrates",
        "Abana",
        "Jordan River",
        "Nile"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which region did the tribe of Judah inherit?",
      "options": [
        "Northern coast",
        "Central plains",
        "Southern hill country",
        "Transjordan"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was both a city of refuge and a Levitical city?",
      "options": [
        "Jericho",
        "Shechem",
        "Ai",
        "Gibeah"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In which wilderness did Israel wander for 40 years?",
      "options": [
        "Negev",
        "Sinai Wilderness",
        "Judean Desert",
        "Arabian Desert"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "From which city did Jonah flee when running from God?",
      "options": [
        "Tyre",
        "Sidon",
        "Joppa",
        "Gaza"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which body of water lies north of the Jordan River?",
      "options": [
        "Dead Sea",
        "Mediterranean Sea",
        "Sea of Galilee",
        "Red Sea"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was destroyed alongside Sodom?",
      "options": [
        "Zoar",
        "Gomorrah",
        "Bethel",
        "Jericho"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city housed the tabernacle for many years?",
      "options": [
        "Jerusalem",
        "Shiloh",
        "Bethel",
        "Gilgal"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Canaanite stronghold did Joshua destroy by fire?",
      "options": [
        "Hazor",
        "Tyre",
        "Sidon",
        "Gaza"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was associated with Og, king of Bashan?",
      "options": [
        "Hazor",
        "Edrei",
        "Dan",
        "Kedesh"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where did Deborah judge Israel?",
      "options": [
        "Ramah",
        "Bethel",
        "Gibeah",
        "Shiloh"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where did King Saul die?",
      "options": [
        "Gilgal",
        "Jezreel",
        "Mount Gilboa",
        "En Gedi"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where did David hide from Saul?",
      "options": [
        "Zoar",
        "En Gedi",
        "Jericho",
        "Beersheba"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city deceived Israel into making a treaty?",
      "options": [
        "Jericho",
        "Ai",
        "Gibeon",
        "Lachish"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city did Solomon fortify along with Megiddo and Hazor?",
      "options": [
        "Dan",
        "Gezer",
        "Bethel",
        "Shiloh"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which region was home to the Philistines?",
      "options": [
        "Hill country",
        "Negev",
        "Coastal plain",
        "Transjordan"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which mountain stood opposite Mount Gerizim?",
      "options": [
        "Mount Carmel",
        "Mount Ebal",
        "Mount Hermon",
        "Mount Zion"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which mountain was used for covenant blessings?",
      "options": [
        "Mount Ebal",
        "Mount Sinai",
        "Mount Gerizim",
        "Mount Carmel"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which region was a desert area in southern Israel?",
      "options": [
        "Galilee",
        "Negev",
        "Bashan",
        "Gilead"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city controlled a key mountain pass?",
      "options": [
        "Megiddo",
        "Dan",
        "Ai",
        "Zoar"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which site served as Israel's first base camp after crossing the Jordan?",
      "options": [
        "Gilgal",
        "Shiloh",
        "Bethel",
        "Shechem"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was Israel's religious center before Jerusalem?",
      "options": [
        "Bethel",
        "Gilgal",
        "Shiloh",
        "Shechem"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was given to Caleb as an inheritance?",
      "options": [
        "Bethlehem",
        "Hebron",
        "Beersheba",
        "Lachish"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city suffered defeat due to Achan's sin?",
      "options": [
        "Bethel",
        "Ai",
        "Shechem",
        "Gibeon"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Near which city did the sun stand still?",
      "options": [
        "Jericho",
        "Gibeon",
        "Hebron",
        "Megiddo"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city was besieged by the Assyrians?",
      "options": [
        "Jerusalem",
        "Samaria",
        "Lachish",
        "Dan"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city became the northern kingdom's capital?",
      "options": [
        "Shechem",
        "Tirzah",
        "Samaria",
        "Megiddo"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city featured elders at the city gate in Ruth?",
      "options": [
        "Bethlehem",
        "Hebron",
        "Beersheba",
        "Jericho"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which region separated Judea and Galilee?",
      "options": [
        "Philistia",
        "Samaria",
        "Bashan",
        "Gilead"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which region was known for balm and spices?",
      "options": [
        "Negev",
        "Bashan",
        "Gilead",
        "Galilee"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which fortified city lay west of Jerusalem?",
      "options": [
        "Dan",
        "Gezer",
        "Bethel",
        "Shiloh"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which city of refuge lay east of the Jordan?",
      "options": [
        "Kedesh",
        "Bezer",
        "Hebron",
        "Shechem"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which wilderness did David flee into?",
      "options": [
        "Negev",
        "Wilderness of Zin",
        "Wilderness of Judah",
        "Sinai Wilderness"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the capital of Australia?",
      "options": [
        "Sydney",
        "Melbourne",
        "Canberra",
        "Perth"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which country has the most natural lakes?",
      "options": [
        "USA",
        "Russia",
        "Canada",
        "Finland"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What is the longest river in the world?",
      "options": [
        "Amazon",
        "Nile",
        "Yangtze",
        "Mississippi"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which desert is the largest in the world?",
      "options": [
        "Sahara",
        "Arabian",
        "Gobi",
        "Antarctic"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Mount Everest is located on the border of which two countries?",
      "options": [
        "India and China",
        "Nepal and Tibet",
        "Nepal and China",
        "India and Nepal"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    { "q": "Which country has territory on two continents and a major city spanning both?", "options": ["Greece", "Turkey", "Portugal", "Sweden"], "correct": 1, "fact": "Turkey spans Europe and Asia, and Istanbul sits on both sides of the Bosporus.", "pool": "multiplayer" },
    { "q": "Which country has a coastline on both the Atlantic Ocean and the Indian Ocean?", "options": ["South Africa", "Morocco", "Kenya", "Egypt"], "correct": 0, "fact": "South Africa touches the Atlantic on the west and the Indian on the east.", "pool": "multiplayer" },
    { "q": "Which country is completely surrounded by South Africa?", "options": ["Lesotho", "Eswatini", "Botswana", "Namibia"], "correct": 0, "fact": "Lesotho is an enclave entirely within South Africa.", "pool": "multiplayer" },
    { "q": "Which is the largest country by land area among these options?", "options": ["France", "Mexico", "Spain", "Japan"], "correct": 1, "fact": "Mexico is approximately 1.96 million km², making it the largest among these options.", "pool": "multiplayer" },
    { "q": "Which country borders both Spain and Portugal?", "options": ["France", "Andorra", "Morocco", "None of the above"], "correct": 3, "fact": "No country borders both Spain and Portugal—they share the Iberian Peninsula alone.", "pool": "multiplayer" },
    { "q": "Which U.S. state has the westernmost point due to islands crossing the 180° longitude line?", "options": ["Alaska", "Hawaii", "California", "Washington"], "correct": 0, "fact": "Alaska's Aleutian Islands extend past 180° longitude, making it both the westernmost and easternmost state.", "pool": "multiplayer" },
    { "q": "Which is the only continent with land in all four hemispheres?", "options": ["Europe", "Africa", "Asia", "Antarctica"], "correct": 1, "fact": "Africa crosses both the Equator and the Prime Meridian, placing it in all four hemispheres.", "pool": "multiplayer" },
    { "q": "Which of these countries is NOT landlocked?", "options": ["Bolivia", "Paraguay", "Uruguay", "Mongolia"], "correct": 2, "fact": "Uruguay has an Atlantic coastline; the others listed are landlocked.", "pool": "multiplayer" },
    { "q": "Which country has the most people living above 10,000 feet elevation?", "options": ["Peru", "Bolivia", "Nepal", "Ethiopia"], "correct": 1, "fact": "Bolivia has major high-altitude urban areas like La Paz and El Alto with large populations.", "pool": "multiplayer" },
    { "q": "Which sea is actually a large saltwater lake with no outlet to the ocean?", "options": ["Black Sea", "Caspian Sea", "Arabian Sea", "Red Sea"], "correct": 1, "fact": "The Caspian Sea is the world's largest inland body of water, a landlocked saltwater lake.", "pool": "multiplayer" },
    { "q": "What is the largest ocean on Earth?", "options": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], "correct": 2, "fact": "The Pacific Ocean covers more than 60 million square miles, larger than all land combined.", "pool": "multiplayer" },
    { "q": "What is the largest desert on Earth by area?", "options": ["Sahara", "Gobi", "Antarctic Desert", "Arabian Desert"], "correct": 2, "fact": "Antarctica is the largest desert because deserts are defined by low precipitation, not temperature.", "pool": "multiplayer" },
    { "q": "What is the largest lake by surface area?", "options": ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"], "correct": 1, "fact": "The Caspian Sea is the largest by surface area, though it's landlocked.", "pool": "multiplayer" },
    { "q": "What is the deepest lake in the world?", "options": ["Lake Tanganyika", "Lake Baikal", "Lake Superior", "Lake Victoria"], "correct": 1, "fact": "Lake Baikal in Russia is the world's deepest lake.", "pool": "multiplayer" },
    { "q": "What is the longest mountain range on land?", "options": ["Himalayas", "Rocky Mountains", "Andes", "Alps"], "correct": 2, "fact": "The Andes run along the western edge of South America.", "pool": "multiplayer" },
    { "q": "Which country is the largest by land area?", "options": ["Canada", "China", "United States", "Russia"], "correct": 3, "fact": "Russia is the largest country by land area.", "pool": "multiplayer" },
    { "q": "Which country is currently the most populous in the world?", "options": ["United States", "India", "Indonesia", "Brazil"], "correct": 1, "fact": "India surpassed China as the world's most populous country in 2023.", "pool": "multiplayer" },
    { "q": "What is the largest island in the world?", "options": ["Greenland", "Borneo", "Madagascar", "New Guinea"], "correct": 0, "fact": "Greenland is the world's largest island.", "pool": "multiplayer" },
    { "q": "Which is the longest river in North America?", "options": ["Colorado River", "Rio Grande", "Mississippi River", "Missouri River"], "correct": 3, "fact": "The Missouri River is the longest river in North America.", "pool": "multiplayer" },
    { "q": "Which waterfall is the tallest in the world?", "options": ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"], "correct": 2, "fact": "Angel Falls in Venezuela is the tallest waterfall in the world.", "pool": "multiplayer" },
    { "q": "What is the lowest land point on Earth?", "options": ["Death Valley", "Dead Sea shoreline", "Caspian Sea shoreline", "Lake Assal"], "correct": 1, "fact": "The shoreline of the Dead Sea is the lowest exposed land point on Earth.", "pool": "multiplayer" },
    { "q": "Which desert is the largest hot desert in the world?", "options": ["Gobi", "Kalahari", "Sahara", "Atacama"], "correct": 2, "fact": "The Sahara is the world's largest hot desert.", "pool": "multiplayer" },
    { "q": "Which is the driest non-polar desert region on Earth?", "options": ["Sahara Desert", "Atacama Desert", "Gobi Desert", "Mojave Desert"], "correct": 1, "fact": "The Atacama Desert in Chile is one of the driest places on Earth.", "pool": "multiplayer" },
    { "q": "Which continent has the highest average elevation?", "options": ["Asia", "South America", "Antarctica", "Europe"], "correct": 2, "fact": "Antarctica has the highest average elevation due to its thick ice sheet.", "pool": "multiplayer" },
    { "q": "Which ocean is the smallest by area?", "options": ["Arctic Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"], "correct": 0, "fact": "The Arctic Ocean is the smallest ocean.", "pool": "multiplayer" },
    { "q": "Which continent is the driest inhabited continent?", "options": ["Africa", "Australia", "South America", "Europe"], "correct": 1, "fact": "Australia is the driest inhabited continent.", "pool": "multiplayer" },
    { "q": "Which is the largest rainforest on Earth?", "options": ["Congo Rainforest", "Amazon Rainforest", "Daintree Rainforest", "Borneo Rainforest"], "correct": 1, "fact": "The Amazon is the largest tropical rainforest.", "pool": "multiplayer" },
    { "q": "Which continent has the most countries?", "options": ["Europe", "Africa", "Asia", "South America"], "correct": 1, "fact": "Africa has 54 countries, the most of any continent.", "pool": "multiplayer" },
    { "q": "Which is the largest continent by land area?", "options": ["Africa", "North America", "Asia", "Europe"], "correct": 2, "fact": "Asia is the largest continent by land area.", "pool": "multiplayer" },
    { "q": "Which is the highest capital city by elevation?", "options": ["Quito", "Bogotá", "La Paz", "Mexico City"], "correct": 2, "fact": "La Paz, Bolivia is the world's highest administrative capital.", "pool": "multiplayer" },
    { "q": "What is the highest mountain in the world above sea level?", "options": ["K2", "Kangchenjunga", "Mount Everest", "Makalu"], "correct": 2, "fact": "Mount Everest is the highest peak above sea level.", "pool": "multiplayer" },
    { "q": "What is the tallest mountain in North America?", "options": ["Mount Whitney", "Denali", "Mount Elbert", "Mount Rainier"], "correct": 1, "fact": "Denali in Alaska is the tallest peak in North America.", "pool": "multiplayer" },
    { "q": "What is the tallest mountain in Africa?", "options": ["Mount Kenya", "Kilimanjaro", "Atlas Mountains", "Drakensberg"], "correct": 1, "fact": "Mount Kilimanjaro in Tanzania is Africa's highest peak.", "pool": "multiplayer" },
    { "q": "Which mountain range contains Mount Everest?", "options": ["Andes", "Alps", "Himalayas", "Rockies"], "correct": 2, "fact": "Mount Everest is part of the Himalayan range.", "pool": "multiplayer" },
    { "q": "Which mountain range separates Europe from Asia?", "options": ["Alps", "Ural Mountains", "Pyrenees", "Carpathians"], "correct": 1, "fact": "The Ural Mountains are commonly used as part of the Europe-Asia boundary.", "pool": "multiplayer" },
    { "q": "Which is the highest mountain in South America?", "options": ["Aconcagua", "Chimborazo", "Huascarán", "Ojos del Salado"], "correct": 0, "fact": "Aconcagua in Argentina is the highest peak in South America.", "pool": "multiplayer" },
    { "q": "Which is the highest mountain in Europe?", "options": ["Matterhorn", "Mont Blanc", "Mount Elbrus", "Ben Nevis"], "correct": 2, "fact": "Mount Elbrus in Russia is Europe's highest peak.", "pool": "multiplayer" },
    { "q": "Which is the highest mountain in Oceania?", "options": ["Mount Kosciuszko", "Puncak Jaya", "Mount Cook", "Mauna Kea"], "correct": 1, "fact": "Puncak Jaya in Indonesia is the highest peak in Oceania.", "pool": "multiplayer" },
    { "q": "Which famous volcano is located near Naples, Italy?", "options": ["Etna", "Vesuvius", "Stromboli", "Hekla"], "correct": 1, "fact": "Mount Vesuvius is known for the eruption that buried Pompeii.", "pool": "multiplayer" },
    { "q": "The Andes Mountains run through which continent?", "options": ["South America", "Europe", "Africa", "Asia"], "correct": 0, "fact": "The Andes run along the western coast of South America.", "pool": "multiplayer" },
    { "q": "Which river is most associated with ancient Egyptian civilization?", "options": ["Tigris", "Euphrates", "Nile", "Jordan"], "correct": 2, "fact": "The Nile River supported agriculture and transport in ancient Egypt.", "pool": "multiplayer" },
    { "q": "Which river flows through Paris?", "options": ["Thames", "Seine", "Danube", "Rhine"], "correct": 1, "fact": "The Seine River runs through the heart of Paris.", "pool": "multiplayer" },
    { "q": "Which river flows through London?", "options": ["Seine", "Rhine", "Thames", "Po"], "correct": 2, "fact": "The River Thames flows through London.", "pool": "multiplayer" },
    { "q": "Which river is the longest in South America?", "options": ["Orinoco", "Amazon", "Paraná", "São Francisco"], "correct": 1, "fact": "The Amazon River is South America's longest river.", "pool": "multiplayer" },
    { "q": "Which river runs through Baghdad?", "options": ["Tigris", "Euphrates", "Jordan", "Indus"], "correct": 0, "fact": "Baghdad sits on the Tigris River.", "pool": "multiplayer" },
    { "q": "Which river runs through Rome?", "options": ["Po", "Arno", "Tiber", "Danube"], "correct": 2, "fact": "Rome is located on the Tiber River.", "pool": "multiplayer" },
    { "q": "Which river carved the Grand Canyon?", "options": ["Colorado River", "Columbia River", "Rio Grande", "Missouri River"], "correct": 0, "fact": "The Colorado River carved the Grand Canyon over millions of years.", "pool": "multiplayer" },
    { "q": "Which river is the longest in Europe?", "options": ["Danube", "Rhine", "Volga", "Elbe"], "correct": 2, "fact": "The Volga is the longest river in Europe.", "pool": "multiplayer" },
    { "q": "Which river forms part of the US-Mexico border?", "options": ["Rio Grande", "Colorado River", "Arkansas River", "Ohio River"], "correct": 0, "fact": "The Rio Grande forms a major portion of the U.S.-Mexico border.", "pool": "multiplayer" },
    { "q": "Which river flows through multiple countries and empties into the Black Sea?", "options": ["Danube", "Rhine", "Loire", "Tagus"], "correct": 0, "fact": "The Danube flows through many European countries and empties into the Black Sea.", "pool": "multiplayer" },
    { "q": "Which direction does the sun rise?", "options": ["North", "South", "East", "West"], "correct": 2, "fact": "The sun rises in the east and sets in the west.", "pool": "multiplayer" },
    { "q": "Which tool is used to find direction?", "options": ["Thermometer", "Compass", "Barometer", "Scale"], "correct": 1, "fact": "A compass shows north, south, east, and west.", "pool": "multiplayer" },
    { "q": "Which line divides Earth into Northern and Southern Hemispheres?", "options": ["Prime Meridian", "Tropic of Cancer", "Equator", "International Date Line"], "correct": 2, "fact": "The Equator circles the Earth at 0° latitude.", "pool": "multiplayer" },
    { "q": "What does a map scale show?", "options": ["Elevation", "Distance", "Population", "Climate"], "correct": 1, "fact": "A map scale shows how distances on a map compare to real distances.", "pool": "multiplayer" },
    { "q": "Which is larger?", "options": ["City", "State", "Country", "Continent"], "correct": 3, "fact": "A continent is larger than a country, state, or city.", "pool": "multiplayer" },
    { "q": "Which unit is commonly used to measure distance between cities?", "options": ["Grams", "Kilometers", "Liters", "Degrees"], "correct": 1, "fact": "Kilometers and miles are used for long distances.", "pool": "multiplayer" },
    { "q": "What do latitude lines measure?", "options": ["East-west distance", "Height above sea level", "North-south position", "Time zones"], "correct": 2, "fact": "Latitude measures distance north or south of the Equator.", "pool": "multiplayer" },
    { "q": "What does a globe represent?", "options": ["Flat map", "Model of the Earth", "Weather system", "Compass rose"], "correct": 1, "fact": "A globe is a spherical model of Earth.", "pool": "multiplayer" },
    { "q": "Which feature shows height on a map?", "options": ["Legend", "Contour lines", "Scale", "Grid"], "correct": 1, "fact": "Contour lines show elevation and land shape.", "pool": "multiplayer" },
    { "q": "Which direction is opposite of west?", "options": ["North", "South", "East", "Up"], "correct": 2, "fact": "East and west are opposite directions.", "pool": "multiplayer" },
    { "q": "What symbol on a map explains colors and symbols?", "options": ["Scale", "Legend", "Grid", "Compass"], "correct": 1, "fact": "A legend explains map symbols.", "pool": "multiplayer" },
    { "q": "Which line divides Earth into Eastern and Western Hemispheres?", "options": ["Equator", "Prime Meridian", "Tropic of Capricorn", "Arctic Circle"], "correct": 1, "fact": "The Prime Meridian is at 0° longitude.", "pool": "multiplayer" },
    { "q": "Which is a man-made feature?", "options": ["River", "Mountain", "Canal", "Desert"], "correct": 2, "fact": "Canals are built by humans.", "pool": "multiplayer" }
  ],
  "Science": [
    {
      "q": "Which is not a type of neuron?",
      "options": [
        "Interneuron",
        "Motor Neuron",
        "Sensory Neuron",
        "Perceptual Neuron"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following men does not have a chemical element named after him?",
      "options": [
        "Albert Einstein",
        "Niels Bohr",
        "Enrico Fermi",
        "Sir Isaac Newton"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the same in Celsius and Fahrenheit?",
      "options": [
        "-40",
        "-39",
        "32",
        "-42"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the molecular formula of Ozone?",
      "options": [
        "SO4",
        "N2O",
        "O3",
        "C6H2O6"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the elemental symbol for mercury?",
      "options": [
        "Me",
        "Mc",
        "Hy",
        "Hg"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many chromosomes are in your body cells?",
      "options": [
        "23",
        "22",
        "21",
        "24"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the scientific name of the red fox?",
      "options": [
        "Vulpes Vulpes",
        "Vulpes Vulpie",
        "Vulpes Redus",
        "Red Fox"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these stars is the largest?",
      "options": [
        "Betelgeuse",
        "VY Canis Majoris",
        "UY Scuti",
        "RW Cephei"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which chemical element has the lowest boiling point?",
      "options": [
        "Hydrogen",
        "Nitrogen",
        "Helium",
        "Neon"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
      "options": [
        "Jupiter",
        "Venus",
        "Uranus",
        "Neptune"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which element has the atomic number of 7?",
      "options": [
        "Nitrogen",
        "Neon",
        "Hydrogen",
        "Oxygen"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When was the first mammal successfully cloned?",
      "options": [
        "1996",
        "1999",
        "1985",
        "2009"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What did Gregory Mendel use to test genetic crossovers?",
      "options": [
        "Peas",
        "Parrots",
        "Flowers",
        "Cats"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Stars consist mainly of hydrogen and which other gas?",
      "options": [
        "Helium",
        "Argon",
        "Oxygen",
        "Nitrogen"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the standard SI unit for time?",
      "options": [
        "Hour",
        "Minute",
        "Day",
        "Second"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many types of quarks are there in the standard model of physics?",
      "options": [
        "6",
        "2",
        "3",
        "4"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How much radiation does a banana emit?",
      "options": [
        "0.1 Microsievert",
        "0.7 Microsievert",
        "0.5 Microsievert",
        "0.3 Microsievert"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these choices is not one of the phases of mitosis?",
      "options": [
        "Diplophase",
        "Telophase",
        "Anaphase",
        "Metaphase"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "This element, when overcome with extreme heat and pressure, creates diamonds.",
      "options": [
        "Nitrogen",
        "Oxygen",
        "Hydrogen",
        "Carbon"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is not one of the groups on the periodic table?",
      "options": [
        "Fluorines",
        "Noble Gases",
        "Halogens",
        "Alkali Metals"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the molecular formula of the active component of chili peppers(Capsaicin)?",
      "options": [
        "C21H23NO3",
        "C6H4Cl2",
        "C18H27NO3",
        "C13H25NO4"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What nucleotide pairs with guanine?",
      "options": [
        "Adenine",
        "Cytosine",
        "Uracil",
        "Thymine"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The \"Tibia\" is found in which part of the body?",
      "options": [
        "Hand",
        "Head",
        "Leg",
        "Arm"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What are the smallest blood vessels in the human body?",
      "options": [
        "Arterioles",
        "Veinules",
        "Lymphatics",
        "Capillaries"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Human cells typically have how many copies of each gene?",
      "options": [
        "2",
        "3",
        "1",
        "4"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Down Syndrome is usually caused by an extra copy of which chromosome?",
      "options": [
        "21",
        "24",
        "15",
        "23"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Swiss psychologist is synonymous with the concepts of introvert and extrovert personalities?",
      "options": [
        "Hermann Rorschach",
        "Alice Miller",
        "Carl Jung",
        "Jean Piaget"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The word \"science\" stems from the word \"scire\" meaning what?",
      "options": [
        "To live",
        "To know",
        "To measure",
        "To count"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the largest animal currently on Earth?",
      "options": [
        "Blue Whale",
        "Giraffe",
        "Colossal Squid",
        "Orca"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which moon is the only satellite in our solar system to possess a dense atmosphere?",
      "options": [
        "Miranda",
        "Europa",
        "Callisto",
        "Titan"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name for the auditory illusion of a note that seems to be rising infinitely?",
      "options": [
        "Glissandro Illusion",
        "Fransen Effect",
        "McGurck Effect",
        "Shepard Tone"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these Elements is a metalloid?",
      "options": [
        "Rubidium",
        "Antimony",
        "Bromine",
        "Tin"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which one of these is scientific term for \"Brain Freeze\"?",
      "options": [
        "Sphenopalatine Ganglioneuralgia",
        "Hyacinthoides Italica",
        "Amaranthus Retroflexus",
        "Amblyomma Americanum"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the \"powerhouse\" of the Eukaryotic animal cell?",
      "options": [
        "Nucleus",
        "Chloroplast",
        "Endoplasmic Reticulum",
        "Mitochondria"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which color cannot be produced in Roses, even through genetic alteration?",
      "options": [
        "Brown",
        "Blue",
        "Orange",
        "Black"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What produces the green colour of most plant leaves?",
      "options": [
        "Light refraction",
        "Natural pigments",
        "UV radiation",
        "Chlorophyll"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Folic acid is the synthetic form of which vitamin?",
      "options": [
        "Vitamin A",
        "Vitamin D",
        "Vitamin B",
        "Vitamin C"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Au on the Periodic Table refers to which element?",
      "options": [
        "Silver",
        "Oxygen",
        "Nickel",
        "Gold"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the molecular formula of Glucose?",
      "options": [
        "C2H4O2",
        "K+",
        "C6H12O6",
        "CH4"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The humerus, paired radius, and ulna come together to form what joint?",
      "options": [
        "Knee",
        "Elbow",
        "Sholder",
        "Ankle"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What do you study if you are studying entomology?",
      "options": [
        "Humans",
        "the Brain",
        "Insects",
        "Fish"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Burning which of these metals will produce a bright white flame?",
      "options": [
        "Copper",
        "Magnesium",
        "Lead",
        "Lithium"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "All of the following human genetic haplogroup names are shared between Y-chromosome and mitochondrial DNA haplogroups EXCEPT:",
      "options": [
        "Haplogroup U",
        "Haplogroup L",
        "Haplogroup T",
        "Haplogroup J"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the study of the cells and tissues of plants and animals?",
      "options": [
        "Histology",
        "Microbiology",
        "Anatomy",
        "Biochemistry"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
      "options": [
        "Tau neutrino",
        "Gluon",
        "Graviton",
        "Z boson"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What causes the sound of a heartbeat?",
      "options": [
        "Contraction of the heart chambers",
        "Blood exiting the heart",
        "Closure of the heart valves",
        "Relaxation of the heart chambers"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following is NOT a passive electrical component?",
      "options": [
        "Inductor",
        "Capacitor",
        "Resistor",
        "Transistor"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which type of rock is created by intense heat AND pressure?",
      "options": [
        "Metamorphic",
        "Diamond",
        "Igneous",
        "Sedimentary"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "A positron is an antiparticle of a what?",
      "options": [
        "Electron",
        "Neutron",
        "Proton",
        "Photon"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How long is a light-year?",
      "options": [
        "9.461 Trillion Kilometres",
        "105.40 Earth-years",
        "501.2 Million Miles",
        "1 AU"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the standard SI unit for electric current?",
      "options": [
        "Watt",
        "Ohm",
        "Ampere",
        "Volt"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is radiation measured in?",
      "options": [
        "Watt",
        "Decibel",
        "Kelvin",
        "Gray "
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following spacecraft never touched the moon?",
      "options": [
        "Mariner 4",
        "SMART-1",
        "Luna 2",
        "Apollo 11"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the scientific name of the knee cap?",
      "options": [
        "Patella",
        "Scapula",
        "Foramen Magnum",
        "Femur"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The asteroid belt is located between which two planets?",
      "options": [
        "Earth and Mars",
        "Mercury and Venus",
        "Jupiter and Saturn",
        "Mars and Jupiter"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "A comet's gaseous envelope (which creates the tail) is called what?",
      "options": [
        "The wake",
        "The backwash",
        "The ablative",
        "The coma"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "All the following metal elements are liquids at or near room temperature EXCEPT:",
      "options": [
        "Caesium",
        "Mercury",
        "Gallium",
        "Beryllium"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "After which Danish city is the 72th element on the periodic table named?",
      "options": [
        "Odense",
        "Skagen",
        "Herning",
        "Copenhagen"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Dry ice is the solid form of what substance?",
      "options": [
        "Nitrogen",
        "Carbon dioxide",
        "Ammonia",
        "Oxygen"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is NOT a real element?",
      "options": [
        "Praseodymium",
        "Hassium",
        "Lutetium",
        "Vitrainium"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the chemical makeup of water?",
      "options": [
        "H20",
        "C12H6O2",
        "CO2",
        "H"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the atomic number of the element Strontium?",
      "options": [
        "47",
        "73",
        "38",
        "11"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following blood vessels carries deoxygenated blood?",
      "options": [
        "Pulmonary Artery",
        "Coronary Artery",
        "Pulmonary Vein",
        "Aorta"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What medication was once commonly used as rat poison?",
      "options": [
        "Coumadin",
        "Aspirin",
        "Eliquis",
        "Tylenol"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which is the most abundant element in the universe?",
      "options": [
        "Oxygen",
        "Helium",
        "Hydrogen",
        "Lithium"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the primary addictive substance found in tobacco?",
      "options": [
        "Nicotine",
        "Cathinone",
        "Ephedrine",
        "Glaucine"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the standard SI unit for distance?",
      "options": [
        "Metre",
        "Foot",
        "Angstrom",
        "Fathom"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following liquids is least viscous? Assume temperature is 25°C.",
      "options": [
        "Acetone",
        "Mercury",
        "Water",
        "Benzene"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many legs is it biologically impossible for a centipede to have?",
      "options": [
        "100",
        "50",
        "26",
        "74"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What does the yellow diamond on the NFPA 704 fire diamond represent?",
      "options": [
        "Reactivity",
        "Flammability",
        "Radioactivity",
        "Health"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which part of the body does glaucoma affect?",
      "options": [
        "Eyes",
        "Blood",
        "Stomach",
        "Throat"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the Linnean name of the domestic apple tree?",
      "options": [
        "Appelus delectica",
        "Pomus domestica",
        "Malus americana",
        "Malus pumila"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "About what percentage of the Earth's surface is water? ",
      "options": [
        "90%",
        "50%",
        "70%",
        "30%"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
      "options": [
        "1",
        "5",
        "2",
        "0"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where in the human body is the Pineal Gland located?",
      "options": [
        "Chest",
        "Groin",
        "Throat",
        "Brain"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What part of the body produces insulin?",
      "options": [
        "Kidney",
        "Liver",
        "Stomach",
        "Pancreas"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "71% of the Earth's surface is made up of",
      "options": [
        "Continents",
        "Deserts",
        "Forests",
        "Water"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In the Scoville scale, what is the hottest chemical?",
      "options": [
        "Dihydrocapsaicin",
        "Capsaicin",
        "Tinyatoxin",
        "Resiniferatoxin"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many moons does the Earth have?",
      "options": [
        "1",
        "3",
        "2",
        "0"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the chemical formula for ammonia?",
      "options": [
        "NH3",
        "CH4",
        "NO3",
        "CO2"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is NOT a part of the structure of a typical neuron?",
      "options": [
        "Node of Ranvier",
        "Schwann cell",
        "Myelin sheath",
        "Islets of Langerhans"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The core of the Sun can reach which temperature?",
      "options": [
        "938,000° F (521093.3° C)",
        "27° Million F (15° Million C)",
        "8° Billion F (°4.4 Billion C)",
        "Absolute Zero (Both F and C)"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name of the cognitive bias wherein a person with low ability in a particular skill mistake themselves as being superior?",
      "options": [
        "Dunning-Kruger effect",
        "Freud-Hall effect",
        "Müller-Lyer effect",
        "Meyers-Briggs effect"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the scientific term for 'taste'?",
      "options": [
        "Somatosensation",
        "Olfaction",
        "Gustatory Perception",
        "Auditory Perception"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these bones is hardest to break?",
      "options": [
        "Humerus",
        "Cranium",
        "Femur",
        "Tibia"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many planets are in our Solar System?",
      "options": [
        "Ten",
        "Eight",
        "Seven",
        "Nine"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What name is given to all baby marsupials?",
      "options": [
        "Calf",
        "Joey",
        "Cub",
        "Pup"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following are cells of the adaptive immune system?",
      "options": [
        "Cytotoxic T cells",
        "White blood cells",
        "Natural killer cells",
        "Dendritic cells"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What organelle aids in synthesis of DNA in cells?",
      "options": [
        "Mitochondria",
        "Lysosomes",
        "Ribosomes",
        "Nuclei"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the standard SI unit for luminous intensity?",
      "options": [
        "Candela",
        "Coulomb",
        "Lumen",
        "Faraday"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following is a major muscle of the back?",
      "options": [
        "Trapezium",
        "Trapezoid",
        "Triquetrum",
        "Trapezius"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the half-life of Uranium-235?",
      "options": [
        "1,260,900,000 years",
        "Uranium-235 is a stable isotope",
        "703,800,000 years",
        "4,300,400,000 years"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "If you planted the seeds of Quercus robur what would grow?",
      "options": [
        "Trees",
        "Vegtables",
        "Flowers",
        "Grains"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which is the chemical name of H2O?",
      "options": [
        "Dihydrogen Monoxide",
        "Manganese dioxide",
        "Anhydrous Sodium Carbonate",
        "Ammonium chloride"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Approximately what percentage of Earth's atmosphere is Oxygen?",
      "options": [
        "78%",
        "54%",
        "7%",
        "21%"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What polymer is used to make CDs, safety goggles and riot shields?",
      "options": [
        "Polycarbonate",
        "Rubber",
        "Nylon",
        "Bakelite"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the standard SI unit for mass?",
      "options": [
        "Pound",
        "Gram",
        "Kilogram",
        "Tonne"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who discovered the Law of Gravity?",
      "options": [
        "Galileo Galilei",
        "Charles Darwin",
        "Albert Einstein",
        "Sir Isaac Newton"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these two plates are best know for forming earthquakes and tsunami's? ",
      "options": [
        "Convergent Plate Boundaries/Oceanic Crust",
        "Oceanic & Continental Crust/Transform Plate Boundaries",
        "Transform Plate Boundaries/Divergent Plate Boundaries",
        "Divergent Plate Boundaries/Convergent/Oceanic Crust"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the standard SI unit for temperature?",
      "options": [
        "Rankine",
        "Celsius",
        "Fahrenheit",
        "Kelvin"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is NOT a word used to describe an earthquake?",
      "options": [
        "Drop-slide",
        "Temblor",
        "Strike-slip",
        "Foreshock"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the hottest planet in the Solar System?",
      "options": [
        "Venus",
        "Jupiter",
        "Mercury",
        "Mars"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the official name of the star located closest to the North Celestial Pole?",
      "options": [
        "Iota Cephei",
        "Gamma Cephei",
        "Polaris",
        "Eridanus"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the name of the first artificial Earth satellite, launched by the Soviet Union in 1957?",
      "options": [
        "Soyuz 7K-OK",
        "Zenit-2",
        "Voskhod 3KV",
        "Sputnik 1"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The biggest distinction between a eukaryotic cell and a prokaryotic cell is:",
      "options": [
        "The overall size",
        "The presence or absence of certain organelles",
        "The mode of reproduction",
        "The presence or absence of a nucleus"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The 'Islets of Langerhans' is found in which human organ?",
      "options": [
        "Pancreas",
        "Kidney",
        "Liver",
        "Brain"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "At what temperature does water boil?",
      "options": [
        "200°F",
        "178°F",
        "212°F",
        "181°F"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On the periodic table of elements, what is the symbol for Tin?",
      "options": [
        "Na",
        "Ni",
        "Sn",
        "Ti"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is a type of stretch/deep tendon reflex?",
      "options": [
        "Gag reflex",
        "Pupillary light reflex",
        "Scratch reflex",
        "Ankle jerk reflex"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "About how old is Earth?",
      "options": [
        "3.5 Billion Years",
        "2.5 Billion Years",
        "5.5 Billion Years",
        "4.5 Billion Years"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the scientific name for the extinct hominin known as \"Lucy\"?",
      "options": [
        "Australopithecus Antaris",
        "Australopithecus Africanus",
        "Australopithecus Architeuthis",
        "Australopithecus Afarensis"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which desert is the only desert in the world where the \"Saguaro\" cactus grows indigenously?",
      "options": [
        "The Yuma Desert",
        "The Sonoran Desert",
        "The Gobi Desert",
        "The Arabian Desert"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following elements is typically used in the doping of the semiconductor silicon?",
      "options": [
        "Oxygen",
        "Carbon",
        "Iron",
        "Boron"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In Psychology, which need appears highest in the \"Maslow's hierarchy of needs\" pyramid?",
      "options": [
        "Esteem",
        "Physiological",
        "Safety",
        "Love"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does the term \"isolation\" refer to in microbiology?",
      "options": [
        "A lack of nutrition in microenviroments",
        "The nitrogen level in soil",
        "Testing effects of certain microorganisms in an isolated enviroments, such as caves",
        "The separation of a strain from a natural, mixed population of living microbes"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Autosomal-dominant Compelling Helio-Ophthalmic Outburst syndrome is the need to do what when seeing the Sun?",
      "options": [
        "Cough",
        "Yawn",
        "Sneeze",
        "Hiccup"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "On the Beaufort Scale of wind force, what wind name is given to number 8?",
      "options": [
        "Breeze",
        "Hurricane",
        "Storm",
        "Gale"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which scientific unit is named after an Italian nobleman?",
      "options": [
        "Volt",
        "Hertz",
        "Ohm",
        "Pascal"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Where did the dog breed \"Chihuahua\" originate?",
      "options": [
        "Mexico",
        "Russia",
        "France",
        "Spain"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the powerhouse of the cell?",
      "options": [
        "Mitochondria",
        "Ribosome",
        "Redbull",
        "Nucleus"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Rhinoplasty is a surgical procedure on what part of the human body?",
      "options": [
        "Ears",
        "Chin",
        "Nose",
        "Neck"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What term is best associated with Sigmund Freud?",
      "options": [
        "Cognitive-Behavioral Therapy",
        "Theory of Gravity",
        "Dialectical Behavior Therapy",
        "Psychoanalysis"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the unit of electrical capacitance?",
      "options": [
        "Watt",
        "Farad",
        "Henry",
        "Gauss"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What are human nails made of?",
      "options": [
        "Bone",
        "Chitin",
        "Calcium",
        "Keratin"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The medical term for the belly button is which of the following?",
      "options": [
        "Nevus",
        "Nares",
        "Umbilicus",
        "Paxillus"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the common name of the chemical compound \"dihydrogen monoxide\"?",
      "options": [
        "Laughing Gas",
        "Ammonia ",
        "Water",
        "Methane"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is the term for \"surgical complications resulting from surgical sponges left inside the patient's body?",
      "options": [
        "Jentacular",
        "Gossypiboma",
        "Gongoozler",
        "Meupareunia"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the first organic compound to be synthesized from inorganic compounds?",
      "options": [
        "Formaldehyde",
        "Urea",
        "Ethanol",
        "Propane"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the most potent toxin known?",
      "options": [
        "Botulinum toxin",
        "Cyanide",
        "Asbestos",
        "Ricin"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many objects are equivalent to one mole?",
      "options": [
        "6.002 x 10^23",
        "6.022 x 10^22",
        "6.022 x 10^23",
        "6.002 x 10^22"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these is a semiconductor amplifying device?",
      "options": [
        "tube",
        "transistor",
        "P-N junction",
        "diode"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the hottest planet in the solar system",
      "options": [
        "Venus",
        "Jupiter",
        "Mars",
        "Mercury "
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Gannymede is the largest moon of which planet?",
      "options": [
        "Mars",
        "Jupiter",
        "Neptune",
        "Uranus"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the speed of light in a vacuum?",
      "options": [
        "50,461 m/s",
        "308,215,043 m/s",
        "751,665,014,151 m/s",
        "299,792,458 m/s"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the colour of unoxidized blood?",
      "options": [
        "Blue",
        "Purple",
        "Green",
        "Red"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which element has the chemical symbol 'Fe'?",
      "options": [
        "Gold",
        "Silver",
        "Tin",
        "Iron"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who developed the first successful polio vaccine in the 1950s?",
      "options": [
        "John F. Enders",
        "Thomas Weller",
        "Jonas Salk",
        "Frederick Robbins"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where is the Gluteus Maximus muscle located?",
      "options": [
        "Arm",
        "Head",
        "Torso",
        "Butt"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Deuterium is an isotope of which element?",
      "options": [
        "Hydrogen",
        "Nitrogen",
        "Helium",
        "Neon"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Myopia is the scientific term for which condition?",
      "options": [
        "Shortsightedness",
        "Clouded Vision",
        "Double Vision",
        "Farsightedness"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the unit of electrical resistance?",
      "options": [
        "Tesla",
        "Mho",
        "Ohm",
        "Joule"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which psychological term refers to the stress of holding contrasting beliefs?",
      "options": [
        "Flip-Flop Syndrome",
        "Split-Brain",
        "Blind Sight",
        "Cognitive Dissonance"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following bones is not in the leg?",
      "options": [
        "Tibia",
        "Fibula ",
        "Radius",
        "Patella"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is isobutylphenylpropanoic acid more commonly known as?",
      "options": [
        "Morphine",
        "Ketamine",
        "Aspirin",
        "Ibuprofen"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How old is the universe?",
      "options": [
        "7.9 Billion Years",
        "13.8 Billion Years",
        "4.5 Billion Years",
        "16.2 Billion Years"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest living organism currently known to man?",
      "options": [
        "Blue Whale",
        "Redwood Tree",
        "The Coral Reef",
        "Honey Fungus"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Axiom of Preventive Medicine states that people with ___ risk for a disease should be screened and we should treat ___ of those people.",
      "options": [
        "low, some",
        "high, some",
        "high, all",
        "low, all"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "An organism described as \"heliotropic\" has a tendancy to move towards which of these things?",
      "options": [
        "Water",
        "Trees",
        "Pollen",
        "Light"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following is considered classical conditioning?",
      "options": [
        "Schrödinger's cat experiment",
        "Skinner box experiment",
        "Harlow's monkey experiments",
        "Pavlov's dog experiments"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What genetic disease is caused by having an extra Y chromosome (XYY)?",
      "options": [
        "Klinefelter's Syndrome",
        "Turner's Syndrome",
        "Jacob's Syndrome",
        "Down Syndrome"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which portion of the Marijuana plant produces the psychoactive substance known as THC?",
      "options": [
        "Root Ball",
        "Female Flower",
        "Leaves",
        "Male Flower"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In aeronautics, flaps and slats are used to control what on an aircraft?",
      "options": [
        "Thrust",
        "Drag",
        "Lift",
        "Weight "
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Sun consists of mostly which two elements?",
      "options": [
        "Hydrogen & Helium",
        "Carbon & Helium",
        "Carbon & Nitrogen",
        "Hydrogen & Nitrogen"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many degrees Fahrenheit is 100 degrees Celsius? ",
      "options": [
        "212",
        "451",
        "100",
        "326"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is an alternative name for multiple personality disorder?",
      "options": [
        "Schizophrenia",
        "Identity crisis",
        "Dissociative identity disorder",
        "Body integrity identity disorder"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Coulrophobia is the irrational fear of what?",
      "options": [
        "Tunnels",
        "Cemeteries",
        "Needles",
        "Clowns"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the atomic number of Uranium ",
      "options": [
        "92",
        "167",
        "17",
        "235"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is Hypernatremia?",
      "options": [
        "Decrease in blood potassium",
        "Increase in blood glucose",
        "Increase in blood sodium",
        "Decrease in blood iron"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which planet in the Solar System is the closest to the Sun?",
      "options": [
        "Earth",
        "Mercury",
        "Mars",
        "Venus"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "When the Falcon Heavy was launched on it's test flight, what was the only part of the operation that failed?",
      "options": [
        "Side Booster Landing",
        "Deployment of Starman",
        "Ignition and Liftoff",
        "Center Core Landing"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which is the longest bone in the human body? ",
      "options": [
        "Fibula",
        "Femur",
        "Ulna",
        "Scapula"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these animals belongs in class Chondrichthyes?",
      "options": [
        "Octopus",
        "Catfish",
        "Killer whale",
        "Great white shark"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Muscle fiber is constructed of bundles small long organelles called what?",
      "options": [
        "Epimysium",
        "Myocardium",
        "Myofibrils",
        "Myofiaments"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The element involved in making human blood red is which of the following?",
      "options": [
        "Copper",
        "Iridium",
        "Cobalt",
        "Iron"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the thin, outermost layer of the Earth?",
      "options": [
        "Mantle",
        "Crust",
        "Exosphere",
        "Outer Core"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which element has the highest melting point?",
      "options": [
        "Osmium",
        "Platinum",
        "Tungsten",
        "Carbon"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is the male pollen-producing reproductive part of a flower?",
      "options": [
        "Petal",
        "Stamen",
        "Sepal",
        "Pistil"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Approximately how long is a year on Uranus?",
      "options": [
        "47 Earth years",
        "62 Earth years",
        "109 Earth years",
        "84 Earth years"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In human biology, a circadium rhythm relates to a period of roughly how many hours?",
      "options": [
        "24",
        "32",
        "16",
        "8"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In physics, conservation of energy and conservation of momentum are both consequences of which of the following?",
      "options": [
        "Carnot's Theorem",
        "Wick's Theorem",
        "Noether's Theorem",
        "Bell's Theorem"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which horizon in a soil profile consists of bedrock?",
      "options": [
        "O",
        "D",
        "B",
        "R"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these elements on the Periodic Table is a Noble Gas?",
      "options": [
        "Potassium",
        "Iodine",
        "Colbalt",
        "Neon"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the unit of electrical inductance?",
      "options": [
        "Henry",
        "Mho",
        "Coulomb",
        "Weber"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The medical condition osteoporosis affects which part of the body?",
      "options": [
        "Bones",
        "Heart",
        "Brain",
        "Skin"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which Apollo mission was the first one to land on the Moon?",
      "options": [
        "Apollo 10",
        "Apollo 9",
        "Apollo 13",
        "Apollo 11"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Deionized water is water with which of the following removed?",
      "options": [
        "Iron",
        "Hydrogen",
        "Oxygen",
        "Uncharged atoms"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
      "options": [
        "Nitrogen",
        "Carbon",
        "Hydrogen",
        "Helium"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which noble gas has the lowest atomic number?",
      "options": [
        "Helium",
        "Neon",
        "Argon",
        "Krypton"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these is a stop codon in DNA?",
      "options": [
        "ACT",
        "ACA",
        "GTA",
        "TAA"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Botanically speaking, which of these fruits is NOT a berry?",
      "options": [
        "Blueberry",
        "Banana",
        "Concord Grape",
        "Strawberry"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which major extinction event was caused by an asteroid collision and eliminated the majority of non-avian dinosaurs?",
      "options": [
        "Permian-Triassic",
        "Cretaceous-Paleogene",
        "Triassic-Jurassic",
        "Ordovician-Silurian"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What lies at the center of our galaxy?",
      "options": [
        "A wormhole",
        "A supernova",
        "A quasar",
        "A black hole"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What mineral has the lowest number on the Mohs scale?",
      "options": [
        "Gypsum",
        "Diamond",
        "Talc",
        "Quartz"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What common name is given to the medial condition, tibial stress syndrome (MTSS)?",
      "options": [
        "Carpal Tunnel",
        "Tennis Elbow",
        "Housemaid's Knee",
        "Shin Splints"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is \"Stenoma\"?",
      "options": [
        "A genus of moths",
        "A port city in the carribean",
        "A type of seasoning",
        "A combat stimulant from WW2"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many protons are in an oxygen atom?",
      "options": [
        "Four",
        "Eight",
        "Six",
        "Two"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Alzheimer's disease primarily affects which part of the human body?",
      "options": [
        "Brain",
        "Heart",
        "Skin",
        "Lungs"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The Western Lowland Gorilla is scientifically know as?",
      "options": [
        "Gorilla Gorilla Diehli",
        "Gorilla Beringei Graueri",
        "Gorilla Gorilla Gorilla",
        "Gorilla Beringei Beringei"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The human right lung has how many lobes?",
      "options": [
        "1",
        "4",
        "3",
        "2"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On which mission did the Space Shuttle Columbia break up upon re-entry?",
      "options": [
        "STS-107",
        "STS-61-C",
        "STS-51-L",
        "STS-109"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does DNA stand for?",
      "options": [
        "Deoxyribonucleic Acid",
        "Detoxic Acid",
        "Deoxyribogenetic Atoms",
        "Deoxyribogenetic Acid"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What element on the periodic table has 92 electrons?",
      "options": [
        "Uranium",
        "Iron",
        "Hydrogen",
        "Sulfur"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
      "options": [
        "Joseph John Thomson",
        "Ernest Rutherford",
        "Archimedes",
        "Niels Henrik David Bohr"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Where did the Great Storm of 1987 make landfall at, first?",
      "options": [
        "Surrey",
        "Wales",
        "The Midlands",
        "Cornwall"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many planets make up our Solar System?",
      "options": [
        "9",
        "8",
        "7",
        "6"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
      "options": [
        "3",
        "5",
        "4",
        "6"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "To the nearest minute, how long does it take for light to travel from the Sun to the Earth?",
      "options": [
        "6 Minutes",
        "2 Minutes",
        "12 Minutes",
        "8 Minutes"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What physics principle relates the net electric flux out of a closed surface to the charge enclosed by that surface?",
      "options": [
        "Gauss's Law",
        "Faraday's Law",
        "Ampere's Law",
        "Biot-Savart Law"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What does LASER stand for?",
      "options": [
        "Lite analysing by stereo ecorazer",
        "Light amplifier by standby energy of radio",
        "Life antimatter by standing entry of range",
        "Light amplification by stimulated emission of radiation"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The medial meniscus forms which part of what joint in the human body?",
      "options": [
        "Elbow",
        "Ankle",
        "Shoulder",
        "Knee"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does RAID stand for?",
      "options": [
        "Randomized Abstract Identification Description",
        "Range of Applications with Identical Designs",
        "Rapid Access for Indexed Devices",
        "Redundant Array of Independent Disks"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On which computer hardware device is the BIOS chip located?",
      "options": [
        "Hard Disk Drive",
        "Central Processing Unit",
        "Graphics Processing Unit",
        "Motherboard"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Lenovo acquired IBM's personal computer division, including the ThinkPad line of laptops and tablets, in what year?",
      "options": [
        "1999",
        "2008",
        "2002",
        "2005"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following is a personal computer made by the Japanese company Fujitsu?",
      "options": [
        "PC-9801",
        "Xmillennium ",
        "MSX",
        "FM-7"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Harvard architecture for micro-controllers added which additional bus?",
      "options": [
        "Address",
        "Data",
        "Control",
        "Instruction"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the code name for the mobile operating system Android 7.0?",
      "options": [
        "Nougat",
        "Jelly Bean",
        "Ice Cream Sandwich",
        "Marshmallow"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "While Apple was formed in California, in which western state was Microsoft founded?",
      "options": [
        "New Mexico",
        "Washington",
        "Arizona",
        "Colorado"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many bytes are in a single Kibibyte?",
      "options": [
        "2400",
        "1000",
        "1240",
        "1024"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Nvidia's headquarters are based in which Silicon Valley city?",
      "options": [
        "Santa Clara",
        "Mountain View",
        "Cupertino",
        "Palo Alto"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which internet company began life as an online bookstore called 'Cadabra'?",
      "options": [
        "eBay",
        "Overstock",
        "Amazon",
        "Shopify"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In CSS, which of these values CANNOT be used with the \"position\" property?",
      "options": [
        "absolute",
        "center",
        "static",
        "relative"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What port does HTTP run on?",
      "options": [
        "80",
        "443",
        "53",
        "23"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The Electron computer was released in Britain during 1983 for the home computing market, by which company? ",
      "options": [
        "Amstrad PLC",
        "Sinclair Research",
        "Acorn Computers",
        "Commodore Business Machines"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What does CPU stand for?",
      "options": [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processing Unit",
        "Central Processor Unit"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which computer hardware device provides an interface for all other connected devices to communicate?",
      "options": [
        "Random Access Memory",
        "Hard Disk Drive",
        "Central Processing Unit",
        "Motherboard"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the name of the process that sends one qubit of information using two bits of classical information?",
      "options": [
        "Quantum Teleportation",
        "Quantum Programming",
        "Quantum Entanglement",
        "Super Dense Coding"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What does LTS stand for in the software market?",
      "options": [
        "Long Term Support",
        "Long Taco Service",
        "Ludicrous Transfer Speed",
        "Ludicrous Turbo Speed"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In networking, what does OSPF stand for?",
      "options": [
        "Open Shortest Path First",
        "Order State Part First",
        "Order Sense Ping Find",
        "Open Signal Path Finder"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What does the computer software acronym JVM stand for?",
      "options": [
        "Just Virtual Machine",
        "Java Virtual Machine",
        "Java Visual Machine",
        "Java Vendor Machine"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In computing, what does LAN stand for?",
      "options": [
        "Land Address Navigation",
        "Light Access Node",
        "Local Area Network",
        "Long Antenna Node"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How long is an IPv6 address?",
      "options": [
        "32 bits",
        "64 bits",
        "128 bits",
        "128 bytes"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Who is the original author of the realtime physics engine called PhysX?",
      "options": [
        "NovodeX",
        "Ageia",
        "Nvidia",
        "AMD"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the first Android version specifically optimized for tablets?",
      "options": [
        "Honeycomb",
        "Froyo",
        "Eclair",
        "Marshmellow"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
      "options": [
        "China (People's Republic of)",
        "Taiwan",
        "Germany",
        "United States"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which programming language was developed by Sun Microsystems in 1995?",
      "options": [
        "Python",
        "Java",
        "Solaris OS",
        "C++"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which coding language was the #1 programming language in terms of usage on GitHub in 2015?",
      "options": [
        "PHP",
        "C#",
        "Python",
        "JavaScript"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "This mobile OS held the largest market share in 2012.",
      "options": [
        "iOS",
        "Symbian",
        "BlackBerry",
        "Android"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Originally used in PCM adapters, what frequency is the standard for sampling audio in the Compact Disc Digital Audio format?",
      "options": [
        "20.5 kHz",
        "44.1 kHz",
        "1.5 MHz",
        "32.0 kHz"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What five letter word is the motto of the IBM Computer company?",
      "options": [
        "Pixel",
        "Think",
        "Click",
        "Logic"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Approximately how many Apple I personal computers were created?",
      "options": [
        "200",
        "100",
        "500",
        "1000"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "If you were to code software in this language you'd only be able to type 0's and 1's.",
      "options": [
        "JavaScript",
        "Binary",
        "C++",
        "Python"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What amount of bits commonly equals one byte?",
      "options": [
        "8",
        "2",
        "64",
        "1"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Released in 2001, the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?",
      "options": [
        "Tiger",
        "Cheetah",
        "Puma",
        "Leopard"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What does the term GPU stand for?",
      "options": [
        "Graphical Proprietary Unit",
        "Graphics Processing Unit",
        "Graphite Producing Unit",
        "Gaming Processor Unit"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The acronym \"RIP\" stands for which of these?",
      "options": [
        "Routing Information Protocol",
        "Routine Inspection Protocol",
        "Regular Interval Processes",
        "Runtime Instance Processes"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What was the name given to Android 4.3?",
      "options": [
        "Lollipop",
        "Nutella",
        "Froyo",
        "Jelly Bean"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": ".at is the top-level domain for what country?",
      "options": [
        "Australia",
        "Austria",
        "Angola",
        "Argentina"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following physical typologies are used with Ethernet Networks?",
      "options": [
        "Star",
        "Hex",
        "Mesh",
        "Ring"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What internet protocol was documented in RFC 1459?",
      "options": [
        "IRC",
        "FTP",
        "HTTP",
        "HTTPS"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The programming language 'Swift' was created to replace what other programming language?",
      "options": [
        "Ruby",
        "C++",
        "Objective-C",
        "C#"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which SQL keyword is used to fetch data from a database?",
      "options": [
        "VALUES",
        "EXEC",
        "INDEX",
        "SELECT"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      "options": [
        "HD Graphics 600",
        "HD Graphics 700 ",
        "HD Graphics 500",
        "HD Graphics 7000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Generally, which component of a computer draws the most power?",
      "options": [
        "Power Supply",
        "Video Card",
        "Hard Drive",
        "Processor"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many bits make up the significand portion of a single precision floating point number?",
      "options": [
        "23",
        "15",
        "53",
        "8"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993?",
      "options": [
        "Enigma Machine",
        "Skipjack",
        "Clipper Chip",
        "Nautilus"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does the 'S' in the RSA encryption algorithm stand for?",
      "options": [
        "Schottky",
        "Secure",
        "Shamir",
        "Stable"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following is the oldest of these computers by release date?",
      "options": [
        "Commodore 64",
        "ZX Spectrum",
        "TRS-80",
        "Apple 3"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?",
      "options": [
        "Micronesia",
        "Fiji",
        "Tuvalu",
        "Marshall Islands"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Unix Time is defined as the number of seconds that have elapsed since when?",
      "options": [
        "Midnight on the creator of Unix's birthday",
        "Midnight, July 4, 1976",
        "Midnight, January 1, 1970",
        "Midnight, July 4, 1980"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
      "options": [
        "Intel 8088",
        "Yamaha YM2612",
        "Zilog Z80",
        "Motorola 68000"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does GHz stand for?",
      "options": [
        "Gigahertz",
        "Gigahatz",
        "Gigahetz",
        "Gigahotz"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What does AD stand for in relation to Windows Operating Systems? ",
      "options": [
        "Alternative Drive",
        "Active Directory",
        "Automated Database",
        "Active Department"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Moore's law originally stated that the number of transistors on a microprocessor chip would double every...",
      "options": [
        "Four Years",
        "Eight Years",
        "Year",
        "Two Years"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What language does Node.js use?",
      "options": [
        "JavaScript",
        "Joomla Source Code",
        "Java Source",
        "Java"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "When was the programming language \"C#\" released?",
      "options": [
        "1998",
        "1999",
        "2001",
        "2000"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the name of the first Bulgarian personal computer?",
      "options": [
        "Pravetz 8D",
        "IMKO-1",
        "Pravetz 82",
        "IZOT 1030"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "On Twitter, what was the original character limit for a Tweet?",
      "options": [
        "120",
        "160",
        "100",
        "140"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is NOT a computer science algorithm?",
      "options": [
        "Bubble Sort",
        "Quick Sort",
        "Float Sort",
        "Merge Sort"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": ".rs is the top-level domain for what country?",
      "options": [
        "Serbia",
        "Russia",
        "Romania",
        "Rwanda"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which operating system was released first?",
      "options": [
        "Windows",
        "Linux",
        "Mac OS",
        "OS/2"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the codename of the eighth generation Intel Core micro-architecture launched in October 2017?",
      "options": [
        "Coffee Lake",
        "Broadwell",
        "Skylake",
        "Sandy Bridge"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "HTML is what type of language?",
      "options": [
        "Macro Language",
        "Programming Language",
        "Scripting Language",
        "Markup Language"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In the programming language \"Python\", which of these statements would display the string \"Hello World\" correctly?",
      "options": [
        "console.log(\"Hello World\")",
        "echo \"Hello World\"",
        "printf(\"Hello World\")",
        "print(\"Hello World\")"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which computer language would you associate Django framework with?",
      "options": [
        "C#",
        "Python",
        "C++",
        "Java"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In programming, the ternary operator is mostly defined with what symbol(s)?",
      "options": [
        "?:",
        "?",
        "if then",
        "??"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does \"LCD\" stand for?",
      "options": [
        "Last Common Difference",
        "Language Control Design",
        "Liquid Crystal Display",
        "Long Continuous Design"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many values can a single byte represent?",
      "options": [
        "256",
        "1024",
        "1",
        "8"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What was the name of the security vulnerability found in Bash in 2014?",
      "options": [
        "Bashbug",
        "Heartbleed",
        "Shellshock",
        "Stagefright"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The numbering system with a radix of 16 is more commonly referred to as ",
      "options": [
        "Hexidecimal",
        "Octal",
        "Duodecimal",
        "Binary"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which data structure does FILO apply to?",
      "options": [
        "Queue",
        "Stack",
        "Heap",
        "Tree"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name of Layer 7 of the OSI model?",
      "options": [
        "Application",
        "Present",
        "Session",
        "Network"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What did the name of the Tor Anonymity Network orignially stand for?",
      "options": [
        "The Only Router",
        "The Orange Router",
        "The Ominous Router",
        "The Onion Router"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In the server hosting industry IaaS stands for...",
      "options": [
        "Infrastructure as a Service",
        "Internet as a Service",
        "Internet and a Server",
        "Infrastructure as a Server"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which one of these is not an official development name for a Ubuntu release?",
      "options": [
        "Utopic Unicorn",
        "Trusty Tahr",
        "Wily Werewolf",
        "Mystic Mansion"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "On a standard American QWERTY keyboard, what symbol will you enter if you hold the shift key and press 1?",
      "options": [
        "Exclamation Mark",
        "Percent Sign",
        "Dollar Sign",
        "Asterisk"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What does the term MIME stand for, in regards to computing?",
      "options": [
        "Multipurpose Interleave Mail Exchange",
        "Mail Internet Mail Exchange",
        "Mail Interleave Method Exchange",
        "Multipurpose Internet Mail Extensions"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the domain name for the country Tuvalu?",
      "options": [
        ".tv",
        ".tl",
        ".tt",
        ".tu"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following computer components can be built using only NAND gates?",
      "options": [
        "CPU",
        "ALU",
        "RAM",
        "Register"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "In computing terms, typically what does CLI stand for?",
      "options": [
        "Command Line Interface",
        "Common Language Interface",
        "Control Line Interface",
        "Common Language Input"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Whistler was the codename of this Microsoft Operating System.",
      "options": [
        "Windows 2000",
        "Windows 95",
        "Windows 7",
        "Windows XP"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these programming languages is a low-level language?",
      "options": [
        "Assembly",
        "C#",
        "Pascal",
        "Python"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does the Prt Sc button do?",
      "options": [
        "Nothing",
        "Saves a .png file of what's on the screen in your screenshots folder in photos",
        "Closes all windows",
        "Captures what's on the screen and copies it to your clipboard"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these is not a layer in the OSI model for data communications?",
      "options": [
        "Connection Layer",
        "Physical Layer",
        "Transport Layer",
        "Application Layer"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following languages is used as a scripting language in the Unity 3D game engine?",
      "options": [
        "Java",
        "C++",
        "Objective-C",
        "C#"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many kilobytes in one gigabyte (in decimal)?",
      "options": [
        "1024",
        "1000",
        "1048576",
        "1000000"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "The name of technology company HP stands for what?",
      "options": [
        "Howard Packmann",
        "Hewlett-Packard",
        "Husker-Pollosk",
        "Hellman-Pohl"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the number of keys on a standard Windows Keyboard?",
      "options": [
        "76",
        "104",
        "94",
        "64"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "In web design, what does CSS stand for?",
      "options": [
        "Computer Style Sheet",
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Cascading Style Sheet"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?",
      "options": [
        "Heartbleed",
        "Shellscript",
        "Corrupted Blood",
        "Shellshock"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What does the International System of Quantities refer 1024 bytes as?",
      "options": [
        "Kibibyte",
        "Kylobyte",
        "Kilobyte",
        "Kelobyte"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these people was NOT a founder of Apple Inc?",
      "options": [
        "Steve Wozniak",
        "Ronald Wayne",
        "Steve Jobs",
        "Jonathan Ive"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What does the acronym CDN stand for in terms of networking?",
      "options": [
        "Computational Data Network",
        "Content Delivery Network",
        "Content Distribution Network",
        "Compressed Data Network"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the most preferred image format used for logos in the Wikimedia database?",
      "options": [
        ".png",
        ".svg",
        ".jpeg",
        ".gif"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of these names was an actual codename for a cancelled Microsoft project?",
      "options": [
        "Enceladus",
        "Pollux",
        "Saturn",
        "Neptune"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "According to DeMorgan's Theorem, the Boolean expression (AB)' is equivalent to:",
      "options": [
        "A'B + B'A",
        "A'B'",
        "A' + B'",
        "AB' + AB"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "When did the online streaming service \"Mixer\" launch?",
      "options": [
        "2011",
        "2013",
        "2016",
        "2009"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which kind of algorithm is Ron Rivest not famous for creating?",
      "options": [
        "Secret sharing scheme",
        "Hashing algorithm",
        "Asymmetric encryption",
        "Stream cipher"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What programming language was GitHub written in?",
      "options": [
        "JavaScript",
        "Python",
        "Lua",
        "Ruby"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      "options": [
        "Public",
        "Private",
        "Final",
        "Static"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "In computing, what does MIDI stand for?",
      "options": [
        "Musical Instrument Digital Interface",
        "Musical Interface of Digital Instruments",
        "Musical Instrument Data Interface",
        "Modular Interface of Digital Instruments"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the chemical symbol for gold?",
      "options": [
        "Go",
        "Gd",
        "Au",
        "Ag"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What planet is known as the Red Planet?",
      "options": [
        "Venus",
        "Mars",
        "Jupiter",
        "Mercury"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the hardest natural substance on Earth?",
      "options": [
        "Titanium",
        "Diamond",
        "Quartz",
        "Granite"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "How many bones are in the adult human body?",
      "options": [
        "186",
        "206",
        "216",
        "256"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What gas do plants absorb from the atmosphere?",
      "options": [
        "Oxygen",
        "Nitrogen",
        "Carbon dioxide",
        "Hydrogen"
      ],
      "correct": 2,
      "pool": "multiplayer"
    }
  ],
  "Math": [
    {
      "q": "What is the value of Pi to two decimal places?",
      "options": [
        "3.14",
        "3.16",
        "3.12",
        "3.18"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 144?",
      "options": [
        "11",
        "12",
        "13",
        "14"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many sides does a hexagon have?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 15% of 200?",
      "options": [
        "20",
        "25",
        "30",
        "35"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the next prime number after 7?",
      "options": [
        "9",
        "10",
        "11",
        "13"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 7 multiplied by 8?",
      "options": [
        "54",
        "56",
        "58",
        "64"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the sum of angles in a triangle?",
      "options": [
        "90 degrees",
        "180 degrees",
        "270 degrees",
        "360 degrees"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 25% of 80?",
      "options": [
        "15",
        "20",
        "25",
        "30"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many degrees in a right angle?",
      "options": [
        "45",
        "90",
        "180",
        "360"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 2 to the power of 5?",
      "options": [
        "16",
        "25",
        "32",
        "64"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 81?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many degrees are in a circle?",
      "options": [
        "180",
        "270",
        "360",
        "450"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 3 cubed (3³)?",
      "options": [
        "9",
        "18",
        "27",
        "81"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral for 50?",
      "options": [
        "C",
        "D",
        "L",
        "M"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 17 + 28?",
      "options": [
        "43",
        "44",
        "45",
        "46"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many millimeters are in a meter?",
      "options": [
        "10",
        "100",
        "1000",
        "10000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the perimeter of a square with sides of 5cm?",
      "options": [
        "15cm",
        "20cm",
        "25cm",
        "30cm"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 144 divided by 12?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral for 100?",
      "options": [
        "L",
        "C",
        "D",
        "M"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many sides does an octagon have?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 5 factorial (5!)?",
      "options": [
        "20",
        "60",
        "120",
        "720"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the least common multiple of 4 and 6?",
      "options": [
        "8",
        "10",
        "12",
        "24"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 225?",
      "options": [
        "13",
        "14",
        "15",
        "16"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many vertices does a cube have?",
      "options": [
        "4",
        "6",
        "8",
        "12"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 0.75 as a fraction?",
      "options": [
        "1/2",
        "2/3",
        "3/4",
        "4/5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the area of a rectangle 4m by 7m?",
      "options": [
        "22 sq m",
        "28 sq m",
        "32 sq m",
        "35 sq m"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 40% of 150?",
      "options": [
        "50",
        "55",
        "60",
        "65"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the next number: 2, 4, 8, 16, __?",
      "options": [
        "24",
        "28",
        "32",
        "36"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral for 500?",
      "options": [
        "C",
        "D",
        "L",
        "M"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 11 squared?",
      "options": [
        "111",
        "121",
        "131",
        "141"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many faces does a standard die have?",
      "options": [
        "4",
        "5",
        "6",
        "8"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the sum of the first 10 positive integers?",
      "options": [
        "45",
        "50",
        "55",
        "60"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 1000 divided by 8?",
      "options": [
        "115",
        "120",
        "125",
        "130"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What type of angle is greater than 90 but less than 180 degrees?",
      "options": [
        "Acute",
        "Right",
        "Obtuse",
        "Reflex"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the greatest common factor of 24 and 36?",
      "options": [
        "6",
        "8",
        "12",
        "18"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many edges does a cube have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 2/5 as a decimal?",
      "options": [
        "0.2",
        "0.4",
        "0.5",
        "0.6"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral for 1000?",
      "options": [
        "C",
        "D",
        "L",
        "M"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 13 x 13?",
      "options": [
        "156",
        "163",
        "169",
        "176"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many zeros are in one million?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the circumference of a circle with radius 7 (use π=22/7)?",
      "options": [
        "22",
        "44",
        "66",
        "88"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 3/8 + 1/8?",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "1"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square of 25?",
      "options": [
        "525",
        "575",
        "625",
        "675"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many sides does a pentagon have?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 7 to the power of 2?",
      "options": [
        "14",
        "21",
        "49",
        "56"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the value of X if 3X = 27?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the sum of all angles in a quadrilateral?",
      "options": [
        "180°",
        "270°",
        "360°",
        "540°"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 99 + 88?",
      "options": [
        "177",
        "187",
        "197",
        "207"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many centimeters are in 2.5 meters?",
      "options": [
        "25",
        "250",
        "2500",
        "25000"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the median of 2, 4, 6, 8, 10?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 1/4 of 200?",
      "options": [
        "25",
        "40",
        "50",
        "75"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 400?",
      "options": [
        "18",
        "19",
        "20",
        "21"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 6 factorial (6!)?",
      "options": [
        "120",
        "360",
        "720",
        "840"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many sides does a decagon have?",
      "options": [
        "8",
        "9",
        "10",
        "12"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 15 squared?",
      "options": [
        "200",
        "215",
        "225",
        "250"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the area of a triangle with base 10 and height 6?",
      "options": [
        "16",
        "30",
        "60",
        "80"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 2000 - 1234?",
      "options": [
        "666",
        "756",
        "766",
        "776"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What number is represented by the Roman numeral XIV?",
      "options": [
        "4",
        "9",
        "14",
        "16"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 8 x 12?",
      "options": [
        "86",
        "92",
        "96",
        "102"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1/3 + 1/6?",
      "options": [
        "1/2",
        "1/3",
        "2/3",
        "1/9"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many faces does a triangular prism have?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the value of the digit 5 in 3,542?",
      "options": [
        "5",
        "50",
        "500",
        "5000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 360 divided by 9?",
      "options": [
        "36",
        "40",
        "44",
        "48"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What type of triangle has all sides equal?",
      "options": [
        "Scalene",
        "Isosceles",
        "Equilateral",
        "Right"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 10% of 450?",
      "options": [
        "35",
        "40",
        "45",
        "50"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the next number: 1, 1, 2, 3, 5, 8, __?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 4 cubed (4³)?",
      "options": [
        "12",
        "16",
        "48",
        "64"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many seconds are in an hour?",
      "options": [
        "360",
        "600",
        "3600",
        "6000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the value of X if X + 15 = 42?",
      "options": [
        "17",
        "27",
        "37",
        "47"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 75% of 80?",
      "options": [
        "50",
        "55",
        "60",
        "65"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 196?",
      "options": [
        "12",
        "13",
        "14",
        "15"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 17 x 6?",
      "options": [
        "92",
        "96",
        "102",
        "112"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many degrees is a straight angle?",
      "options": [
        "90",
        "180",
        "270",
        "360"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the product of 9 and 11?",
      "options": [
        "90",
        "99",
        "100",
        "101"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 500 minus 237?",
      "options": [
        "253",
        "263",
        "273",
        "283"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 2 to the power of 8?",
      "options": [
        "128",
        "256",
        "512",
        "1024"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 3.5 x 4?",
      "options": [
        "12",
        "13",
        "14",
        "15"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many minutes are in 3 hours?",
      "options": [
        "120",
        "150",
        "180",
        "200"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the perimeter of a rectangle 8m by 5m?",
      "options": [
        "13m",
        "26m",
        "40m",
        "52m"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 125 divided by 5?",
      "options": [
        "20",
        "25",
        "30",
        "35"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the mean of 10, 20, 30?",
      "options": [
        "15",
        "20",
        "25",
        "30"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What type of angle is less than 90 degrees?",
      "options": [
        "Acute",
        "Right",
        "Obtuse",
        "Reflex"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1.5 + 2.75?",
      "options": [
        "3.25",
        "3.75",
        "4.25",
        "4.75"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square of 30?",
      "options": [
        "600",
        "800",
        "900",
        "1000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 20% of 500?",
      "options": [
        "50",
        "75",
        "100",
        "125"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many vertices does a triangle have?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 88 + 77?",
      "options": [
        "155",
        "165",
        "175",
        "185"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the cube root of 27?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 9 x 9?",
      "options": [
        "72",
        "81",
        "90",
        "99"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many days are in a leap year?",
      "options": [
        "364",
        "365",
        "366",
        "367"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1000 x 0.1?",
      "options": [
        "1",
        "10",
        "100",
        "1000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 5/8 as a percentage?",
      "options": [
        "50%",
        "55%",
        "62.5%",
        "75%"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 14 squared?",
      "options": [
        "168",
        "186",
        "196",
        "216"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the volume of a cube with sides of 3cm?",
      "options": [
        "9 cu cm",
        "18 cu cm",
        "27 cu cm",
        "36 cu cm"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 1/2 + 1/4 + 1/4?",
      "options": [
        "1/2",
        "3/4",
        "1",
        "1 1/4"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the remainder when 29 is divided by 4?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 60% of 250?",
      "options": [
        "125",
        "140",
        "150",
        "175"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many zeros are in one billion?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 16 x 16?",
      "options": [
        "236",
        "246",
        "256",
        "266"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What number comes next: 3, 6, 9, 12, __?",
      "options": [
        "13",
        "14",
        "15",
        "16"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 169?",
      "options": [
        "11",
        "12",
        "13",
        "14"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 7/10 as a decimal?",
      "options": [
        "0.07",
        "0.17",
        "0.7",
        "0.77"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 33 + 44 + 55?",
      "options": [
        "122",
        "132",
        "142",
        "152"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many sides does a heptagon have?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 2.5 x 2.5?",
      "options": [
        "5",
        "5.25",
        "6.25",
        "6.5"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the sum of 125 and 875?",
      "options": [
        "900",
        "950",
        "1000",
        "1100"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 10 to the power of 3?",
      "options": [
        "30",
        "100",
        "1000",
        "10000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many weeks are in a year?",
      "options": [
        "48",
        "50",
        "52",
        "54"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1.25 as a fraction?",
      "options": [
        "5/4",
        "4/5",
        "3/4",
        "1/4"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 200 divided by 8?",
      "options": [
        "20",
        "22",
        "24",
        "25"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 45 + 67?",
      "options": [
        "102",
        "112",
        "122",
        "132"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 12 squared?",
      "options": [
        "124",
        "134",
        "144",
        "154"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral IX?",
      "options": [
        "4",
        "6",
        "9",
        "11"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 5 x 5 x 5?",
      "options": [
        "75",
        "100",
        "125",
        "150"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many grams are in a kilogram?",
      "options": [
        "10",
        "100",
        "1000",
        "10000"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 18 divided by 3?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 0.5 x 0.5?",
      "options": [
        "0.1",
        "0.25",
        "0.5",
        "1"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the next prime after 13?",
      "options": [
        "14",
        "15",
        "16",
        "17"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 999 + 1?",
      "options": [
        "1000",
        "1001",
        "1010",
        "1100"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is half of 246?",
      "options": [
        "113",
        "123",
        "133",
        "143"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 8 squared?",
      "options": [
        "16",
        "32",
        "64",
        "128"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many months have 31 days?",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the product of 25 and 4?",
      "options": [
        "90",
        "95",
        "100",
        "105"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1/5 as a percentage?",
      "options": [
        "5%",
        "10%",
        "15%",
        "20%"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 6 x 7?",
      "options": [
        "36",
        "42",
        "48",
        "54"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 100 - 37?",
      "options": [
        "53",
        "63",
        "73",
        "83"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the cube of 4?",
      "options": [
        "12",
        "16",
        "48",
        "64"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 3/4 of 100?",
      "options": [
        "25",
        "50",
        "75",
        "80"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many hours are in a week?",
      "options": [
        "148",
        "158",
        "168",
        "178"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 19 x 5?",
      "options": [
        "85",
        "90",
        "95",
        "100"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 2/3 of 90?",
      "options": [
        "45",
        "50",
        "55",
        "60"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 1000 - 456?",
      "options": [
        "444",
        "544",
        "554",
        "644"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 256?",
      "options": [
        "14",
        "15",
        "16",
        "17"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 84 divided by 7?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 5 to the power of 3?",
      "options": [
        "15",
        "25",
        "125",
        "625"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 0.125 as a fraction?",
      "options": [
        "1/4",
        "1/6",
        "1/8",
        "1/10"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is double 375?",
      "options": [
        "650",
        "700",
        "750",
        "800"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 11 x 11?",
      "options": [
        "111",
        "121",
        "131",
        "141"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many degrees does a clock hand move in one hour?",
      "options": [
        "15",
        "30",
        "45",
        "60"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 250 + 750?",
      "options": [
        "900",
        "950",
        "1000",
        "1050"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 64?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 45% of 200?",
      "options": [
        "80",
        "85",
        "90",
        "95"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 7 x 7?",
      "options": [
        "42",
        "47",
        "49",
        "56"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 300 divided by 15?",
      "options": [
        "15",
        "18",
        "20",
        "25"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many days are in September?",
      "options": [
        "28",
        "29",
        "30",
        "31"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1/8 + 3/8?",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "1"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 10 x 10 x 10?",
      "options": [
        "100",
        "1000",
        "10000",
        "100000"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 80% of 50?",
      "options": [
        "35",
        "40",
        "45",
        "50"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 63 divided by 9?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 20 squared?",
      "options": [
        "200",
        "300",
        "400",
        "500"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1.5 + 1.5 + 1.5?",
      "options": [
        "3.5",
        "4",
        "4.5",
        "5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral for 9?",
      "options": [
        "IV",
        "VI",
        "IX",
        "XI"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 35 x 2?",
      "options": [
        "60",
        "65",
        "70",
        "75"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1/10 of 1000?",
      "options": [
        "10",
        "100",
        "1000",
        "10000"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 16 divided by 4?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 55 + 45?",
      "options": [
        "90",
        "95",
        "100",
        "105"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many sides does a nonagon have?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 2.5 + 7.5?",
      "options": [
        "9",
        "9.5",
        "10",
        "10.5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 90 divided by 10?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1/2 of 64?",
      "options": [
        "28",
        "30",
        "32",
        "34"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 100 minus 55?",
      "options": [
        "35",
        "40",
        "45",
        "50"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 6 squared?",
      "options": [
        "12",
        "24",
        "36",
        "48"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 2 + 2 x 2?",
      "options": [
        "4",
        "6",
        "8",
        "16"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 150 + 150?",
      "options": [
        "250",
        "275",
        "300",
        "325"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 72 divided by 8?",
      "options": [
        "7",
        "8",
        "9",
        "10"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1000 divided by 100?",
      "options": [
        "1",
        "10",
        "100",
        "1000"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 5% of 200?",
      "options": [
        "5",
        "10",
        "15",
        "20"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 13 + 17?",
      "options": [
        "28",
        "29",
        "30",
        "31"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 25 x 4?",
      "options": [
        "80",
        "90",
        "100",
        "110"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 100?",
      "options": [
        "8",
        "9",
        "10",
        "11"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 50 - 23?",
      "options": [
        "23",
        "25",
        "27",
        "29"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 4 x 4 x 4?",
      "options": [
        "32",
        "48",
        "64",
        "128"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many quarters make a dollar?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 88 divided by 8?",
      "options": [
        "9",
        "10",
        "11",
        "12"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 0.5 + 0.75?",
      "options": [
        "1",
        "1.25",
        "1.5",
        "1.75"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 19 + 19?",
      "options": [
        "36",
        "37",
        "38",
        "39"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 1/4 as a decimal?",
      "options": [
        "0.2",
        "0.25",
        "0.4",
        "0.5"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 8 + 8 + 8?",
      "options": [
        "16",
        "20",
        "24",
        "28"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 144 divided by 12?",
      "options": [
        "10",
        "11",
        "12",
        "13"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 6 + 7 + 8?",
      "options": [
        "19",
        "20",
        "21",
        "22"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 200 x 5?",
      "options": [
        "500",
        "750",
        "1000",
        "1500"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 12 x 12?",
      "options": [
        "124",
        "134",
        "144",
        "154"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the cube root of 64?",
      "options": [
        "2",
        "3",
        "4",
        "8"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 1000 divided by 25?",
      "options": [
        "35",
        "40",
        "45",
        "50"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 3.14159 commonly known as?",
      "options": [
        "Phi",
        "Pi",
        "Euler",
        "Tau"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 17 x 17?",
      "options": [
        "279",
        "289",
        "299",
        "309"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many degrees in each angle of an equilateral triangle?",
      "options": [
        "45",
        "50",
        "60",
        "90"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 625 divided by 25?",
      "options": [
        "20",
        "25",
        "30",
        "35"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 2 to the power of 10?",
      "options": [
        "512",
        "1024",
        "2048",
        "4096"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 289?",
      "options": [
        "15",
        "16",
        "17",
        "18"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 33 x 3?",
      "options": [
        "96",
        "99",
        "102",
        "105"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many edges does a tetrahedron have?",
      "options": [
        "4",
        "5",
        "6",
        "8"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 15% of 300?",
      "options": [
        "35",
        "40",
        "45",
        "50"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the next number: 1, 4, 9, 16, __?",
      "options": [
        "20",
        "23",
        "25",
        "36"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 0.333... as a fraction?",
      "options": [
        "1/4",
        "1/3",
        "3/10",
        "1/2"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 18 squared?",
      "options": [
        "314",
        "324",
        "334",
        "344"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many faces does a dodecahedron have?",
      "options": [
        "8",
        "10",
        "12",
        "20"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 7 factorial (7!)?",
      "options": [
        "720",
        "2520",
        "5040",
        "40320"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 3/5 + 2/5?",
      "options": [
        "1/2",
        "4/5",
        "1",
        "6/5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the LCM of 6 and 8?",
      "options": [
        "12",
        "18",
        "24",
        "48"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 21 x 21?",
      "options": [
        "421",
        "431",
        "441",
        "451"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 5/6 minus 1/6?",
      "options": [
        "1/3",
        "1/2",
        "2/3",
        "4/6"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the GCF of 48 and 60?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 0.625 as a fraction?",
      "options": [
        "5/8",
        "3/5",
        "2/3",
        "5/6"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 23 x 23?",
      "options": [
        "519",
        "529",
        "539",
        "549"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many vertices does an octahedron have?",
      "options": [
        "4",
        "6",
        "8",
        "12"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 35% of 200?",
      "options": [
        "60",
        "65",
        "70",
        "75"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 19 x 19?",
      "options": [
        "351",
        "361",
        "371",
        "381"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the sum of angles in a pentagon?",
      "options": [
        "360°",
        "450°",
        "540°",
        "720°"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 8 factorial divided by 7 factorial?",
      "options": [
        "1",
        "7",
        "8",
        "56"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 22 squared?",
      "options": [
        "464",
        "474",
        "484",
        "494"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 7/8 as a decimal?",
      "options": [
        "0.75",
        "0.825",
        "0.875",
        "0.9"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the value of X if 5X - 3 = 17?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 24 x 24?",
      "options": [
        "566",
        "576",
        "586",
        "596"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many faces does an icosahedron have?",
      "options": [
        "10",
        "12",
        "16",
        "20"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 55% of 400?",
      "options": [
        "200",
        "210",
        "220",
        "230"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 26 squared?",
      "options": [
        "666",
        "676",
        "686",
        "696"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 11/12 minus 5/12?",
      "options": [
        "1/4",
        "1/3",
        "1/2",
        "2/3"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 27 cubed?",
      "options": [
        "17683",
        "18683",
        "19683",
        "20683"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 0.2 x 0.3?",
      "options": [
        "0.05",
        "0.06",
        "0.5",
        "0.6"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 125 to the power of 1/3?",
      "options": [
        "3",
        "4",
        "5",
        "25"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the sum of 1 + 2 + 3 + ... + 20?",
      "options": [
        "190",
        "200",
        "210",
        "220"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 28 squared?",
      "options": [
        "774",
        "784",
        "794",
        "804"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 9/10 as a percentage?",
      "options": [
        "80%",
        "85%",
        "90%",
        "95%"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 4 to the power of 4?",
      "options": [
        "64",
        "128",
        "256",
        "512"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the next prime after 23?",
      "options": [
        "25",
        "27",
        "29",
        "31"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 29 squared?",
      "options": [
        "831",
        "841",
        "851",
        "861"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 2/7 + 3/7?",
      "options": [
        "5/14",
        "5/7",
        "1",
        "6/7"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 10 to the power of 0?",
      "options": [
        "0",
        "1",
        "10",
        "100"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the square root of 324?",
      "options": [
        "16",
        "17",
        "18",
        "19"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 31 squared?",
      "options": [
        "951",
        "961",
        "971",
        "981"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 0.75 times 8?",
      "options": [
        "5",
        "5.5",
        "6",
        "6.5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral for 40?",
      "options": [
        "XL",
        "VL",
        "IL",
        "XXX"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 32 squared?",
      "options": [
        "1014",
        "1024",
        "1034",
        "1044"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the median of 1, 3, 3, 6, 7, 8, 9?",
      "options": [
        "3",
        "5",
        "6",
        "7"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 33 squared?",
      "options": [
        "1079",
        "1089",
        "1099",
        "1109"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 15 cubed?",
      "options": [
        "2375",
        "3375",
        "4375",
        "5375"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 0.4 as a fraction in lowest terms?",
      "options": [
        "2/5",
        "4/10",
        "1/4",
        "4/5"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 34 squared?",
      "options": [
        "1146",
        "1156",
        "1166",
        "1176"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the next number: 2, 6, 12, 20, __?",
      "options": [
        "28",
        "30",
        "32",
        "36"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 35 squared?",
      "options": [
        "1215",
        "1225",
        "1235",
        "1245"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 12.5% of 80?",
      "options": [
        "8",
        "9",
        "10",
        "11"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 36 squared?",
      "options": [
        "1286",
        "1296",
        "1306",
        "1316"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the sum of interior angles of a hexagon?",
      "options": [
        "540°",
        "620°",
        "720°",
        "900°"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 37 squared?",
      "options": [
        "1359",
        "1369",
        "1379",
        "1389"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 6 cubed?",
      "options": [
        "196",
        "206",
        "216",
        "226"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 38 squared?",
      "options": [
        "1434",
        "1444",
        "1454",
        "1464"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral XCIX?",
      "options": [
        "89",
        "99",
        "109",
        "119"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 39 squared?",
      "options": [
        "1511",
        "1521",
        "1531",
        "1541"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 2/3 of 99?",
      "options": [
        "63",
        "66",
        "69",
        "72"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 40 squared?",
      "options": [
        "1500",
        "1600",
        "1700",
        "1800"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 0.8 divided by 0.2?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 41 squared?",
      "options": [
        "1671",
        "1681",
        "1691",
        "1701"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 8 to the power of 2/3?",
      "options": [
        "2",
        "4",
        "8",
        "16"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 42 squared?",
      "options": [
        "1754",
        "1764",
        "1774",
        "1784"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the sum of the first 5 prime numbers?",
      "options": [
        "18",
        "26",
        "28",
        "36"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 43 squared?",
      "options": [
        "1839",
        "1849",
        "1859",
        "1869"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 125% of 200?",
      "options": [
        "225",
        "240",
        "250",
        "275"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 44 squared?",
      "options": [
        "1926",
        "1936",
        "1946",
        "1956"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 9 cubed?",
      "options": [
        "619",
        "719",
        "729",
        "819"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 45 squared?",
      "options": [
        "2015",
        "2025",
        "2035",
        "2045"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 7/9 minus 2/9?",
      "options": [
        "4/9",
        "5/9",
        "6/9",
        "1/3"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 3 to the power of 5?",
      "options": [
        "125",
        "243",
        "343",
        "625"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 46 squared?",
      "options": [
        "2106",
        "2116",
        "2126",
        "2136"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the average of 15, 20, 25, 30, 35?",
      "options": [
        "20",
        "22",
        "25",
        "27"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 47 squared?",
      "options": [
        "2199",
        "2209",
        "2219",
        "2229"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 256 divided by 16?",
      "options": [
        "14",
        "15",
        "16",
        "17"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 48 squared?",
      "options": [
        "2294",
        "2304",
        "2314",
        "2324"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 1/4 + 1/3?",
      "options": [
        "2/7",
        "5/12",
        "7/12",
        "1/2"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 49 squared?",
      "options": [
        "2391",
        "2401",
        "2411",
        "2421"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 10 cubed?",
      "options": [
        "100",
        "1000",
        "10000",
        "100000"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 50 squared?",
      "options": [
        "2400",
        "2500",
        "2600",
        "2700"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What percent is 45 of 180?",
      "options": [
        "20%",
        "22%",
        "25%",
        "30%"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 100 divided by 0.5?",
      "options": [
        "50",
        "100",
        "150",
        "200"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 11 cubed?",
      "options": [
        "1221",
        "1331",
        "1441",
        "1551"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 3/4 times 2/3?",
      "options": [
        "1/4",
        "1/2",
        "5/12",
        "6/12"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 12 cubed?",
      "options": [
        "1628",
        "1728",
        "1828",
        "1928"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the mode of 2, 3, 3, 4, 4, 4, 5?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the reciprocal of 0.25?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 999 + 999?",
      "options": [
        "1888",
        "1898",
        "1988",
        "1998"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 5/9 of 81?",
      "options": [
        "35",
        "40",
        "45",
        "50"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the Roman numeral MMXXV?",
      "options": [
        "2020",
        "2025",
        "2030",
        "2050"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many prime numbers are less than 20?",
      "options": [
        "6",
        "7",
        "8",
        "9"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 13 cubed?",
      "options": [
        "2097",
        "2197",
        "2297",
        "2397"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 0.125 as a fraction?",
      "options": [
        "1/4",
        "1/6",
        "1/8",
        "1/10"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 65% of 200?",
      "options": [
        "115",
        "125",
        "130",
        "135"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 14 cubed?",
      "options": [
        "2644",
        "2744",
        "2844",
        "2944"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 7/8 + 1/8?",
      "options": [
        "1/2",
        "3/4",
        "1",
        "8/8"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is 9 squared plus 4 squared?",
      "options": [
        "85",
        "90",
        "95",
        "97"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 0.6 times 0.6?",
      "options": [
        "0.12",
        "0.24",
        "0.36",
        "0.48"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 2.5 squared?",
      "options": [
        "5",
        "5.25",
        "6.25",
        "6.5"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 51 squared?",
      "options": [
        "2591",
        "2601",
        "2611",
        "2621"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 4/5 as a decimal?",
      "options": [
        "0.75",
        "0.8",
        "0.85",
        "0.9"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the cube root of 125?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is 1/6 as a percentage?",
      "options": [
        "14.67%",
        "15.67%",
        "16.67%",
        "17.67%"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 52 squared?",
      "options": [
        "2694",
        "2704",
        "2714",
        "2724"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the sum of angles in an octagon?",
      "options": [
        "720°",
        "900°",
        "1080°",
        "1260°"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 16 cubed?",
      "options": [
        "4086",
        "4096",
        "4106",
        "4116"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is 0.375 as a fraction?",
      "options": [
        "1/4",
        "3/8",
        "2/5",
        "3/10"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the product of the first 4 prime numbers?",
      "options": [
        "30",
        "105",
        "210",
        "330"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the value of Pi to two decimal places?",
      "options": [
        "3.12",
        "3.14",
        "3.16",
        "3.18"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is 15% of 200?",
      "options": [
        "25",
        "30",
        "35",
        "40"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "How many sides does a hexagon have?",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the square root of 144?",
      "options": [
        "10",
        "11",
        "12",
        "14"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "If a triangle has angles of 60°, 60°, and 60°, what type is it?",
      "options": [
        "Isoceles",
        "Scalene",
        "Right",
        "Equilateral"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    { "q": "What is 25% of 80?", "options": ["10", "20", "25", "40"], "correct": 1, "fact": "25% is one-quarter. One-quarter of 80 is 20.", "pool": "multiplayer" },
    { "q": "What is 9 × 7?", "options": ["56", "63", "72", "49"], "correct": 1, "fact": "9 multiplied by 7 equals 63.", "pool": "multiplayer" },
    { "q": "What is the value of 5²?", "options": ["10", "15", "25", "30"], "correct": 2, "fact": "5 squared means 5 × 5, which equals 25.", "pool": "multiplayer" },
    { "q": "Which number is even?", "options": ["13", "17", "22", "29"], "correct": 2, "fact": "Even numbers are divisible by 2 with no remainder.", "pool": "multiplayer" },
    { "q": "What is 3/4 as a decimal?", "options": ["0.25", "0.5", "0.75", "1.25"], "correct": 2, "fact": "3 divided by 4 equals 0.75.", "pool": "multiplayer" },
    { "q": "What is the perimeter of a square with sides of 5 units?", "options": ["10", "15", "20", "25"], "correct": 2, "fact": "A square has four equal sides. 4 × 5 = 20.", "pool": "multiplayer" },
    { "q": "Which fraction is the largest?", "options": ["1/4", "2/3", "3/5", "1/2"], "correct": 1, "fact": "2/3 is greater than 1/2, 3/5, and 1/4.", "pool": "multiplayer" },
    { "q": "What is 120 ÷ 10?", "options": ["10", "12", "15", "20"], "correct": 1, "fact": "Dividing by 10 moves the decimal one place left.", "pool": "multiplayer" },
    { "q": "Which number is a prime number?", "options": ["9", "15", "17", "21"], "correct": 2, "fact": "17 has exactly two factors: 1 and itself.", "pool": "multiplayer" },
    { "q": "What is the sum of the angles in a triangle?", "options": ["90°", "180°", "270°", "360°"], "correct": 1, "fact": "All triangles have interior angles that add up to 180°.", "pool": "multiplayer" },
    { "q": "What is 15% of 200?", "options": ["15", "20", "30", "40"], "correct": 2, "fact": "10% of 200 is 20, plus 5% is 10, total 30.", "pool": "multiplayer" },
    { "q": "What is the next number: 2, 4, 8, 16, ?", "options": ["18", "24", "32", "64"], "correct": 2, "fact": "Each number doubles from the previous one.", "pool": "multiplayer" },
    { "q": "Which unit is used to measure weight?", "options": ["Meter", "Liter", "Gram", "Second"], "correct": 2, "fact": "Grams measure mass or weight.", "pool": "multiplayer" },
    { "q": "What is the area of a rectangle with length 6 and width 4?", "options": ["10", "20", "24", "30"], "correct": 2, "fact": "Area = length × width → 6 × 4 = 24.", "pool": "multiplayer" },
    { "q": "Which number is closest to 100?", "options": ["89", "95", "102", "110"], "correct": 2, "fact": "102 is only 2 away from 100.", "pool": "multiplayer" },
    { "q": "What is the average of 4, 6, and 8?", "options": ["5", "6", "7", "8"], "correct": 1, "fact": "Add them (18) and divide by 3 → 6.", "pool": "multiplayer" },
    { "q": "Which shape has exactly three sides?", "options": ["Square", "Triangle", "Pentagon", "Circle"], "correct": 1, "fact": "A triangle always has three sides.", "pool": "multiplayer" },
    { "q": "What is 7 × 8?", "options": ["48", "54", "56", "64"], "correct": 2, "fact": "7 multiplied by 8 equals 56.", "pool": "multiplayer" },
    { "q": "Which number is divisible by 3?", "options": ["14", "22", "27", "40"], "correct": 2, "fact": "27 ÷ 3 = 9 with no remainder.", "pool": "multiplayer" },
    { "q": "What is 1/2 of 90?", "options": ["40", "45", "50", "55"], "correct": 1, "fact": "Half of 90 is 45.", "pool": "multiplayer" },
    { "q": "What is 60 ÷ 5?", "options": ["10", "12", "15", "20"], "correct": 1, "fact": "60 divided by 5 equals 12.", "pool": "multiplayer" },
    { "q": "What is the value of π (pi) rounded to two decimals?", "options": ["3.12", "3.14", "3.16", "3.18"], "correct": 1, "fact": "Pi is commonly rounded to 3.14.", "pool": "multiplayer" },
    { "q": "Which number is a multiple of 5?", "options": ["18", "21", "25", "32"], "correct": 2, "fact": "Multiples of 5 end in 0 or 5.", "pool": "multiplayer" },
    { "q": "How many sides does a hexagon have?", "options": ["5", "6", "7", "8"], "correct": 1, "fact": "A hexagon has six sides.", "pool": "multiplayer" },
    { "q": "What is 10²?", "options": ["20", "50", "100", "200"], "correct": 2, "fact": "10 squared means 10 × 10 = 100.", "pool": "multiplayer" }
  ],
  "Animals": [
    {
      "q": "The now extinct species \"Thylacine\" was native to where?",
      "options": [
        "Baluchistan, Pakistan",
        "Wallachia, Romania",
        "Oregon, United States",
        "Tasmania, Australia"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Snakes and lizards are known to flick their tongue, this behavior is to?",
      "options": [
        "Taste the sweet air",
        "Threaten other species",
        "Attract female mates",
        "Capture scent particles"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What are the scales on all snakes and most lizards are made of?",
      "options": [
        "Ankyloglossia",
        "Epidermis",
        "Ecdysis",
        "Keratin"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of the following is NOT a venomous snake?",
      "options": [
        "Malayan Krait",
        "Reticulated python",
        "Yellow bellied sea snake",
        "Black mamba"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal was part of an Russian domestication experiment in 1959?",
      "options": [
        "Pigeons",
        "Bears",
        "Foxes",
        "Alligators"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many legs do butterflies have?",
      "options": [
        "4",
        "6",
        "2",
        "0"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which of the following is true when alligators are behaving territorially?",
      "options": [
        "Slap their tails on the ground",
        "They bellow while showing their tail and neck",
        "Open their jaws while making a clicking noise",
        "They run full force at the threat"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which of these is a colony of polyps and not a jellyfish?",
      "options": [
        "Sea Nettle",
        "Irukandji",
        "Portuguese Man-of-War",
        "Sea Wasp"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "The dish Fugu, is made from what family of fish?",
      "options": [
        "Salmon",
        "Bass",
        "Mackerel",
        "Pufferfish"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many known living species of hyenas are there?",
      "options": [
        "4",
        "2",
        "8",
        "6"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which class of animals are newts members of?",
      "options": [
        "Amphibian",
        "Mammals",
        "Reptiles",
        "Fish"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the collective noun for rats?",
      "options": [
        "Pack",
        "Race",
        "Drift",
        "Mischief"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What are rhino's horn made of?",
      "options": [
        "Skin",
        "Ivory",
        "Keratin",
        "Bone"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the collective noun for vultures?",
      "options": [
        "Ambush",
        "Building",
        "Gaze",
        "Wake"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "To which biological phylum do all mammals, birds and reptiles belong?",
      "options": [
        "Chordata",
        "Echinodermata",
        "Annelida",
        "Placazoa"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the fastest animal?",
      "options": [
        "Peregrine Falcon",
        "Horsefly",
        "Cheetah",
        "Golden Eagle"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the fastest  land animal?",
      "options": [
        "Cheetah",
        "Thomson's Gazelle",
        "Lion",
        "Pronghorn Antelope"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What type of creature is a Bonobo?",
      "options": [
        "Parrot",
        "Lion",
        "Ape",
        "Wildcat"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What colour is the female blackbird?",
      "options": [
        "Brown",
        "Black",
        "White",
        "Yellow"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the common term for bovine spongiform encephalopathy (BSE)?",
      "options": [
        "Weil's disease",
        "Milk fever",
        "Foot-and-mouth disease",
        "Mad Cow disease"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the name of the family that the domestic cat is a member of?",
      "options": [
        "Cat",
        "Felidae",
        "Felis",
        "Felinae"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "A carnivorous animal eats flesh, what does a nucivorous animal eat?",
      "options": [
        "Nuts",
        "Seaweed",
        "Nothing",
        "Fruit"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "\"Decapods\" are an order of ten-footed crustaceans.  Which of these are NOT decapods?",
      "options": [
        "Shrimp",
        "Krill",
        "Lobsters",
        "Crabs"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Unlike on most salamanders, this part of a newt is flat?",
      "options": [
        "Teeth",
        "Tail",
        "Feet",
        "Head"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "By definition, where does an abyssopelagic animal live?",
      "options": [
        "At the bottom of the ocean",
        "Inside a tree",
        "On top of a mountain",
        "In the desert"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the world's longest venomous snake?",
      "options": [
        "Green Anaconda",
        "Inland Taipan",
        "Yellow Bellied Sea Snake",
        "King Cobra"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which species of Brown Bear is not extinct?",
      "options": [
        "Mexican Grizzly Bear",
        "Atlas Bear",
        "California Grizzly Bear",
        "Syrian Brown Bear"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "For what reason would a spotted hyena \"laugh\"?",
      "options": [
        "Nervousness",
        "Exhaustion",
        "Aggression",
        "Excitement"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What was the name of the Ethiopian Wolf before they knew it was related to wolves?",
      "options": [
        "Simien Jackel",
        "Canis Simiensis",
        "Amharic Fox",
        "Ethiopian Coyote"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the scientific name of the cheetah?",
      "options": [
        "Acinonyx jubatus",
        "Felis catus",
        "Lynx rufus",
        "Panthera onca"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the name for a male bee that comes from an unfertilized egg?",
      "options": [
        "Worker",
        "Soldier",
        "Male",
        "Drone"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What dog breed is one of the oldest breeds of dog and has flourished since before 400 BCE.",
      "options": [
        "Boxers",
        "Bulldogs",
        "Chihuahua",
        "Pugs"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the collective noun for a group of crows?",
      "options": [
        "Murder",
        "Herd",
        "Gaggle",
        "Pack"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the scientific name for the \"Polar Bear\"?",
      "options": [
        "Ursus Arctos",
        "Ursus Spelaeus",
        "Ursus Maritimus",
        "Polar Bear"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What color/colour is a polar bear's skin?",
      "options": [
        "Black",
        "Green",
        "Pink",
        "White"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What scientific suborder does the family Hyaenidae belong to?",
      "options": [
        "Ciconiiformes",
        "Feliformia",
        "Caniformia",
        "Haplorhini"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Cashmere is the wool from which kind of animal?",
      "options": [
        "Goat",
        "Sheep",
        "Camel",
        "Llama"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many teeth does an adult rabbit have?",
      "options": [
        "30",
        "26",
        "28",
        "24"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the name of a rabbit's abode?",
      "options": [
        "Burrow",
        "Dray",
        "Den",
        "Nest"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the scientific name of the Budgerigar?",
      "options": [
        "Pyrrhura molinae",
        "Melopsittacus undulatus",
        "Ara macao",
        "Nymphicus hollandicus"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of the following is another name for the \"Poecilotheria Metallica Tarantula\"?",
      "options": [
        "Gooty",
        "Woebegone",
        "Silver Stripe",
        "Hopper"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these animals is NOT a lizard?",
      "options": [
        "Green Iguana",
        "Gila Monster",
        "Komodo Dragon",
        "Tuatara"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What scientific family does the Aardwolf belong to?",
      "options": [
        "Canidae",
        "Felidae",
        "Eupleridae",
        "Hyaenidae"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which species is a \"mountain chicken\"?",
      "options": [
        "Frog",
        "Chicken",
        "Horse",
        "Fly"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which of these species is not extinct?",
      "options": [
        "Komodo dragon",
        "Saudi gazelle",
        "Tasmanian tiger",
        "Japanese sea lion"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What bird is born with claws on its wing digits?",
      "options": [
        "Hoatzin",
        "Cassowary",
        "Secretary bird",
        "Cormorant"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the collective noun for bears?",
      "options": [
        "Drove",
        "Tribe",
        "Husk",
        "Sloth"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "The Kākāpō is a large, flightless, nocturnal parrot native to which country?",
      "options": [
        "New Zealand",
        "Madagascar",
        "Australia",
        "South Africa"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What type of animal is a natterjack?",
      "options": [
        "Toad",
        "Bird",
        "Fish",
        "Insect"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the name of the copper-rich protein that creates the blue blood in the Antarctic octopus?",
      "options": [
        "Iron",
        "Cytochrome",
        "Hemocyanin",
        "Methionine"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the largest land animal?",
      "options": [
        "Elephant",
        "Rhino",
        "Hippo",
        "Giraffe"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal is known as the King of the Jungle?",
      "options": [
        "Tiger",
        "Lion",
        "Leopard",
        "Cheetah"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many legs does a spider have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a baby kangaroo called?",
      "options": [
        "Cub",
        "Joey",
        "Pup",
        "Kit"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which bird cannot fly?",
      "options": [
        "Eagle",
        "Penguin",
        "Hawk",
        "Owl"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the fastest bird in the world?",
      "options": [
        "Eagle",
        "Hawk",
        "Peregrine Falcon",
        "Ostrich"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many hearts does an octopus have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only mammal that can truly fly?",
      "options": [
        "Flying squirrel",
        "Bat",
        "Sugar glider",
        "Lemur"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What animal has the longest lifespan?",
      "options": [
        "Elephant",
        "Whale",
        "Giant tortoise",
        "Parrot"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has fingerprints almost identical to humans?",
      "options": [
        "Chimpanzee",
        "Gorilla",
        "Koala",
        "Orangutan"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of fish called?",
      "options": [
        "Herd",
        "School",
        "Pack",
        "Flock"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can sleep for up to 3 years?",
      "options": [
        "Bear",
        "Snail",
        "Sloth",
        "Koala"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the smallest bird in the world?",
      "options": [
        "Finch",
        "Sparrow",
        "Hummingbird",
        "Wren"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many stomachs does a cow have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the best memory?",
      "options": [
        "Elephant",
        "Dolphin",
        "Chimpanzee",
        "Crow"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a group of wolves called?",
      "options": [
        "Herd",
        "Flock",
        "Pack",
        "School"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can change its color?",
      "options": [
        "Gecko",
        "Chameleon",
        "Iguana",
        "Komodo dragon"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest species of shark?",
      "options": [
        "Great White",
        "Hammerhead",
        "Tiger Shark",
        "Whale Shark"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal produces honey?",
      "options": [
        "Wasp",
        "Bee",
        "Ant",
        "Butterfly"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a baby goat called?",
      "options": [
        "Lamb",
        "Kid",
        "Calf",
        "Foal"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal is the tallest?",
      "options": [
        "Elephant",
        "Giraffe",
        "Camel",
        "Moose"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many bones does a shark have?",
      "options": [
        "0",
        "50",
        "100",
        "200"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What animal has the longest tongue relative to body size?",
      "options": [
        "Giraffe",
        "Anteater",
        "Chameleon",
        "Frog"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which mammal lays eggs?",
      "options": [
        "Armadillo",
        "Platypus",
        "Pangolin",
        "Sloth"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a group of crows called?",
      "options": [
        "Flock",
        "Murder",
        "Herd",
        "Pack"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal can live the longest without water?",
      "options": [
        "Camel",
        "Kangaroo rat",
        "Elephant",
        "Giraffe"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the largest insect?",
      "options": [
        "Goliath beetle",
        "Giant weta",
        "Atlas moth",
        "Hercules beetle"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many legs does a lobster have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has blue blood?",
      "options": [
        "Octopus",
        "Starfish",
        "Sea urchin",
        "Jellyfish"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby swan called?",
      "options": [
        "Duckling",
        "Cygnet",
        "Gosling",
        "Chick"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal never sleeps?",
      "options": [
        "Shark",
        "Dolphin",
        "Bullfrog",
        "Ant"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the national bird of the USA?",
      "options": [
        "Eagle",
        "Hawk",
        "Bald Eagle",
        "Falcon"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many wings does a bee have?",
      "options": [
        "2",
        "4",
        "6",
        "8"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal is known for building dams?",
      "options": [
        "Otter",
        "Beaver",
        "Muskrat",
        "Capybara"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a group of geese called?",
      "options": [
        "Flock",
        "Gaggle",
        "Herd",
        "Pack"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the most powerful bite?",
      "options": [
        "Lion",
        "Tiger",
        "Crocodile",
        "Shark"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only snake that builds a nest?",
      "options": [
        "Python",
        "Cobra",
        "King Cobra",
        "Anaconda"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many toes does a cat have in total?",
      "options": [
        "16",
        "18",
        "20",
        "22"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the largest eyes?",
      "options": [
        "Blue whale",
        "Giant squid",
        "Elephant",
        "Ostrich"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby hare called?",
      "options": [
        "Bunny",
        "Kit",
        "Leveret",
        "Pup"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which bird can fly backwards?",
      "options": [
        "Swift",
        "Hummingbird",
        "Swallow",
        "Kingfisher"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest reptile?",
      "options": [
        "Komodo dragon",
        "Saltwater crocodile",
        "Anaconda",
        "Leatherback turtle"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How long is an elephant pregnant?",
      "options": [
        "12 months",
        "18 months",
        "22 months",
        "24 months"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal can regenerate its limbs?",
      "options": [
        "Lizard",
        "Starfish",
        "Crab",
        "Octopus"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a group of owls called?",
      "options": [
        "Flock",
        "Parliament",
        "Murder",
        "Herd"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which mammal has the densest fur?",
      "options": [
        "Polar bear",
        "Sea otter",
        "Chinchilla",
        "Beaver"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the only continent without native snakes?",
      "options": [
        "Australia",
        "Antarctica",
        "Europe",
        "Africa"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many species of penguins exist?",
      "options": [
        "8",
        "12",
        "17",
        "25"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the highest blood pressure?",
      "options": [
        "Elephant",
        "Giraffe",
        "Blue whale",
        "Horse"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby deer called?",
      "options": [
        "Calf",
        "Fawn",
        "Kid",
        "Pup"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can rotate its head 270 degrees?",
      "options": [
        "Eagle",
        "Owl",
        "Hawk",
        "Vulture"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest species of penguin?",
      "options": [
        "King penguin",
        "Emperor penguin",
        "Gentoo penguin",
        "Chinstrap penguin"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many teeth does a mosquito have?",
      "options": [
        "0",
        "22",
        "47",
        "100"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the smelliest defense mechanism?",
      "options": [
        "Porcupine",
        "Skunk",
        "Armadillo",
        "Opossum"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a group of dolphins called?",
      "options": [
        "School",
        "Pod",
        "Pack",
        "Herd"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which bird has the longest wingspan?",
      "options": [
        "Condor",
        "Albatross",
        "Pelican",
        "Eagle"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many noses does a slug have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the only bird with nostrils at the end of its beak?",
      "options": [
        "Pelican",
        "Kiwi",
        "Toucan",
        "Flamingo"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal never stops growing?",
      "options": [
        "Shark",
        "Lobster",
        "Crocodile",
        "Turtle"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby rabbit called?",
      "options": [
        "Bunny",
        "Kit",
        "Leveret",
        "Pup"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can survive being frozen?",
      "options": [
        "Arctic fox",
        "Wood frog",
        "Polar bear",
        "Penguin"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many brains does a leech have?",
      "options": [
        "1",
        "12",
        "32",
        "100"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of flamingos called?",
      "options": [
        "Flock",
        "Stand",
        "Colony",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the thickest skin?",
      "options": [
        "Elephant",
        "Rhino",
        "Hippo",
        "Whale shark"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the fastest swimming fish?",
      "options": [
        "Tuna",
        "Swordfish",
        "Sailfish",
        "Marlin"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many chambers does a fish heart have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal produces the loudest sound?",
      "options": [
        "Elephant",
        "Blue whale",
        "Howler monkey",
        "Lion"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby fox called?",
      "options": [
        "Cub",
        "Kit",
        "Pup",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal sleeps the most?",
      "options": [
        "Sloth",
        "Koala",
        "Cat",
        "Bat"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many legs does a centipede actually have?",
      "options": [
        "Exactly 100",
        "30-354",
        "1000",
        "Always even"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the most venomous snake?",
      "options": [
        "King Cobra",
        "Black Mamba",
        "Inland Taipan",
        "Rattlesnake"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has rectangular pupils?",
      "options": [
        "Cat",
        "Goat",
        "Horse",
        "Deer"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a group of rhinos called?",
      "options": [
        "Herd",
        "Crash",
        "Pack",
        "Flock"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many eyes does a bee have?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal cannot jump?",
      "options": [
        "Hippo",
        "Rhino",
        "Elephant",
        "Buffalo"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby eel called?",
      "options": [
        "Fry",
        "Elver",
        "Pup",
        "Larvae"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the longest migration?",
      "options": [
        "Monarch butterfly",
        "Arctic tern",
        "Gray whale",
        "Wildebeest"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many species of tigers exist today?",
      "options": [
        "3",
        "6",
        "9",
        "12"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a group of hippos called?",
      "options": [
        "Pod",
        "Bloat",
        "Herd",
        "Crash"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal can see ultraviolet light?",
      "options": [
        "Dog",
        "Cat",
        "Bee",
        "Owl"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only venomous primate?",
      "options": [
        "Chimpanzee",
        "Slow loris",
        "Tarsier",
        "Lemur"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many teeth can a shark grow in its lifetime?",
      "options": [
        "100",
        "1,000",
        "20,000",
        "50,000"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which bird lays the largest eggs?",
      "options": [
        "Eagle",
        "Ostrich",
        "Emu",
        "Swan"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a baby whale called?",
      "options": [
        "Pup",
        "Calf",
        "Cub",
        "Joey"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can hold its breath the longest?",
      "options": [
        "Dolphin",
        "Sperm whale",
        "Sea turtle",
        "Cuvier beaked whale"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of jellyfish called?",
      "options": [
        "School",
        "Swarm",
        "Smack",
        "Blob"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many species of bear exist?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the best sense of smell?",
      "options": [
        "Dog",
        "Bear",
        "Elephant",
        "Shark"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby alligator called?",
      "options": [
        "Pup",
        "Hatchling",
        "Cub",
        "Kit"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal produces pearls?",
      "options": [
        "Clam",
        "Oyster",
        "Mussel",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How fast can a cheetah run?",
      "options": [
        "50 mph",
        "60 mph",
        "70 mph",
        "80 mph"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest cat species?",
      "options": [
        "Lion",
        "Tiger",
        "Jaguar",
        "Leopard"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal sleeps standing up?",
      "options": [
        "Cow",
        "Horse",
        "Elephant",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a female sheep called?",
      "options": [
        "Doe",
        "Ewe",
        "Hen",
        "Mare"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many humps does a Bactrian camel have?",
      "options": [
        "1",
        "2",
        "3",
        "0"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal is immune to all known diseases?",
      "options": [
        "Shark",
        "Crocodile",
        "Opossum",
        "Cockroach"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of gorillas called?",
      "options": [
        "Tribe",
        "Band",
        "Troop",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the most legs?",
      "options": [
        "Centipede",
        "Millipede",
        "Caterpillar",
        "Crab"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a baby pigeon called?",
      "options": [
        "Chick",
        "Squab",
        "Hatchling",
        "Nestling"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How long can a crocodile hold its breath?",
      "options": [
        "15 minutes",
        "1 hour",
        "2 hours",
        "6 hours"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the shortest lifespan?",
      "options": [
        "Mayfly",
        "Housefly",
        "Mosquito",
        "Fruit fly"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a male duck called?",
      "options": [
        "Rooster",
        "Drake",
        "Gander",
        "Buck"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which bird is a symbol of peace?",
      "options": [
        "Eagle",
        "Dove",
        "Swan",
        "Owl"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many legs does a butterfly have?",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a baby horse called?",
      "options": [
        "Calf",
        "Fawn",
        "Foal",
        "Kid"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can live without its head for weeks?",
      "options": [
        "Snake",
        "Cockroach",
        "Lizard",
        "Spider"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the smallest mammal?",
      "options": [
        "Pygmy mouse",
        "Bumblebee bat",
        "Etruscan shrew",
        "Both B and C"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many species of cats are there?",
      "options": [
        "12",
        "24",
        "37",
        "50"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the longest tail?",
      "options": [
        "Elephant",
        "Giraffe",
        "Peacock",
        "Ring-tailed lemur"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby owl called?",
      "options": [
        "Chick",
        "Owlet",
        "Fledgling",
        "Hatchling"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can see behind itself without turning its head?",
      "options": [
        "Chameleon",
        "Owl",
        "Rabbit",
        "Horse"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many tentacles does a squid have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a female deer called?",
      "options": [
        "Doe",
        "Fawn",
        "Hind",
        "Both A and C"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the longest tongue?",
      "options": [
        "Giraffe",
        "Anteater",
        "Blue whale",
        "Chameleon"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby sheep called?",
      "options": [
        "Kid",
        "Calf",
        "Lamb",
        "Foal"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many claws does a cat have?",
      "options": [
        "16",
        "18",
        "20",
        "22"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal is born with teeth?",
      "options": [
        "Hamster",
        "Rabbit",
        "Mouse",
        "Guinea pig"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of ants called?",
      "options": [
        "Swarm",
        "Colony",
        "Army",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which bird can swim but cannot fly?",
      "options": [
        "Pelican",
        "Penguin",
        "Puffin",
        "Cormorant"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many legs does a crab have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby duck called?",
      "options": [
        "Chick",
        "Duckling",
        "Gosling",
        "Cygnet"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal has the sharpest hearing?",
      "options": [
        "Dog",
        "Bat",
        "Moth",
        "Owl"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a male horse called?",
      "options": [
        "Stallion",
        "Mare",
        "Gelding",
        "Both A and C"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many species of dolphins exist?",
      "options": [
        "12",
        "25",
        "40",
        "60"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has blue skin?",
      "options": [
        "Hippo",
        "Whale",
        "Manatee",
        "Dolphin"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby cat called?",
      "options": [
        "Pup",
        "Kit",
        "Kitten",
        "Cub"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal uses echolocation?",
      "options": [
        "Dolphin",
        "Bat",
        "Whale",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many chambers does a human heart have?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a group of kangaroos called?",
      "options": [
        "Herd",
        "Mob",
        "Pack",
        "Troop"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the longest pregnancy?",
      "options": [
        "Blue whale",
        "Elephant",
        "Giraffe",
        "Rhino"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby cow called?",
      "options": [
        "Foal",
        "Calf",
        "Kid",
        "Lamb"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many teeth does an adult dog have?",
      "options": [
        "28",
        "32",
        "42",
        "48"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal can change its gender?",
      "options": [
        "Frog",
        "Clownfish",
        "Seahorse",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a female donkey called?",
      "options": [
        "Mare",
        "Jenny",
        "Doe",
        "Ewe"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many arms does a starfish typically have?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal has the most teeth?",
      "options": [
        "Shark",
        "Snail",
        "Dolphin",
        "Crocodile"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a male goat called?",
      "options": [
        "Ram",
        "Buck",
        "Billy",
        "Both B and C"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal can survive in space?",
      "options": [
        "Cockroach",
        "Tardigrade",
        "Nematode",
        "Ant"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many species of birds exist?",
      "options": [
        "5,000",
        "10,000",
        "15,000",
        "20,000"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a baby bear called?",
      "options": [
        "Pup",
        "Kit",
        "Cub",
        "Joey"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal is the heaviest flying bird?",
      "options": [
        "Albatross",
        "Great bustard",
        "Swan",
        "Pelican"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of monkeys called?",
      "options": [
        "Herd",
        "Pack",
        "Troop",
        "Band"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many eyes does a honeybee have?",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal communicates through dance?",
      "options": [
        "Ant",
        "Bee",
        "Butterfly",
        "Moth"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a baby goose called?",
      "options": [
        "Chick",
        "Gosling",
        "Duckling",
        "Cygnet"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which reptile can detach its tail?",
      "options": [
        "Snake",
        "Turtle",
        "Lizard",
        "Crocodile"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many subspecies of gorilla are there?",
      "options": [
        "2",
        "4",
        "6",
        "8"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a female elephant called?",
      "options": [
        "Doe",
        "Cow",
        "Mare",
        "Sow"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal makes the largest nest?",
      "options": [
        "Eagle",
        "Stork",
        "Sociable weaver",
        "Ostrich"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the fastest marine animal?",
      "options": [
        "Dolphin",
        "Tuna",
        "Sailfish",
        "Marlin"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many toes does a horse have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the most powerful kick?",
      "options": [
        "Horse",
        "Kangaroo",
        "Zebra",
        "Ostrich"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby frog called?",
      "options": [
        "Tadpole",
        "Froglet",
        "Pollywog",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which bird has the best eyesight?",
      "options": [
        "Owl",
        "Eagle",
        "Hawk",
        "Falcon"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many species of whales exist?",
      "options": [
        "40",
        "60",
        "80",
        "100"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of zebras called?",
      "options": [
        "Herd",
        "Dazzle",
        "Stripe",
        "Zeal"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal produces wool?",
      "options": [
        "Goat",
        "Sheep",
        "Alpaca",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is a male swan called?",
      "options": [
        "Drake",
        "Gander",
        "Cob",
        "Pen"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many humps does a dromedary camel have?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the fastest marine mammal?",
      "options": [
        "Seal",
        "Dolphin",
        "Orca",
        "Sea lion"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal has the best camouflage?",
      "options": [
        "Tiger",
        "Octopus",
        "Zebra",
        "Polar bear"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many bones does a giraffe have in its neck?",
      "options": [
        "5",
        "7",
        "9",
        "11"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the strongest bite force?",
      "options": [
        "Hippo",
        "Crocodile",
        "Great white shark",
        "Hyena"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only bird that can fly backwards continuously?",
      "options": [
        "Kingfisher",
        "Hummingbird",
        "Swallow",
        "Sparrow"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which mammal has the most teeth?",
      "options": [
        "Dolphin",
        "Opossum",
        "Giant armadillo",
        "Spinner dolphin"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby panda called?",
      "options": [
        "Cub",
        "Kit",
        "Pup",
        "Calf"
      ],
      "correct": 0,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal can go the longest without drinking water?",
      "options": [
        "Camel",
        "Kangaroo rat",
        "Tortoise",
        "Elephant"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many species of sea turtle exist?",
      "options": [
        "3",
        "5",
        "7",
        "9"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the wingspan of the largest bird?",
      "options": [
        "8 feet",
        "10 feet",
        "12 feet",
        "14 feet"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal produces the most offspring at once?",
      "options": [
        "Rabbit",
        "Pig",
        "Mouse",
        "Ocean sunfish"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What percentage of a jellyfish is water?",
      "options": [
        "75%",
        "85%",
        "95%",
        "99%"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which fish can climb trees?",
      "options": [
        "Catfish",
        "Mudskipper",
        "Flying fish",
        "Lungfish"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How fast can an ostrich run?",
      "options": [
        "30 mph",
        "40 mph",
        "50 mph",
        "60 mph"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal sleeps only 2 hours a day?",
      "options": [
        "Horse",
        "Elephant",
        "Giraffe",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What animal has the highest blood pressure?",
      "options": [
        "Elephant",
        "Giraffe",
        "Whale",
        "Horse"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which insect has the longest migration?",
      "options": [
        "Locust",
        "Monarch butterfly",
        "Dragonfly",
        "Painted lady"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many teeth does a crocodile have?",
      "options": [
        "40-50",
        "60-70",
        "80-100",
        "100+"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the best night vision?",
      "options": [
        "Owl",
        "Cat",
        "Tarsier",
        "Bat"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the only mammal born with horns?",
      "options": [
        "Rhino",
        "Giraffe",
        "Antelope",
        "Buffalo"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many chambers does a fish heart have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which bird has the most feathers?",
      "options": [
        "Ostrich",
        "Swan",
        "Penguin",
        "Peacock"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What animal produces cashmere wool?",
      "options": [
        "Sheep",
        "Goat",
        "Rabbit",
        "Alpaca"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal can survive being cut in half?",
      "options": [
        "Starfish",
        "Flatworm",
        "Earthworm",
        "All of these"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many species of monkeys are there?",
      "options": [
        "100+",
        "200+",
        "260+",
        "400+"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which mammal has the largest brain?",
      "options": [
        "Elephant",
        "Blue whale",
        "Sperm whale",
        "Human"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby platypus called?",
      "options": [
        "Pup",
        "Puggle",
        "Kit",
        "Cub"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which snake gives live birth?",
      "options": [
        "Python",
        "Cobra",
        "Boa constrictor",
        "Rattlesnake"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many muscles does a cat have in each ear?",
      "options": [
        "12",
        "22",
        "32",
        "42"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which bird has the longest beak relative to body?",
      "options": [
        "Pelican",
        "Toucan",
        "Sword-billed hummingbird",
        "Stork"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the gestation period of a hamster?",
      "options": [
        "10 days",
        "16 days",
        "21 days",
        "30 days"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal never gets sick?",
      "options": [
        "Shark",
        "Crocodile",
        "Vulture",
        "Opossum"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many taste buds does a catfish have?",
      "options": [
        "10,000",
        "50,000",
        "100,000",
        "175,000"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which mammal has the most ribs?",
      "options": [
        "Human",
        "Snake",
        "Sloth",
        "Giraffe"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What color is hippo milk?",
      "options": [
        "White",
        "Pink",
        "Yellow",
        "Blue"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the largest egg cell?",
      "options": [
        "Elephant",
        "Ostrich",
        "Blue whale",
        "Whale shark"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How long is an elephant trunk on average?",
      "options": [
        "3 feet",
        "5 feet",
        "7 feet",
        "9 feet"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal blinks most often?",
      "options": [
        "Dog",
        "Cat",
        "Human",
        "Hamster"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the only dog breed that cannot bark?",
      "options": [
        "Basenji",
        "Shiba Inu",
        "Akita",
        "Chow Chow"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many compartments does a cow stomach have?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 3,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which reptile can run on water?",
      "options": [
        "Iguana",
        "Basilisk lizard",
        "Gecko",
        "Chameleon"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is a group of parrots called?",
      "options": [
        "Flock",
        "Pandemonium",
        "Murder",
        "Parliament"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many whiskers does an average cat have?",
      "options": [
        "12",
        "16",
        "20",
        "24"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which spider builds the strongest web?",
      "options": [
        "Black widow",
        "Tarantula",
        "Darwin bark spider",
        "Orb weaver"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What percentage of all animals are insects?",
      "options": [
        "50%",
        "65%",
        "80%",
        "90%"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal sweats pink?",
      "options": [
        "Flamingo",
        "Hippo",
        "Pig",
        "Elephant"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many species of ants exist?",
      "options": [
        "1,000+",
        "5,000+",
        "12,000+",
        "22,000+"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby koala called?",
      "options": [
        "Cub",
        "Joey",
        "Pup",
        "Kit"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which bird can turn its head 270 degrees?",
      "options": [
        "Eagle",
        "Owl",
        "Hawk",
        "Vulture"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many eyes does a spider typically have?",
      "options": [
        "2",
        "4",
        "6",
        "8"
      ],
      "correct": 3,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest fish?",
      "options": [
        "Great white shark",
        "Manta ray",
        "Whale shark",
        "Oarfish"
      ],
      "correct": 2,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal has purple blood?",
      "options": [
        "Octopus",
        "Sea cucumber",
        "Peanut worm",
        "Horseshoe crab"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How long can a snail sleep?",
      "options": [
        "1 year",
        "2 years",
        "3 years",
        "5 years"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the softest fur?",
      "options": [
        "Rabbit",
        "Chinchilla",
        "Mink",
        "Persian cat"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the largest amphibian?",
      "options": [
        "Goliath frog",
        "Giant salamander",
        "Cane toad",
        "Axolotl"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many legs does a shrimp have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which animal can hold its breath longest?",
      "options": [
        "Dolphin",
        "Whale",
        "Crocodile",
        "Cuvier beaked whale"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby hedgehog called?",
      "options": [
        "Pup",
        "Hoglet",
        "Kit",
        "Cub"
      ],
      "correct": 1,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which fish is the most poisonous?",
      "options": [
        "Pufferfish",
        "Stonefish",
        "Lionfish",
        "Box jellyfish"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many toes does a rhino have on each foot?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of crows called?",
      "options": [
        "Flock",
        "Murder",
        "Herd",
        "Pack"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "Which animal cannot stick out its tongue?",
      "options": [
        "Snake",
        "Frog",
        "Crocodile",
        "Turtle"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many teeth does a rabbit have?",
      "options": [
        "18",
        "24",
        "28",
        "32"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which bird flies the highest?",
      "options": [
        "Eagle",
        "Condor",
        "Bar-headed goose",
        "Alpine chough"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What color is a polar bear skin?",
      "options": [
        "White",
        "Pink",
        "Black",
        "Gray"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many species of deer exist?",
      "options": [
        "20",
        "30",
        "40",
        "50"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the thickest fur?",
      "options": [
        "Polar bear",
        "Sea otter",
        "Chinchilla",
        "Arctic fox"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a female fox called?",
      "options": [
        "Doe",
        "Vixen",
        "Sow",
        "Mare"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many legs does a lobster have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "Which mammal has the shortest pregnancy?",
      "options": [
        "Mouse",
        "Hamster",
        "Opossum",
        "Shrew"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the average lifespan of a housefly?",
      "options": [
        "1 day",
        "7 days",
        "28 days",
        "60 days"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal can see infrared light?",
      "options": [
        "Snake",
        "Owl",
        "Cat",
        "Bat"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many muscles control a cats ear?",
      "options": [
        "12",
        "22",
        "32",
        "42"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the longest horns?",
      "options": [
        "Buffalo",
        "Longhorn",
        "Asian water buffalo",
        "Watusi cattle"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby eagle called?",
      "options": [
        "Chick",
        "Eaglet",
        "Fledgling",
        "Hatchling"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "How many species of lizards exist?",
      "options": [
        "2,000+",
        "4,000+",
        "6,000+",
        "8,000+"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the most complex eyes?",
      "options": [
        "Eagle",
        "Dragonfly",
        "Mantis shrimp",
        "Owl"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a group of ravens called?",
      "options": [
        "Flock",
        "Conspiracy",
        "Murder",
        "Unkindness"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many hearts does an earthworm have?",
      "options": [
        "0",
        "1",
        "5",
        "10"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal can jump highest relative to size?",
      "options": [
        "Flea",
        "Grasshopper",
        "Kangaroo",
        "Frog"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only marsupial found outside of Australia/Americas?",
      "options": [
        "Wombat",
        "Opossum",
        "Wallaby",
        "Sulawesi bear cuscus"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many gallons of water can an elephant drink daily?",
      "options": [
        "20",
        "30",
        "50",
        "80"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal has the longest fangs?",
      "options": [
        "King cobra",
        "Gaboon viper",
        "Black mamba",
        "Rattlesnake"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is a baby otter called?",
      "options": [
        "Pup",
        "Kit",
        "Cub",
        "Whelp"
      ],
      "correct": 0,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "How many species of bees exist?",
      "options": [
        "5,000+",
        "10,000+",
        "20,000+",
        "30,000+"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which bird has the longest feathers?",
      "options": [
        "Peacock",
        "Phoenix fowl",
        "Bird of paradise",
        "Lyrebird"
      ],
      "correct": 1,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "What is the most common blood type in cats?",
      "options": [
        "A",
        "B",
        "AB",
        "O"
      ],
      "correct": 0,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How far can a kangaroo jump?",
      "options": [
        "15 feet",
        "25 feet",
        "30 feet",
        "40 feet"
      ],
      "correct": 2,
      "difficulty": "medium",
      "pool": "daily"
    },
    {
      "q": "What is the only bird with calf muscles?",
      "options": [
        "Ostrich",
        "Emu",
        "Penguin",
        "Flamingo"
      ],
      "correct": 3,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "How many taste buds does a cow have?",
      "options": [
        "5,000",
        "15,000",
        "25,000",
        "35,000"
      ],
      "correct": 2,
      "difficulty": "hard",
      "pool": "daily"
    },
    {
      "q": "Which animal can rotate its eyes independently?",
      "options": [
        "Owl",
        "Chameleon",
        "Frog",
        "Lizard"
      ],
      "correct": 1,
      "difficulty": "easy",
      "pool": "daily"
    },
    {
      "q": "What is the largest mammal in the world?",
      "options": [
        "African Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "How many legs does a spider have?",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is a group of lions called?",
      "options": [
        "Pack",
        "Herd",
        "Pride",
        "Flock"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which bird is known for its ability to mimic human speech?",
      "options": [
        "Crow",
        "Parrot",
        "Owl",
        "Eagle"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the fastest land animal?",
      "options": [
        "Lion",
        "Cheetah",
        "Leopard",
        "Gazelle"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    { "q": "Which animal is the largest to have ever lived on Earth?", "options": ["African elephant", "Blue whale", "Tyrannosaurus rex", "Sperm whale"], "correct": 1, "fact": "The blue whale is the largest animal ever known to exist.", "pool": "multiplayer" },
    { "q": "Which ocean animal has three hearts?", "options": ["Shark", "Octopus", "Dolphin", "Sea turtle"], "correct": 1, "fact": "Octopuses have three hearts—two pump blood to the gills, one to the body.", "pool": "multiplayer" },
    { "q": "Which shark species is known for its extremely long lifespan?", "options": ["Great white shark", "Hammerhead shark", "Tiger shark", "Greenland shark"], "correct": 3, "fact": "Greenland sharks may live over 250 years.", "pool": "multiplayer" },
    { "q": "What allows many deep-sea animals to produce light?", "options": ["Reflection", "Electricity", "Bioluminescence", "Camouflage"], "correct": 2, "fact": "Bioluminescence is light produced by chemical reactions in the body.", "pool": "multiplayer" },
    { "q": "Which animal is considered the most intelligent in the ocean?", "options": ["Octopus", "Dolphin", "Orca", "Sea lion"], "correct": 1, "fact": "Dolphins are known for problem-solving, communication, and social complexity.", "pool": "multiplayer" },
    { "q": "Which ocean animal never sleeps in the same way humans do?", "options": ["Dolphin", "Seal", "Manatee", "Sea otter"], "correct": 0, "fact": "Dolphins rest one half of their brain at a time.", "pool": "multiplayer" },
    { "q": "Which animal uses echolocation to hunt?", "options": ["Shark", "Dolphin", "Octopus", "Sea turtle"], "correct": 1, "fact": "Dolphins use sound waves to locate prey and objects.", "pool": "multiplayer" },
    { "q": "Which ocean animal is known to use tools?", "options": ["Seal", "Dolphin", "Octopus", "Sea lion"], "correct": 2, "fact": "Octopuses have been observed using shells and objects as tools.", "pool": "multiplayer" },
    { "q": "Which animal has blue blood?", "options": ["Octopus", "Whale", "Sea turtle", "Stingray"], "correct": 0, "fact": "Octopus blood is blue due to copper-based hemocyanin.", "pool": "multiplayer" },
    { "q": "Which ocean animal can regenerate lost arms?", "options": ["Jellyfish", "Starfish", "Crab", "Lobster"], "correct": 1, "fact": "Starfish can regrow arms, sometimes even an entire body.", "pool": "multiplayer" },
    { "q": "Which is the fastest swimming fish?", "options": ["Marlin", "Tuna", "Sailfish", "Mackerel"], "correct": 2, "fact": "Sailfish can reach speeds of over 65 mph.", "pool": "multiplayer" },
    { "q": "Which ocean animal is actually a mammal?", "options": ["Shark", "Dolphin", "Tuna", "Sea snake"], "correct": 1, "fact": "Dolphins breathe air and nurse their young.", "pool": "multiplayer" },
    { "q": "Which creature is known as the most venomous fish?", "options": ["Pufferfish", "Lionfish", "Stonefish", "Moray eel"], "correct": 2, "fact": "Stonefish venom is extremely potent and painful.", "pool": "multiplayer" },
    { "q": "What do whales primarily use to communicate over long distances?", "options": ["Clicks", "Songs", "Color changes", "Vibrations"], "correct": 1, "fact": "Whale songs can travel hundreds of miles underwater.", "pool": "multiplayer" },
    { "q": "Which animal has the largest brain relative to body size in the ocean?", "options": ["Shark", "Dolphin", "Whale", "Octopus"], "correct": 1, "fact": "Dolphins have a very large brain compared to their body size.", "pool": "multiplayer" },
    { "q": "Which animal is known for having the strongest bite force?", "options": ["Lion", "Great white shark", "Saltwater crocodile", "Hyena"], "correct": 2, "fact": "Saltwater crocodiles have the strongest recorded bite force.", "pool": "multiplayer" },
    { "q": "Which animal never stops growing throughout its life?", "options": ["Snake", "Shark", "Turtle", "Lobster"], "correct": 3, "fact": "Lobsters continue growing as long as they survive molting.", "pool": "multiplayer" },
    { "q": "Which animal has fingerprints nearly identical to humans?", "options": ["Chimpanzee", "Koala", "Raccoon", "Gorilla"], "correct": 1, "fact": "Koala fingerprints are so similar they can confuse investigators.", "pool": "multiplayer" },
    { "q": "Which animal has the best sense of smell?", "options": ["Dog", "Bear", "Elephant", "Wolf"], "correct": 2, "fact": "Elephants have the largest number of scent receptors.", "pool": "multiplayer" },
    { "q": "Which bird cannot fly?", "options": ["Penguin", "Albatross", "Pelican", "Seagull"], "correct": 0, "fact": "Penguins are flightless but excellent swimmers.", "pool": "multiplayer" },
    { "q": "Which ocean animal is considered functionally immortal?", "options": ["Hydra", "Immortal jellyfish", "Sea sponge", "Coral"], "correct": 1, "fact": "The immortal jellyfish can revert to its juvenile form.", "pool": "multiplayer" },
    { "q": "Which animal migrates the farthest distance on Earth?", "options": ["Humpback whale", "Arctic tern", "Leatherback turtle", "Blue whale"], "correct": 1, "fact": "Arctic terns migrate from pole to pole each year.", "pool": "multiplayer" },
    { "q": "Which ocean animal can change both color and texture?", "options": ["Cuttlefish", "Octopus", "Chameleon", "Sea slug"], "correct": 1, "fact": "Octopuses can change color and skin texture instantly.", "pool": "multiplayer" },
    { "q": "Which animal is responsible for building coral reefs?", "options": ["Algae", "Coral polyps", "Sponges", "Crustaceans"], "correct": 1, "fact": "Tiny coral polyps build massive reef structures.", "pool": "multiplayer" },
    { "q": "Which animal has no brain or heart?", "options": ["Starfish", "Jellyfish", "Sea cucumber", "Sponge"], "correct": 1, "fact": "Jellyfish lack a brain and heart but still function.", "pool": "multiplayer" },
    { "q": "Which land animal sleeps the least?", "options": ["Elephant", "Horse", "Cow", "Giraffe"], "correct": 3, "fact": "Giraffes sleep only 30 minutes to 2 hours per day.", "pool": "multiplayer" },
    { "q": "Which animal has the longest lifespan?", "options": ["Tortoise", "Elephant", "Bowhead whale", "Parrot"], "correct": 2, "fact": "Bowhead whales can live over 200 years.", "pool": "multiplayer" },
    { "q": "Which animal uses mimicry to avoid predators?", "options": ["Peacock", "Stick insect", "Frog", "Ostrich"], "correct": 1, "fact": "Stick insects resemble branches to avoid detection.", "pool": "multiplayer" },
    { "q": "Which animal can survive the longest without water?", "options": ["Camel", "Kangaroo rat", "Tortoise", "Snake"], "correct": 1, "fact": "Kangaroo rats get moisture entirely from food.", "pool": "multiplayer" },
    { "q": "Which animal has the largest eyes?", "options": ["Whale", "Giant squid", "Ostrich", "Elephant"], "correct": 1, "fact": "Giant squids have the largest eyes of any animal.", "pool": "multiplayer" },
    { "q": "Which shark species is known for social schooling behavior?", "options": ["Great white", "Hammerhead", "Tiger shark", "Bull shark"], "correct": 1, "fact": "Hammerhead sharks show social schooling behavior.", "pool": "multiplayer" },
    { "q": "Which animal has the most powerful sonar?", "options": ["Dolphin", "Bat", "Sperm whale", "Orca"], "correct": 2, "fact": "Sperm whales produce the loudest biological sounds.", "pool": "multiplayer" },
    { "q": "Which ocean animal uses jet propulsion?", "options": ["Squid", "Crab", "Seal", "Ray"], "correct": 0, "fact": "Squids expel water rapidly to propel themselves.", "pool": "multiplayer" },
    { "q": "Which fish inflates its body as a defense?", "options": ["Lionfish", "Stonefish", "Pufferfish", "Sunfish"], "correct": 2, "fact": "Pufferfish inflate to deter predators.", "pool": "multiplayer" },
    { "q": "Which marine animal has the largest brain?", "options": ["Dolphin", "Blue whale", "Sperm whale", "Orca"], "correct": 2, "fact": "Sperm whales have the largest brain of any animal.", "pool": "multiplayer" },
    { "q": "Which animal can rotate its head up to 270 degrees?", "options": ["Hawk", "Owl", "Falcon", "Eagle"], "correct": 1, "fact": "Owls can rotate their heads without cutting off blood flow.", "pool": "multiplayer" },
    { "q": "Which animal uses vibrations to communicate over long distances?", "options": ["Elephant", "Wolf", "Lion", "Horse"], "correct": 0, "fact": "Elephants communicate using low-frequency vibrations.", "pool": "multiplayer" },
    { "q": "Which animal can run fastest on land?", "options": ["Lion", "Greyhound", "Horse", "Cheetah"], "correct": 3, "fact": "Cheetahs can reach speeds over 60 mph.", "pool": "multiplayer" },
    { "q": "Which animal has the thickest fur?", "options": ["Polar bear", "Sea otter", "Arctic fox", "Musk ox"], "correct": 1, "fact": "Sea otters have the densest fur of any mammal.", "pool": "multiplayer" },
    { "q": "Which animal can hold its breath the longest?", "options": ["Seal", "Elephant", "Sperm whale", "Crocodile"], "correct": 2, "fact": "Sperm whales can hold their breath for over an hour.", "pool": "multiplayer" },
    { "q": "Which animal is known for cleaning parasites off larger fish?", "options": ["Cleaner wrasse", "Clownfish", "Moray eel", "Sea bass"], "correct": 0, "fact": "Cleaner wrasse remove parasites in mutual relationships.", "pool": "multiplayer" },
    { "q": "Which marine animal forms lifelong pair bonds?", "options": ["Seahorse", "Dolphin", "Penguin", "Seal"], "correct": 0, "fact": "Many seahorses form monogamous pairs.", "pool": "multiplayer" },
    { "q": "Which animal has venom strong enough to kill humans?", "options": ["Box jellyfish", "Sea star", "Sea slug", "Sea sponge"], "correct": 0, "fact": "Box jellyfish venom can be extremely dangerous.", "pool": "multiplayer" },
    { "q": "Sharks often mistake which animal for prey, causing attacks?", "options": ["Dolphins", "Seals", "Sea lions", "Humans"], "correct": 1, "fact": "Sharks often mistake seals for prey.", "pool": "multiplayer" },
    { "q": "Which ocean animal uses bubbles to trap prey?", "options": ["Humpback whale", "Dolphin", "Orca", "Narwhal"], "correct": 0, "fact": "Humpback whales use bubble-net feeding.", "pool": "multiplayer" },
    { "q": "Which animal can survive being frozen?", "options": ["Frog", "Snake", "Lizard", "Fish"], "correct": 0, "fact": "Some frogs can survive being partially frozen.", "pool": "multiplayer" },
    { "q": "Which animal has the best night vision?", "options": ["Cat", "Owl", "Wolf", "Bat"], "correct": 1, "fact": "Owls have exceptional night vision for hunting.", "pool": "multiplayer" },
    { "q": "Which animal communicates using dance?", "options": ["Ant", "Bee", "Bird", "Dolphin"], "correct": 1, "fact": "Bees perform waggle dances to share food locations.", "pool": "multiplayer" },
    { "q": "Which animal has no natural predators as an adult?", "options": ["Elephant", "Lion", "Rhino", "Hippo"], "correct": 0, "fact": "Adult elephants have virtually no natural predators.", "pool": "multiplayer" },
    { "q": "Which animal has the most powerful kick?", "options": ["Horse", "Kangaroo", "Zebra", "Giraffe"], "correct": 3, "fact": "Giraffes deliver extremely powerful kicks for defense.", "pool": "multiplayer" }
  ],
  "Bible": [
    {
      "q": "According to Genesis 5:27, how many years did Methuselah live?",
      "options": [
        "777 years",
        "869 years",
        "969 years",
        "999 years"
      ],
      "correct": 2,
      "fact": "Genesis 5:27 - 'And all the days of Methuselah were nine hundred sixty and nine years: and he died.'",
      "pool": "daily"
    },
    {
      "q": "How many books are in the King James Bible?",
      "options": [
        "39",
        "52",
        "66",
        "73"
      ],
      "correct": 2,
      "fact": "The KJV contains 39 Old Testament books and 27 New Testament books, totaling 66.",
      "pool": "daily"
    },
    {
      "q": "According to Genesis 7:12, how many days and nights did it rain during the flood?",
      "options": [
        "7",
        "40",
        "100",
        "150"
      ],
      "correct": 1,
      "fact": "Genesis 7:12 - 'And the rain was upon the earth forty days and forty nights.'",
      "pool": "daily"
    },
    {
      "q": "In John 11:35, what is the shortest verse in the KJV Bible?",
      "options": [
        "Jesus wept.",
        "Amen.",
        "Rejoice evermore.",
        "Pray without ceasing."
      ],
      "correct": 0,
      "fact": "John 11:35 - 'Jesus wept.' contains only two words in the King James Version.",
      "pool": "daily"
    },
    {
      "q": "According to Matthew 10:2-4, how many apostles did Jesus choose?",
      "options": [
        "7",
        "10",
        "12",
        "70"
      ],
      "correct": 2,
      "fact": "Matthew 10:2 - 'Now the names of the twelve apostles are these...'",
      "pool": "daily"
    },
    {
      "q": "In Genesis 2:7, what did God form man from?",
      "options": [
        "Water",
        "Dust of the ground",
        "Clay",
        "Stone"
      ],
      "correct": 1,
      "fact": "Genesis 2:7 - 'And the LORD God formed man of the dust of the ground.'",
      "pool": "daily"
    },
    {
      "q": "According to Exodus 20, how many commandments did God give Moses?",
      "options": [
        "5",
        "7",
        "10",
        "12"
      ],
      "correct": 2,
      "fact": "The Ten Commandments are recorded in Exodus 20:1-17.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 1:27, God created man in whose image?",
      "options": [
        "Angels' image",
        "His own image",
        "Adam's image",
        "The heavens' image"
      ],
      "correct": 1,
      "fact": "Genesis 1:27 - 'So God created man in his own image.'",
      "pool": "daily"
    },
    {
      "q": "According to Matthew 1:23, what does 'Emmanuel' mean?",
      "options": [
        "Son of David",
        "King of Kings",
        "God with us",
        "The Anointed One"
      ],
      "correct": 2,
      "fact": "Matthew 1:23 - 'they shall call his name Emmanuel, which being interpreted is, God with us.'",
      "pool": "daily"
    },
    {
      "q": "In Genesis 5:5, how many years did Adam live?",
      "options": [
        "430 years",
        "777 years",
        "930 years",
        "969 years"
      ],
      "correct": 2,
      "fact": "Genesis 5:5 - 'And all the days that Adam lived were nine hundred and thirty years: and he died.'",
      "pool": "daily"
    },
    {
      "q": "According to John 2:1-11, where did Jesus perform his first miracle?",
      "options": [
        "Jerusalem",
        "Bethlehem",
        "Cana of Galilee",
        "Nazareth"
      ],
      "correct": 2,
      "fact": "John 2:1 - 'And the third day there was a marriage in Cana of Galilee.'",
      "pool": "daily"
    },
    {
      "q": "In Jonah 1:17, how many days was Jonah in the belly of the great fish?",
      "options": [
        "1 day",
        "3 days",
        "7 days",
        "40 days"
      ],
      "correct": 1,
      "fact": "Jonah 1:17 - 'And Jonah was in the belly of the fish three days and three nights.'",
      "pool": "daily"
    },
    {
      "q": "According to Genesis 7:2, how many of each clean beast did Noah take on the ark?",
      "options": [
        "2",
        "7",
        "12",
        "14"
      ],
      "correct": 1,
      "fact": "Genesis 7:2 - 'Of every clean beast thou shalt take to thee by sevens.'",
      "pool": "daily"
    },
    {
      "q": "In Matthew 4:2, how many days did Jesus fast in the wilderness?",
      "options": [
        "7 days",
        "12 days",
        "40 days",
        "70 days"
      ],
      "correct": 2,
      "fact": "Matthew 4:2 - 'And when he had fasted forty days and forty nights, he was afterward an hungred.'",
      "pool": "daily"
    },
    {
      "q": "According to Genesis 11:31, what city did Abram originally come from?",
      "options": [
        "Haran",
        "Ur of the Chaldees",
        "Canaan",
        "Egypt"
      ],
      "correct": 1,
      "fact": "Genesis 11:31 - 'they went forth...from Ur of the Chaldees.'",
      "pool": "daily"
    },
    {
      "q": "In 1 Kings 11:3, how many wives did Solomon have?",
      "options": [
        "100",
        "300",
        "500",
        "700"
      ],
      "correct": 3,
      "fact": "1 Kings 11:3 - 'And he had seven hundred wives, princesses, and three hundred concubines.'",
      "pool": "daily"
    },
    {
      "q": "According to Genesis 25:26, who was born holding Esau's heel?",
      "options": [
        "Isaac",
        "Jacob",
        "Joseph",
        "Benjamin"
      ],
      "correct": 1,
      "fact": "Genesis 25:26 - 'his hand took hold on Esau's heel; and his name was called Jacob.'",
      "pool": "daily"
    },
    {
      "q": "In Daniel 6:16, into what was Daniel cast?",
      "options": [
        "Fiery furnace",
        "Den of lions",
        "Prison",
        "The sea"
      ],
      "correct": 1,
      "fact": "Daniel 6:16 - 'and they brought Daniel, and cast him into the den of lions.'",
      "pool": "daily"
    },
    {
      "q": "According to Exodus 7:7, how old was Moses when he spoke to Pharaoh?",
      "options": [
        "40 years",
        "60 years",
        "80 years",
        "120 years"
      ],
      "correct": 2,
      "fact": "Exodus 7:7 - 'And Moses was fourscore years old...when they spake unto Pharaoh.'",
      "pool": "daily"
    },
    {
      "q": "In Genesis 37:28, for how many pieces of silver was Joseph sold?",
      "options": [
        "10",
        "20",
        "30",
        "40"
      ],
      "correct": 1,
      "fact": "Genesis 37:28 - 'sold Joseph to the Ishmeelites for twenty pieces of silver.'",
      "pool": "daily"
    },
    {
      "q": "According to Luke 2:7, where was Jesus laid after his birth?",
      "options": [
        "A bed",
        "A basket",
        "A manger",
        "The ground"
      ],
      "correct": 2,
      "fact": "Luke 2:7 - 'and laid him in a manger; because there was no room for them in the inn.'",
      "pool": "daily"
    },
    {
      "q": "In Acts 9:36, what was Tabitha also called?",
      "options": [
        "Mary",
        "Martha",
        "Dorcas",
        "Lydia"
      ],
      "correct": 2,
      "fact": "Acts 9:36 - 'a certain disciple named Tabitha, which by interpretation is called Dorcas.'",
      "pool": "daily"
    },
    {
      "q": "According to Genesis 4:1, who was the first son of Adam and Eve?",
      "options": [
        "Abel",
        "Cain",
        "Seth",
        "Enoch"
      ],
      "correct": 1,
      "fact": "Genesis 4:1 - 'And Adam knew Eve his wife; and she conceived, and bare Cain.'",
      "pool": "daily"
    },
    {
      "q": "In Revelation 21:21, what are the twelve gates of the holy city made of?",
      "options": [
        "Gold",
        "Silver",
        "Pearl",
        "Jasper"
      ],
      "correct": 2,
      "fact": "Revelation 21:21 - 'And the twelve gates were twelve pearls; every several gate was of one pearl.'",
      "pool": "daily"
    },
    {
      "q": "According to 1 Samuel 17:4, how tall was Goliath?",
      "options": [
        "Six cubits and a span",
        "Seven cubits",
        "Eight cubits",
        "Ten cubits"
      ],
      "correct": 0,
      "fact": "1 Samuel 17:4 - 'whose height was six cubits and a span' (about 9 feet 9 inches).",
      "pool": "daily"
    },
    {
      "q": "In Genesis 6:3, to how many years did God limit man's days?",
      "options": [
        "70 years",
        "100 years",
        "120 years",
        "150 years"
      ],
      "correct": 2,
      "fact": "Genesis 6:3 - 'yet his days shall be an hundred and twenty years.'",
      "pool": "daily"
    },
    {
      "q": "According to Matthew 27:5, how did Judas die?",
      "options": [
        "By the sword",
        "He hanged himself",
        "He fell from a cliff",
        "He drowned"
      ],
      "correct": 1,
      "fact": "Matthew 27:5 - 'and went and hanged himself.'",
      "pool": "daily"
    },
    {
      "q": "In 2 Kings 2:11, how did Elijah go up to heaven?",
      "options": [
        "He walked",
        "By a whirlwind",
        "Angels carried him",
        "He ascended a mountain"
      ],
      "correct": 1,
      "fact": "2 Kings 2:11 - 'Elijah went up by a whirlwind into heaven.'",
      "pool": "daily"
    },
    {
      "q": "According to Genesis 9:29, how many years did Noah live?",
      "options": [
        "777 years",
        "850 years",
        "950 years",
        "969 years"
      ],
      "correct": 2,
      "fact": "Genesis 9:29 - 'And all the days of Noah were nine hundred and fifty years.'",
      "pool": "daily"
    },
    {
      "q": "In Psalm 23:1, what follows 'The LORD is my shepherd'?",
      "options": [
        "I shall not want",
        "I shall not fear",
        "I shall not die",
        "I shall not sin"
      ],
      "correct": 0,
      "fact": "Psalm 23:1 - 'The LORD is my shepherd; I shall not want.'",
      "pool": "daily"
    },
    {
      "q": "In Genesis 12:13, who said, 'Say, I pray thee, thou art my sister'?",
      "options": [
        "Abraham",
        "Isaac",
        "Lot",
        "Pharaoh"
      ],
      "correct": 0,
      "fact": "Abraham said this to Sarah out of fear when entering Egypt.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 27:19, who said, 'I am Esau thy firstborn'?",
      "options": [
        "Esau",
        "Jacob",
        "Isaac",
        "Rebekah"
      ],
      "correct": 1,
      "fact": "Jacob lied to his father Isaac to obtain the blessing.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 39:9, who said, 'How then can I do this great wickedness, and sin against God?'",
      "options": [
        "Joseph",
        "Judah",
        "Pharaoh",
        "Potiphar"
      ],
      "correct": 0,
      "fact": "Joseph resisted temptation from Potiphar's wife.",
      "pool": "daily"
    },
    {
      "q": "In Exodus 14:11, who said, 'Because there were no graves in Egypt, hast thou taken us away to die?'",
      "options": [
        "Pharaoh",
        "The Egyptians",
        "The children of Israel",
        "Moses"
      ],
      "correct": 2,
      "fact": "The Israelites complained when trapped at the Red Sea.",
      "pool": "daily"
    },
    {
      "q": "In Exodus 32:1, who said, 'Up, make us gods, which shall go before us'?",
      "options": [
        "Aaron",
        "Moses",
        "The people",
        "Joshua"
      ],
      "correct": 2,
      "fact": "The people demanded an idol while Moses was on Sinai.",
      "pool": "daily"
    },
    {
      "q": "In Numbers 14:4, who said, 'Let us make a captain, and let us return into Egypt'?",
      "options": [
        "Joshua",
        "Caleb",
        "The congregation",
        "Aaron"
      ],
      "correct": 2,
      "fact": "Israel rebelled after hearing the spies' report.",
      "pool": "daily"
    },
    {
      "q": "In Deuteronomy 31:6, who said, 'Be strong and of a good courage'?",
      "options": [
        "Joshua",
        "Moses",
        "The LORD",
        "Caleb"
      ],
      "correct": 1,
      "fact": "Moses encouraged Israel before his death.",
      "pool": "daily"
    },
    {
      "q": "In Judges 16:17, who said, 'There hath not come a razor upon mine head'?",
      "options": [
        "Samson",
        "Samuel",
        "John the Baptist",
        "Gideon"
      ],
      "correct": 0,
      "fact": "Samson revealed his Nazirite vow to Delilah.",
      "pool": "daily"
    },
    {
      "q": "In Ruth 1:16, who said, 'Whither thou goest, I will go'?",
      "options": [
        "Naomi",
        "Ruth",
        "Orpah",
        "Boaz"
      ],
      "correct": 1,
      "fact": "Ruth pledged loyalty to Naomi and to God.",
      "pool": "daily"
    },
    {
      "q": "In 1 Samuel 3:10, who said, 'Speak; for thy servant heareth'?",
      "options": [
        "Samuel",
        "Eli",
        "David",
        "Solomon"
      ],
      "correct": 0,
      "fact": "Samuel responded to the LORD's call.",
      "pool": "daily"
    },
    {
      "q": "In 1 Kings 3:9, who said, 'Give therefore thy servant an understanding heart'?",
      "options": [
        "David",
        "Solomon",
        "Rehoboam",
        "Nathan"
      ],
      "correct": 1,
      "fact": "Solomon asked God for wisdom.",
      "pool": "daily"
    },
    {
      "q": "In 2 Chronicles 7:14, who said, 'If my people, which are called by my name'?",
      "options": [
        "Solomon",
        "The LORD",
        "A prophet",
        "David"
      ],
      "correct": 1,
      "fact": "God spoke to Solomon after the temple dedication.",
      "pool": "daily"
    },
    {
      "q": "In Nehemiah 2:4, who said, 'So I prayed to the God of heaven'?",
      "options": [
        "Ezra",
        "Nehemiah",
        "Daniel",
        "Esther"
      ],
      "correct": 1,
      "fact": "Nehemiah prayed before answering the king.",
      "pool": "daily"
    },
    {
      "q": "In Esther 4:14, who said, 'Who knoweth whether thou art come to the kingdom for such a time as this?'",
      "options": [
        "Esther",
        "Mordecai",
        "Haman",
        "The king"
      ],
      "correct": 1,
      "fact": "Mordecai encouraged Esther to act courageously.",
      "pool": "daily"
    },
    {
      "q": "In Job 13:15, who said, 'Though he slay me, yet will I trust in him'?",
      "options": [
        "Eliphaz",
        "Job",
        "Bildad",
        "Zophar"
      ],
      "correct": 1,
      "fact": "Job expressed unwavering faith amid suffering.",
      "pool": "daily"
    },
    {
      "q": "In Psalm 23:1, who wrote, 'The LORD is my shepherd; I shall not want'?",
      "options": [
        "Asaph",
        "David",
        "Solomon",
        "Moses"
      ],
      "correct": 1,
      "fact": "David declared trust in the LORD.",
      "pool": "daily"
    },
    {
      "q": "In Psalm 51:10, who said, 'Create in me a clean heart, O God'?",
      "options": [
        "Solomon",
        "David",
        "Isaiah",
        "Samuel"
      ],
      "correct": 1,
      "fact": "David prayed in repentance after his sin.",
      "pool": "daily"
    },
    {
      "q": "In Isaiah 40:31, who said, 'They that wait upon the LORD shall renew their strength'?",
      "options": [
        "Jeremiah",
        "Isaiah",
        "Ezekiel",
        "Daniel"
      ],
      "correct": 1,
      "fact": "Isaiah spoke encouragement to Israel.",
      "pool": "daily"
    },
    {
      "q": "In Jeremiah 29:11, who said, 'For I know the thoughts that I think toward you'?",
      "options": [
        "Jeremiah",
        "The LORD",
        "A prophet",
        "The people"
      ],
      "correct": 1,
      "fact": "God spoke hope to Israel in exile.",
      "pool": "daily"
    },
    {
      "q": "In Daniel 3:18, who said, 'But if not, be it known unto thee, O king'?",
      "options": [
        "Daniel",
        "Shadrach, Meshach, and Abednego",
        "Nebuchadnezzar",
        "An angel"
      ],
      "correct": 1,
      "fact": "The three Hebrews declared faith even unto death.",
      "pool": "daily"
    },
    {
      "q": "In Matthew 4:4, who said, 'Man shall not live by bread alone'?",
      "options": [
        "Moses",
        "Jesus",
        "John the Baptist",
        "The devil"
      ],
      "correct": 1,
      "fact": "Jesus answered Satan during temptation.",
      "pool": "daily"
    },
    {
      "q": "In Matthew 5:14, who said, 'Ye are the light of the world'?",
      "options": [
        "Peter",
        "Jesus",
        "Paul",
        "John"
      ],
      "correct": 1,
      "fact": "Jesus spoke during the Sermon on the Mount.",
      "pool": "daily"
    },
    {
      "q": "In Matthew 11:28, who said, 'Come unto me, all ye that labour'?",
      "options": [
        "Jesus",
        "Peter",
        "John",
        "Isaiah"
      ],
      "correct": 0,
      "fact": "Jesus invited the weary to find rest.",
      "pool": "daily"
    },
    {
      "q": "In Luke 23:34, who said, 'Father, forgive them; for they know not what they do'?",
      "options": [
        "Stephen",
        "Jesus",
        "Peter",
        "John"
      ],
      "correct": 1,
      "fact": "Jesus spoke from the cross.",
      "pool": "daily"
    },
    {
      "q": "In John 10:11, who said, 'I am the good shepherd'?",
      "options": [
        "David",
        "Jesus",
        "Peter",
        "Paul"
      ],
      "correct": 1,
      "fact": "Jesus described His role as Savior.",
      "pool": "daily"
    },
    {
      "q": "In John 14:6, who said, 'I am the way, the truth, and the life'?",
      "options": [
        "John",
        "Peter",
        "Jesus",
        "Paul"
      ],
      "correct": 2,
      "fact": "Jesus declared Himself the only way to the Father.",
      "pool": "daily"
    },
    {
      "q": "In John 20:28, who said, 'My Lord and my God'?",
      "options": [
        "Peter",
        "John",
        "Thomas",
        "Mary"
      ],
      "correct": 2,
      "fact": "Thomas confessed faith after seeing Jesus.",
      "pool": "daily"
    },
    {
      "q": "In Acts 4:12, who said, 'Neither is there salvation in any other'?",
      "options": [
        "Paul",
        "Peter",
        "Stephen",
        "John"
      ],
      "correct": 1,
      "fact": "Peter testified boldly before the council.",
      "pool": "daily"
    },
    {
      "q": "In Acts 20:35, who said, 'It is more blessed to give than to receive'?",
      "options": [
        "Jesus",
        "Paul",
        "Peter",
        "Luke"
      ],
      "correct": 0,
      "fact": "Paul quoted Jesus while addressing elders.",
      "pool": "daily"
    },
    {
      "q": "In Romans 1:16, who said, 'For I am not ashamed of the gospel of Christ'?",
      "options": [
        "Peter",
        "Paul",
        "James",
        "John"
      ],
      "correct": 1,
      "fact": "Paul proclaimed confidence in the gospel.",
      "pool": "daily"
    },
    {
      "q": "In 1 Corinthians 13:13, who said, 'Now abideth faith, hope, charity'?",
      "options": [
        "Peter",
        "Paul",
        "John",
        "James"
      ],
      "correct": 1,
      "fact": "Paul taught on love's supremacy.",
      "pool": "daily"
    },
    {
      "q": "In Galatians 2:20, who said, 'I am crucified with Christ'?",
      "options": [
        "Peter",
        "Paul",
        "James",
        "John"
      ],
      "correct": 1,
      "fact": "Paul described life through faith.",
      "pool": "daily"
    },
    {
      "q": "In Ephesians 6:12, who said, 'We wrestle not against flesh and blood'?",
      "options": [
        "Peter",
        "Paul",
        "James",
        "Jude"
      ],
      "correct": 1,
      "fact": "Paul explained spiritual warfare.",
      "pool": "daily"
    },
    {
      "q": "In Philippians 4:13, who said, 'I can do all things through Christ'?",
      "options": [
        "Timothy",
        "Paul",
        "Peter",
        "Luke"
      ],
      "correct": 1,
      "fact": "Paul expressed reliance on Christ.",
      "pool": "daily"
    },
    {
      "q": "In 2 Timothy 4:7, who said, 'I have fought a good fight'?",
      "options": [
        "Peter",
        "Paul",
        "John",
        "Stephen"
      ],
      "correct": 1,
      "fact": "Paul reflected near the end of his life.",
      "pool": "daily"
    },
    {
      "q": "In Hebrews 11:1, who wrote, 'Faith is the substance of things hoped for'?",
      "options": [
        "Paul",
        "The writer of Hebrews",
        "Peter",
        "James"
      ],
      "correct": 1,
      "fact": "The writer defined faith.",
      "pool": "daily"
    },
    {
      "q": "In James 1:5, who said, 'If any of you lack wisdom, let him ask of God'?",
      "options": [
        "Paul",
        "James",
        "Peter",
        "John"
      ],
      "correct": 1,
      "fact": "James encouraged prayer for wisdom.",
      "pool": "daily"
    },
    {
      "q": "In 1 Peter 5:7, who said, 'Casting all your care upon him'?",
      "options": [
        "Paul",
        "Peter",
        "James",
        "John"
      ],
      "correct": 1,
      "fact": "Peter encouraged trust in God.",
      "pool": "daily"
    },
    {
      "q": "In 1 John 1:7, who said, 'The blood of Jesus Christ his Son cleanseth us from all sin'?",
      "options": [
        "Peter",
        "Paul",
        "John",
        "James"
      ],
      "correct": 2,
      "fact": "John taught on forgiveness and fellowship.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 1:8, who said, 'I am Alpha and Omega'?",
      "options": [
        "Jesus",
        "An angel",
        "John",
        "The Father"
      ],
      "correct": 0,
      "fact": "Jesus declared His eternal nature.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 3:20, who said, 'Behold, I stand at the door, and knock'?",
      "options": [
        "Jesus",
        "An angel",
        "John",
        "The church"
      ],
      "correct": 0,
      "fact": "Jesus invited fellowship.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 5:12, who said, 'Worthy is the Lamb that was slain'?",
      "options": [
        "The elders",
        "The angels",
        "Every creature",
        "All of the above"
      ],
      "correct": 3,
      "fact": "All creation praised the Lamb.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 7:10, who cried, 'Salvation to our God'?",
      "options": [
        "Angels",
        "The elders",
        "A great multitude",
        "The churches"
      ],
      "correct": 2,
      "fact": "The redeemed praised God.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 19:6, who said, 'Alleluia: for the Lord God omnipotent reigneth'?",
      "options": [
        "The angels",
        "The great multitude",
        "The elders",
        "John"
      ],
      "correct": 1,
      "fact": "Heaven rejoiced at God's reign.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 21:5, who said, 'Behold, I make all things new'?",
      "options": [
        "An angel",
        "John",
        "Jesus",
        "He that sat upon the throne"
      ],
      "correct": 3,
      "fact": "God declared the renewal of all things from the throne.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 22:7, who said, 'Behold, I come quickly'?",
      "options": [
        "An angel",
        "John",
        "Jesus",
        "The churches"
      ],
      "correct": 2,
      "fact": "Jesus promised His return.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 22:12, who said, 'My reward is with me'?",
      "options": [
        "The Father",
        "An angel",
        "Jesus",
        "John"
      ],
      "correct": 2,
      "fact": "Jesus spoke of final judgment.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 22:16, who said, 'I Jesus have sent mine angel'?",
      "options": [
        "John",
        "The Father",
        "Jesus",
        "An angel"
      ],
      "correct": 2,
      "fact": "Jesus confirmed the message.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 22:17, who says, 'Come'?",
      "options": [
        "The Spirit and the bride",
        "The angels",
        "John",
        "The churches"
      ],
      "correct": 0,
      "fact": "The invitation to salvation.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 22:20, who said, 'Surely I come quickly'?",
      "options": [
        "An angel",
        "John",
        "Jesus",
        "The Father"
      ],
      "correct": 2,
      "fact": "Jesus gave the final promise of His return.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 4:9, who asked, 'Am I my brother's keeper?'",
      "options": [
        "Abel",
        "Adam",
        "Cain",
        "Seth"
      ],
      "correct": 2,
      "fact": "Cain spoke these words after God asked about Abel.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 3:11, who asked, 'Who told thee that thou wast naked?'",
      "options": [
        "Adam",
        "Eve",
        "The serpent",
        "God"
      ],
      "correct": 3,
      "fact": "God questioned Adam after the fall.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 3:13, who asked, 'What is this that thou hast done?'",
      "options": [
        "Adam",
        "God",
        "The angel of the LORD",
        "The serpent"
      ],
      "correct": 1,
      "fact": "God asked Eve this question after she sinned.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 18:14, who asked, 'Is any thing too hard for the LORD?'",
      "options": [
        "Abraham",
        "Sarah",
        "An angel",
        "The LORD"
      ],
      "correct": 3,
      "fact": "The LORD spoke this when Sarah doubted His promise.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 37:8, who said, 'Shalt thou indeed reign over us?'",
      "options": [
        "Jacob",
        "Joseph",
        "Pharaoh",
        "Joseph's brothers"
      ],
      "correct": 3,
      "fact": "Joseph's brothers responded angrily to his dream.",
      "pool": "daily"
    },
    {
      "q": "In Exodus 5:2, who asked, 'Who is the LORD, that I should obey his voice?'",
      "options": [
        "Moses",
        "Aaron",
        "Pharaoh",
        "Korah"
      ],
      "correct": 2,
      "fact": "Pharaoh rejected God's authority.",
      "pool": "daily"
    },
    {
      "q": "In Exodus 16:3, who said, 'Would to God we had died in the land of Egypt'?",
      "options": [
        "Moses",
        "Aaron",
        "The children of Israel",
        "The Egyptians"
      ],
      "correct": 2,
      "fact": "Israel complained in the wilderness.",
      "pool": "daily"
    },
    {
      "q": "In Exodus 3:11, who asked, 'Who am I, that I should go unto Pharaoh?'",
      "options": [
        "Aaron",
        "Moses",
        "Joshua",
        "Caleb"
      ],
      "correct": 1,
      "fact": "Moses doubted his calling.",
      "pool": "daily"
    },
    {
      "q": "In Numbers 22:28, who said, 'What have I done unto thee?'",
      "options": [
        "Balaam",
        "An angel",
        "Balaam's donkey",
        "The LORD"
      ],
      "correct": 2,
      "fact": "God allowed the donkey to speak.",
      "pool": "daily"
    },
    {
      "q": "In Joshua 7:7, who asked, 'Wherefore hast thou at all brought this people over Jordan?'",
      "options": [
        "Caleb",
        "Moses",
        "Joshua",
        "Eleazar"
      ],
      "correct": 2,
      "fact": "Joshua questioned God after defeat at Ai.",
      "pool": "daily"
    },
    {
      "q": "In Judges 6:13, who asked, 'If the LORD be with us, why then is all this befallen us?'",
      "options": [
        "Samson",
        "Gideon",
        "Deborah",
        "Barak"
      ],
      "correct": 1,
      "fact": "Gideon questioned God during oppression.",
      "pool": "daily"
    },
    {
      "q": "In 1 Samuel 17:29, who said, 'Is there not a cause?'",
      "options": [
        "Saul",
        "Jonathan",
        "David",
        "Samuel"
      ],
      "correct": 2,
      "fact": "David spoke before facing Goliath.",
      "pool": "daily"
    },
    {
      "q": "In 1 Samuel 26:15, who asked, 'Wherefore then hast thou not kept thy lord the king?'",
      "options": [
        "Saul",
        "Abner",
        "David",
        "Joab"
      ],
      "correct": 2,
      "fact": "David confronted Abner after sparing Saul.",
      "pool": "daily"
    },
    {
      "q": "In 2 Kings 6:33, who said, 'What should I wait for the LORD any longer?'",
      "options": [
        "Elisha",
        "The king of Israel",
        "A servant",
        "A prophet"
      ],
      "correct": 1,
      "fact": "King Jehoram spoke in despair.",
      "pool": "daily"
    },
    {
      "q": "In Job 1:9, who asked, 'Doth Job fear God for nought?'",
      "options": [
        "Job",
        "Eliphaz",
        "Satan",
        "An angel"
      ],
      "correct": 2,
      "fact": "Satan questioned Job's motives.",
      "pool": "daily"
    },
    {
      "q": "In Job 2:9, who asked, 'Dost thou still retain thine integrity?'",
      "options": [
        "Job",
        "Job's wife",
        "Bildad",
        "Zophar"
      ],
      "correct": 1,
      "fact": "Job's wife urged him to give up.",
      "pool": "daily"
    },
    {
      "q": "In Job 38:4, who asked, 'Where wast thou when I laid the foundations of the earth?'",
      "options": [
        "Job",
        "Elihu",
        "An angel",
        "God"
      ],
      "correct": 3,
      "fact": "God reminded Job of His sovereignty.",
      "pool": "daily"
    },
    {
      "q": "In Psalm 42:5, who asked, 'Why art thou cast down, O my soul?'",
      "options": [
        "Asaph",
        "Solomon",
        "David",
        "Moses"
      ],
      "correct": 2,
      "fact": "David spoke during discouragement.",
      "pool": "daily"
    },
    {
      "q": "In Psalm 8:4, who asked, 'What is man, that thou art mindful of him?'",
      "options": [
        "Job",
        "David",
        "Isaiah",
        "Jeremiah"
      ],
      "correct": 1,
      "fact": "David marveled at God's care for mankind.",
      "pool": "daily"
    },
    {
      "q": "In Proverbs 30:4, who asked, 'What is his name, and what is his son's name?'",
      "options": [
        "Solomon",
        "Agur",
        "Lemuel",
        "David"
      ],
      "correct": 1,
      "fact": "Agur reflected on God's greatness.",
      "pool": "daily"
    },
    {
      "q": "In Isaiah 6:8, who asked, 'Whom shall I send, and who will go for us?'",
      "options": [
        "Isaiah",
        "An angel",
        "The LORD",
        "The seraphim"
      ],
      "correct": 2,
      "fact": "God issued a call for a prophet.",
      "pool": "daily"
    },
    {
      "q": "In Jeremiah 1:6, who said, 'Ah, Lord GOD! behold, I cannot speak'?",
      "options": [
        "Isaiah",
        "Ezekiel",
        "Jeremiah",
        "Baruch"
      ],
      "correct": 2,
      "fact": "Jeremiah doubted his ability.",
      "pool": "daily"
    },
    {
      "q": "In Jonah 4:4, who asked, 'Doest thou well to be angry?'",
      "options": [
        "Jonah",
        "The king of Nineveh",
        "The LORD",
        "A prophet"
      ],
      "correct": 2,
      "fact": "God questioned Jonah's anger.",
      "pool": "daily"
    },
    {
      "q": "In Matthew 8:27, who asked, 'What manner of man is this?'",
      "options": [
        "The Pharisees",
        "The crowd",
        "The disciples",
        "John the Baptist"
      ],
      "correct": 2,
      "fact": "The disciples reacted to Jesus calming the storm.",
      "pool": "daily"
    },
    {
      "q": "In Matthew 9:28, who asked, 'Believe ye that I am able to do this?'",
      "options": [
        "Peter",
        "Jesus",
        "A Pharisee",
        "John"
      ],
      "correct": 1,
      "fact": "Jesus tested the blind men's faith.",
      "pool": "daily"
    },
    {
      "q": "In Matthew 16:15, who asked, 'But whom say ye that I am?'",
      "options": [
        "Peter",
        "Jesus",
        "John",
        "The Pharisees"
      ],
      "correct": 1,
      "fact": "Jesus asked His disciples.",
      "pool": "daily"
    },
    {
      "q": "In Matthew 26:22, who asked, 'Lord, is it I?'",
      "options": [
        "Judas alone",
        "Peter",
        "All the disciples",
        "John"
      ],
      "correct": 2,
      "fact": "Each disciple questioned himself.",
      "pool": "daily"
    },
    {
      "q": "In Mark 4:40, who asked, 'Why are ye so fearful?'",
      "options": [
        "Peter",
        "Jesus",
        "James",
        "An angel"
      ],
      "correct": 1,
      "fact": "Jesus rebuked the disciples' fear.",
      "pool": "daily"
    },
    {
      "q": "In Luke 10:29, who asked, 'And who is my neighbour?'",
      "options": [
        "A Pharisee",
        "A lawyer",
        "A scribe",
        "A disciple"
      ],
      "correct": 1,
      "fact": "The lawyer tested Jesus.",
      "pool": "daily"
    },
    {
      "q": "In Luke 18:41, who asked, 'What wilt thou that I shall do unto thee?'",
      "options": [
        "Peter",
        "Jesus",
        "The blind man",
        "The crowd"
      ],
      "correct": 1,
      "fact": "Jesus invited the blind man to express faith.",
      "pool": "daily"
    },
    {
      "q": "In John 1:38, who asked, 'What seek ye?'",
      "options": [
        "John the Baptist",
        "Jesus",
        "Andrew",
        "Philip"
      ],
      "correct": 1,
      "fact": "Jesus questioned two followers.",
      "pool": "daily"
    },
    {
      "q": "In John 3:4, who asked, 'How can a man be born when he is old?'",
      "options": [
        "Nicodemus",
        "A Pharisee",
        "Peter",
        "John"
      ],
      "correct": 0,
      "fact": "Nicodemus misunderstood spiritual rebirth.",
      "pool": "daily"
    },
    {
      "q": "In John 6:68, who said, 'Lord, to whom shall we go?'",
      "options": [
        "John",
        "Andrew",
        "Peter",
        "Thomas"
      ],
      "correct": 2,
      "fact": "Peter affirmed loyalty to Jesus.",
      "pool": "daily"
    },
    {
      "q": "In John 11:26, who asked, 'Believest thou this?'",
      "options": [
        "Martha",
        "Mary",
        "Jesus",
        "Lazarus"
      ],
      "correct": 2,
      "fact": "Jesus spoke about resurrection.",
      "pool": "daily"
    },
    {
      "q": "In John 18:38, who asked, 'What is truth?'",
      "options": [
        "Caiaphas",
        "Herod",
        "Pilate",
        "A Pharisee"
      ],
      "correct": 2,
      "fact": "Pilate questioned Jesus during trial.",
      "pool": "daily"
    },
    {
      "q": "In Acts 2:37, who asked, 'Men and brethren, what shall we do?'",
      "options": [
        "The apostles",
        "The crowd",
        "The Pharisees",
        "The priests"
      ],
      "correct": 1,
      "fact": "The people responded in repentance.",
      "pool": "daily"
    },
    {
      "q": "In Acts 9:5, who asked, 'Who art thou, Lord?'",
      "options": [
        "Ananias",
        "Peter",
        "Saul",
        "Stephen"
      ],
      "correct": 2,
      "fact": "Saul encountered Christ.",
      "pool": "daily"
    },
    {
      "q": "In Acts 16:30, who asked, 'What must I do to be saved?'",
      "options": [
        "Lydia",
        "Paul",
        "The Philippian jailer",
        "Silas"
      ],
      "correct": 2,
      "fact": "The jailer sought salvation.",
      "pool": "daily"
    },
    {
      "q": "In Romans 6:1, who asked, 'Shall we continue in sin?'",
      "options": [
        "Peter",
        "Paul",
        "James",
        "John"
      ],
      "correct": 1,
      "fact": "Paul addressed grace and obedience.",
      "pool": "daily"
    },
    {
      "q": "In Romans 8:31, who asked, 'If God be for us, who can be against us?'",
      "options": [
        "Paul",
        "Peter",
        "Luke",
        "James"
      ],
      "correct": 0,
      "fact": "Paul declared confidence in God.",
      "pool": "daily"
    },
    {
      "q": "In 1 Corinthians 1:20, who asked, 'Where is the wise?'",
      "options": [
        "Apollos",
        "Paul",
        "Peter",
        "Barnabas"
      ],
      "correct": 1,
      "fact": "Paul contrasted wisdom.",
      "pool": "daily"
    },
    {
      "q": "In Galatians 3:1, who asked, 'Who hath bewitched you?'",
      "options": [
        "Peter",
        "Paul",
        "James",
        "Jude"
      ],
      "correct": 1,
      "fact": "Paul rebuked false teaching.",
      "pool": "daily"
    },
    {
      "q": "In Hebrews 2:3, who asked, 'How shall we escape?'",
      "options": [
        "Paul",
        "Peter",
        "The writer of Hebrews",
        "James"
      ],
      "correct": 2,
      "fact": "Warning against neglecting salvation.",
      "pool": "daily"
    },
    {
      "q": "In James 4:14, who asked, 'What is your life?'",
      "options": [
        "Peter",
        "John",
        "James",
        "Jude"
      ],
      "correct": 2,
      "fact": "James taught life's brevity.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 6:10, who cried, 'How long, O Lord?'",
      "options": [
        "Angels",
        "The martyrs",
        "Elders",
        "The churches"
      ],
      "correct": 1,
      "fact": "Martyrs cried for justice.",
      "pool": "daily"
    },
    {
      "q": "In Revelation 7:13, who asked, 'What are these which are arrayed in white robes?'",
      "options": [
        "John",
        "An angel",
        "One of the elders",
        "The LORD"
      ],
      "correct": 2,
      "fact": "An elder explained the redeemed.",
      "pool": "daily"
    },
    {
      "q": "In Genesis 16:8, who asked, 'Whence camest thou?'",
      "options": [
        "Abraham",
        "Sarah",
        "The angel of the LORD",
        "Ishmael"
      ],
      "correct": 2,
      "fact": "The angel questioned Hagar.",
      "pool": "daily"
    },
    {
      "q": "In Isaiah 53:1, who asked, 'Who hath believed our report?'",
      "options": [
        "Jeremiah",
        "Isaiah",
        "Ezekiel",
        "Daniel"
      ],
      "correct": 1,
      "fact": "Isaiah spoke prophetically.",
      "pool": "daily"
    },
    {
      "q": "In Malachi 1:6, who asked, 'Where is mine honour?'",
      "options": [
        "The priests",
        "Israel",
        "The LORD",
        "The prophet"
      ],
      "correct": 2,
      "fact": "God rebuked dishonor.",
      "pool": "daily"
    },
    {
      "q": "How many days and nights did it rain during the flood?",
      "options": [
        "7",
        "40",
        "100",
        "150"
      ],
      "correct": 1,
      "fact": "It rained forty days and forty nights according to Genesis 7:12.",
      "pool": "multiplayer"
    },
    {
      "q": "How many apostles did Jesus choose?",
      "options": [
        "7",
        "10",
        "12",
        "70"
      ],
      "correct": 2,
      "fact": "Jesus chose twelve apostles to follow Him and spread His teachings.",
      "pool": "multiplayer"
    },
    {
      "q": "In what city did Jesus perform his first miracle?",
      "options": [
        "Jerusalem",
        "Bethlehem",
        "Cana of Galilee",
        "Nazareth"
      ],
      "correct": 2,
      "fact": "Jesus turned water into wine at a wedding in Cana of Galilee (John 2:1-11).",
      "pool": "multiplayer"
    },
    {
      "q": "How many books are in the King James Bible?",
      "options": [
        "39",
        "52",
        "66",
        "73"
      ],
      "correct": 2,
      "fact": "The KJV has 39 Old Testament books and 27 New Testament books, totaling 66.",
      "pool": "multiplayer"
    },
    {
      "q": "Who said, 'Am I my brother's keeper?'",
      "options": [
        "Abel",
        "Adam",
        "Cain",
        "Seth"
      ],
      "correct": 2,
      "fact": "Cain said this to God after killing his brother Abel (Genesis 4:9).",
      "pool": "multiplayer"
    },
    {
      "q": "How much did Goliath's spearhead weigh? (1 Samuel 17:7)",
      "options": [
        "5 pounds",
        "10 pounds",
        "15 pounds",
        "25 pounds"
      ],
      "correct": 2,
      "fact": "The spearhead weighed 600 shekels of iron, about 15 pounds.",
      "pool": "multiplayer"
    },
    {
      "q": "How long was Noah's ark? (Genesis 6:15)",
      "options": [
        "150 cubits",
        "200 cubits",
        "300 cubits",
        "400 cubits"
      ],
      "correct": 2,
      "fact": "God instructed Noah to build the ark 300 cubits long.",
      "pool": "multiplayer"
    },
    {
      "q": "How old was Noah when the flood began? (Genesis 7:11)",
      "options": [
        "500 years",
        "550 years",
        "600 years",
        "650 years"
      ],
      "correct": 2,
      "fact": "The flood came when Noah was 600 years old.",
      "pool": "multiplayer"
    },
    {
      "q": "How many plagues did God send upon Egypt? (Exodus 7–12)",
      "options": [
        "7",
        "10",
        "12",
        "14"
      ],
      "correct": 1,
      "fact": "God sent ten plagues to convince Pharaoh to release Israel.",
      "pool": "multiplayer"
    },
    {
      "q": "How long did the children of Israel dwell in Egypt? (Exodus 12:40)",
      "options": [
        "215 years",
        "300 years",
        "400 years",
        "430 years"
      ],
      "correct": 3,
      "fact": "Israel dwelt in Egypt for 430 years.",
      "pool": "multiplayer"
    },
    {
      "q": "How many years did Israel wander in the wilderness? (Numbers 14:33–34)",
      "options": [
        "20 years",
        "30 years",
        "40 years",
        "50 years"
      ],
      "correct": 2,
      "fact": "Israel wandered 40 years due to unbelief.",
      "pool": "multiplayer"
    },
    {
      "q": "How far were the Israelites instructed to stay behind the Ark of the Covenant? (Joshua 3:4)",
      "options": [
        "1,000 cubits",
        "2,000 cubits",
        "3,000 cubits",
        "4,000 cubits"
      ],
      "correct": 1,
      "fact": "They were told to stay 2,000 cubits behind the ark.",
      "pool": "multiplayer"
    },
    {
      "q": "How many Philistines did Samson kill when the temple collapsed? (Judges 16:27-30)",
      "options": [
        "About 300",
        "About 1,000",
        "About 3,000",
        "About 5,000"
      ],
      "correct": 2,
      "fact": "About 3,000 Philistines were killed in Samson's final act.",
      "pool": "multiplayer"
    },
    {
      "q": "Which tribe was Saul from? (1 Samuel 9:21)",
      "options": [
        "Judah",
        "Benjamin",
        "Ephraim",
        "Levi"
      ],
      "correct": 1,
      "fact": "Saul was from the tribe of Benjamin.",
      "pool": "multiplayer"
    },
    {
      "q": "How old was David when he began to reign? (2 Samuel 5:4)",
      "options": [
        "25",
        "30",
        "35",
        "40"
      ],
      "correct": 1,
      "fact": "David was 30 years old when he became king.",
      "pool": "multiplayer"
    },
    {
      "q": "How many years did Solomon reign over Israel? (1 Kings 11:42)",
      "options": [
        "20 years",
        "30 years",
        "40 years",
        "50 years"
      ],
      "correct": 2,
      "fact": "Solomon reigned for 40 years.",
      "pool": "multiplayer"
    },
    {
      "q": "How long was Solomon's temple? (1 Kings 6:2)",
      "options": [
        "40 cubits",
        "50 cubits",
        "60 cubits",
        "70 cubits"
      ],
      "correct": 2,
      "fact": "The temple was 60 cubits long.",
      "pool": "multiplayer"
    },
    {
      "q": "How much gold came to Solomon in one year? (1 Kings 10:14)",
      "options": [
        "300 talents",
        "500 talents",
        "666 talents",
        "1,000 talents"
      ],
      "correct": 2,
      "fact": "Solomon received 666 talents of gold yearly.",
      "pool": "multiplayer"
    },
    {
      "q": "How was Elijah taken into heaven? (2 Kings 2:11)",
      "options": [
        "In a whirlwind",
        "By angels",
        "In a chariot of fire",
        "Both A and C"
      ],
      "correct": 3,
      "fact": "Elijah was taken up by a whirlwind with a chariot of fire.",
      "pool": "multiplayer"
    },
    {
      "q": "How long did it take to rebuild the wall of Jerusalem? (Nehemiah 6:15)",
      "options": [
        "21 days",
        "40 days",
        "52 days",
        "70 days"
      ],
      "correct": 2,
      "fact": "The wall was completed in just 52 days.",
      "pool": "multiplayer"
    },
    {
      "q": "How many years did Job live after his trials? (Job 42:16)",
      "options": [
        "80 years",
        "100 years",
        "120 years",
        "140 years"
      ],
      "correct": 3,
      "fact": "Job lived 140 years after his suffering.",
      "pool": "multiplayer"
    },
    {
      "q": "What lifespan does Moses describe as typical? (Psalm 90:10)",
      "options": [
        "60 years",
        "70 years",
        "80 years",
        "90 years"
      ],
      "correct": 1,
      "fact": "Moses states the days of our years are threescore and ten (70).",
      "pool": "multiplayer"
    },
    {
      "q": "What shape does Isaiah say the earth has? (Isaiah 40:22)",
      "options": [
        "A sphere",
        "A circle",
        "A square",
        "A pillar"
      ],
      "correct": 1,
      "fact": "Isaiah refers to the circle of the earth.",
      "pool": "multiplayer"
    },
    {
      "q": "How many times hotter was the furnace heated for Shadrach, Meshach, and Abednego? (Daniel 3:19)",
      "options": [
        "3 times",
        "5 times",
        "7 times",
        "10 times"
      ],
      "correct": 2,
      "fact": "The furnace was heated seven times hotter than usual.",
      "pool": "multiplayer"
    },
    {
      "q": "How many days' journey was Nineveh? (Jonah 3:3)",
      "options": [
        "One day",
        "Two days",
        "Three days",
        "Seven days"
      ],
      "correct": 2,
      "fact": "Nineveh was described as a three days' journey.",
      "pool": "multiplayer"
    },
    {
      "q": "How many days did Jesus fast in the wilderness? (Matthew 4:2)",
      "options": [
        "20 days",
        "30 days",
        "40 days",
        "50 days"
      ],
      "correct": 2,
      "fact": "Jesus fasted for forty days and nights.",
      "pool": "multiplayer"
    },
    {
      "q": "How many men were fed in the feeding of the 5,000? (Matthew 14:21)",
      "options": [
        "About 3,000",
        "About 4,000",
        "About 5,000",
        "About 7,000"
      ],
      "correct": 2,
      "fact": "About five thousand men were fed, besides women and children.",
      "pool": "multiplayer"
    },
    {
      "q": "How many pieces of silver was Jesus betrayed for? (Matthew 26:15)",
      "options": [
        "20",
        "30",
        "40",
        "50"
      ],
      "correct": 1,
      "fact": "Judas agreed to betray Jesus for thirty pieces of silver.",
      "pool": "multiplayer"
    },
    {
      "q": "How long did darkness cover the land during the crucifixion? (Matthew 27:45)",
      "options": [
        "One hour",
        "Two hours",
        "Three hours",
        "Six hours"
      ],
      "correct": 2,
      "fact": "Darkness fell from the sixth hour to the ninth hour (3 hours).",
      "pool": "multiplayer"
    },
    {
      "q": "On what day of the week did Jesus rise from the dead? (Matthew 28:1)",
      "options": [
        "Saturday",
        "Sunday",
        "Monday",
        "Friday"
      ],
      "correct": 1,
      "fact": "Jesus rose on the first day of the week.",
      "pool": "multiplayer"
    },
    {
      "q": "How many disciples were present before Pentecost? (Acts 1:15)",
      "options": [
        "70",
        "100",
        "120",
        "500"
      ],
      "correct": 2,
      "fact": "About 120 disciples were gathered.",
      "pool": "multiplayer"
    },
    {
      "q": "How many people were saved on the Day of Pentecost? (Acts 2:41)",
      "options": [
        "About 1,000",
        "About 2,000",
        "About 3,000",
        "About 5,000"
      ],
      "correct": 2,
      "fact": "About three thousand souls were added.",
      "pool": "multiplayer"
    },
    {
      "q": "How old was Moses when he visited his brethren? (Acts 7:23)",
      "options": [
        "30 years",
        "40 years",
        "60 years",
        "80 years"
      ],
      "correct": 1,
      "fact": "Moses was forty years old.",
      "pool": "multiplayer"
    },
    {
      "q": "How many years passed before God appeared to Moses in the burning bush? (Acts 7:30)",
      "options": [
        "20 years",
        "30 years",
        "40 years",
        "50 years"
      ],
      "correct": 2,
      "fact": "Forty years passed before God spoke to Moses again.",
      "pool": "multiplayer"
    },
    {
      "q": "How many things does Paul list that cannot separate us from God's love? (Romans 8:38–39)",
      "options": [
        "6",
        "8",
        "10",
        "12"
      ],
      "correct": 2,
      "fact": "Paul lists ten things that cannot separate us from God's love.",
      "pool": "multiplayer"
    },
    {
      "q": "How many spiritual gifts are described in 1 Corinthians 12:8-10?",
      "options": [
        "7",
        "9",
        "12",
        "15"
      ],
      "correct": 1,
      "fact": "Nine spiritual gifts are listed.",
      "pool": "multiplayer"
    },
    {
      "q": "How many pieces are listed in the armor of God? (Ephesians 6:13–17)",
      "options": [
        "5",
        "6",
        "7",
        "8"
      ],
      "correct": 1,
      "fact": "Six pieces make up the armor of God.",
      "pool": "multiplayer"
    },
    {
      "q": "How many people are mentioned by name in Hebrews 11?",
      "options": [
        "12",
        "15",
        "16",
        "18"
      ],
      "correct": 2,
      "fact": "Sixteen individuals are named in the faith chapter.",
      "pool": "multiplayer"
    },
    {
      "q": "What is promised to those who endure temptation? (James 1:12)",
      "options": [
        "A crown of life",
        "A robe of righteousness",
        "Eternal riches",
        "A heavenly mansion"
      ],
      "correct": 0,
      "fact": "Those who endure receive the crown of life.",
      "pool": "multiplayer"
    },
    {
      "q": "How many candlesticks did John see? (Revelation 1:12)",
      "options": [
        "5",
        "7",
        "10",
        "12"
      ],
      "correct": 1,
      "fact": "John saw seven golden candlesticks.",
      "pool": "multiplayer"
    },
    {
      "q": "How many horns did the Lamb have? (Revelation 5:6)",
      "options": [
        "5",
        "6",
        "7",
        "10"
      ],
      "correct": 2,
      "fact": "The Lamb had seven horns and seven eyes.",
      "pool": "multiplayer"
    },
    {
      "q": "How many were sealed from the tribes of Israel? (Revelation 7:4)",
      "options": [
        "12,000",
        "72,000",
        "120,000",
        "144,000"
      ],
      "correct": 3,
      "fact": "144,000 were sealed from the tribes of Israel.",
      "pool": "multiplayer"
    },
    {
      "q": "How many gates does the New Jerusalem have? (Revelation 21:12)",
      "options": [
        "10",
        "12",
        "14",
        "16"
      ],
      "correct": 1,
      "fact": "The city has twelve gates.",
      "pool": "multiplayer"
    },
    {
      "q": "How thick is the wall of the New Jerusalem? (Revelation 21:17)",
      "options": [
        "72 cubits",
        "100 cubits",
        "144 cubits",
        "200 cubits"
      ],
      "correct": 2,
      "fact": "The wall measured 144 cubits.",
      "pool": "multiplayer"
    },
    {
      "q": "How many kinds of fruit does the tree of life bear? (Revelation 22:2)",
      "options": [
        "6",
        "10",
        "12",
        "24"
      ],
      "correct": 2,
      "fact": "The tree bears twelve kinds of fruit.",
      "pool": "multiplayer"
    },
    {
      "q": "How many rivers flowed out of Eden? (Genesis 2:10)",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correct": 2,
      "fact": "Four rivers flowed from Eden.",
      "pool": "multiplayer"
    },
    {
      "q": "How old was Joseph when he stood before Pharaoh? (Genesis 41:46)",
      "options": [
        "25",
        "30",
        "35",
        "40"
      ],
      "correct": 1,
      "fact": "Joseph was 30 years old.",
      "pool": "multiplayer"
    },
    {
      "q": "How old was Joseph when he died? (Genesis 50:26)",
      "options": [
        "100",
        "105",
        "110",
        "120"
      ],
      "correct": 2,
      "fact": "Joseph died at 110 years old.",
      "pool": "multiplayer"
    },
    {
      "q": "How many commandments did God give Moses? (Exodus 20)",
      "options": [
        "8",
        "10",
        "12",
        "15"
      ],
      "correct": 1,
      "fact": "God gave ten commandments.",
      "pool": "multiplayer"
    },
    {
      "q": "How many disciples did Jesus send out two by two? (Luke 10:1)",
      "options": [
        "12",
        "70",
        "72",
        "100"
      ],
      "correct": 1,
      "fact": "Jesus sent out seventy disciples.",
      "pool": "multiplayer"
    },
    {
      "q": "How many waterpots were used at the wedding in Cana? (John 2:6)",
      "options": [
        "4",
        "6",
        "8",
        "10"
      ],
      "correct": 1,
      "fact": "There were six waterpots used for purification.",
      "pool": "multiplayer"
    },
    {
      "q": "How many fish were caught after Jesus' resurrection? (John 21:11)",
      "options": [
        "120",
        "144",
        "153",
        "200"
      ],
      "correct": 2,
      "fact": "The disciples caught 153 fish.",
      "pool": "multiplayer"
    },
    {
      "q": "How many people were aboard Paul's ship? (Acts 27:37)",
      "options": [
        "176",
        "206",
        "276",
        "306"
      ],
      "correct": 2,
      "fact": "There were 276 people on the ship.",
      "pool": "multiplayer"
    },
    {
      "q": "What is the number of the beast? (Revelation 13:18)",
      "options": [
        "616",
        "666",
        "777",
        "999"
      ],
      "correct": 1,
      "fact": "The number of the beast is six hundred threescore and six.",
      "pool": "multiplayer"
    },
    {
      "q": "How many stood with the Lamb on Mount Zion? (Revelation 14:1)",
      "options": [
        "12,000",
        "72,000",
        "120,000",
        "144,000"
      ],
      "correct": 3,
      "fact": "144,000 stood with the Lamb on Mount Zion.",
      "pool": "multiplayer"
    }
  ],
  "General Knowledge": [
    {
      "q": "The word \"astasia\" means which of the following?",
      "options": [
        "A feverish desire to rip one's clothes off",
        "The inability to concentrate on anything",
        "The inability to make decisions",
        "The inability to stand up"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What character was once considered to be the 27th letter of the alphabet?",
      "options": [
        "Pilcrow",
        "Tilde",
        "Ampersand",
        "Interrobang"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "According to the nursery rhyme, what fruit did Little Jack Horner pull out of his Christmas pie?",
      "options": [
        "Plum",
        "Apple",
        "Pear",
        "Peach"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is the name of the antagonist group in Danganronpa Another Episode: Ultra Despair Girls?",
      "options": [
        "Warriors of Despair",
        "The Monokubs",
        "Warriors of Hope",
        "The Ultimate Despair"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the General Mills Corporation's monster cereals was the last to be released in the 1970's?",
      "options": [
        "Fruit Brute",
        "Count Chocula",
        "Franken Berry",
        "Boo-Berry"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "In ancient Greece, if your job were a \"hippeus\" which of these would you own?",
      "options": [
        "Guitar",
        "Boat",
        "Horse",
        "Weave"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What direction does the Statue of Liberty face?",
      "options": [
        "Northwest",
        "Northeast",
        "Southeast",
        "Southwest"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following is an existing family in \"The Sims\"?",
      "options": [
        "The Family",
        "The Simoleon Family",
        "The Proud Family",
        "The Goth Family"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following is not an Ivy League University?",
      "options": [
        "Princeton",
        "Harvard",
        "University of Pennsylvania",
        "Stanford"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What does VR stand for?",
      "options": [
        "Visual Recognition",
        "Very Real",
        "Voice Recognition",
        "Virtual Reality"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What year was the first Apple iPod introduced?",
      "options": [
        "2001",
        "2000",
        "1998",
        "1999"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following is NOT one of Aesop's fables?",
      "options": [
        "The Fox and the Hound",
        "The Fox and the Grapes",
        "The Tortoise and the Hare",
        "The Frog and the Ox"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "The phrase \"accident waiting to happen\" is an example of what type of figure of speech?",
      "options": [
        "Idiom",
        "Analogy",
        "Simile",
        "Metaphor"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What style of beer will typically have a higher than average hop content?",
      "options": [
        "Extra Special Bitter",
        "Stout",
        "India Pale Ale",
        "Scotch Ale"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which river flows through the Scottish city of Glasgow?",
      "options": [
        "Dee",
        "Tay",
        "Tweed",
        "Clyde"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What technology is named after a tenth-century ruler of Denmark and Norway?",
      "options": [
        "GPS",
        "Wi-Fi",
        "Bluetooth",
        "Internet"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Who is a co-founder of music streaming service Spotify?",
      "options": [
        "Michael Breidenbruecker",
        "Sean Parker",
        "Felix Miller",
        "Daniel Ek"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "According to the Book of Genesis in the Old Testament, how many days did it take God to create the world?",
      "options": [
        "Twelve",
        "Six",
        "Seven",
        "One"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which American-owned brewery led the country in sales by volume in 2015?",
      "options": [
        "D. G. Yuengling and Son, Inc",
        "Miller Coors",
        "Boston Beer Company",
        "Anheuser Busch"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "The term \"scientist\" was coined in which year?",
      "options": [
        "1796",
        "1833",
        "1942",
        "1933"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the shape of the toy invented by Hungarian professor Ernő Rubik?",
      "options": [
        "Cube",
        "Pyramid",
        "Sphere",
        "Cylinder"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What do the letters in the GMT time zone stand for?",
      "options": [
        "Glasgow Man Time",
        "Greenwich Mean Time",
        "General Median Time",
        "Global Meridian Time"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which of these banks are NOT authorized to issue currency notes in Hong Kong?",
      "options": [
        "HSBC",
        "Standard Chartered",
        "OCBC",
        "Bank of China"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What is the nickname of the US state of California?",
      "options": [
        "Golden State",
        "Treasure State",
        "Sunshine State",
        "Bay State"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
      "options": [
        "Trojan Horse",
        "Noah's Ark",
        "Fat Man",
        "Spruce Goose"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Which of these words means \"idle spectator\"?",
      "options": [
        "Gongoozler",
        "Jentacular",
        "Gossypiboma",
        "Meupareunia"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "In a standard set of playing cards, which is the only king without a moustache?",
      "options": [
        "Clubs",
        "Spades",
        "Diamonds",
        "Hearts"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "When was Nintendo founded?",
      "options": [
        "December 27th, 1894",
        "September 23rd, 1889",
        "October 19th, 1891",
        "March 4th, 1887"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the last letter of the Greek alphabet?",
      "options": [
        "Omega",
        "Epsilon",
        "Mu",
        "Kappa"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "If you planted the seeds of Quercus robur, what would grow?",
      "options": [
        "Trees",
        "Flowers",
        "Vegetables",
        "Grains"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "\"Nephelococcygia\" is the practice of doing what? ",
      "options": [
        "Finding shapes in clouds",
        "Swimming in freezing water",
        "Sleeping with your eyes open",
        "Breaking glass with your voice"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Virtual reality company Oculus VR lost which of it's co-founders in a freak car accident in 2013?",
      "options": [
        "Nate Mitchell",
        "Palmer Luckey",
        "Andrew Scott Reisse",
        "Jack McCauley"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Going by the International Code of Signals, which single flag is interpreted as \"I require assistance (not distress)\"?",
      "options": [
        "Kilo",
        "Victor",
        "Papa",
        "Delta"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "The buried remains of which English explorer of Australia were found in London  in January 2019? ",
      "options": [
        "Abel Tasman",
        "Matthew Flinders",
        "Dirk Hartog",
        "William Bourke"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "The likeness of which president is featured on the rare $2 bill of USA currency?",
      "options": [
        "Ulysses Grant",
        "Martin Van Buren",
        "Thomas Jefferson",
        "John Quincy Adams"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which product did Nokia, the telecommunications company, originally sell?",
      "options": [
        "Computers",
        "Paper",
        "Phones",
        "Processors"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
      "options": [
        "Westendstrasse 1",
        "One Detroit Center",
        "Niagara Mohawk Building",
        "Taipei 101"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What was the soft drink Pepsi originally introduced as?",
      "options": [
        "Brad's Drink",
        "Pepsin Pop",
        "Pepsin Syrup",
        "Carolina Cola"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What English word means to \"think deeply\"?",
      "options": [
        "Condensate",
        "Confiscate",
        "Constipate",
        "Contemplate"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Where does water from Poland Spring water bottles come from?",
      "options": [
        "Maine, United States",
        "Bavaria, Poland",
        "Hesse, Germany",
        "Masovia, Poland"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "In \"Katamari Damacy\", you control a character known as:",
      "options": [
        "Ichigo ",
        "Fujio",
        "The Prince",
        "Foomin"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "According to Sherlock Holmes, \"If you eliminate the impossible, whatever remains, however improbable, must be the...\"",
      "options": [
        "Source",
        "Truth",
        "Answer",
        "Cause"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which canal connects the Mediterranean Sea with the Red Sea?",
      "options": [
        "Suez Canal",
        "Sinai Canal",
        "Panama Canal",
        "Qaraqum Canal"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which type of cutlery is most suited for eating soup?",
      "options": [
        "Fork",
        "Chopsticks",
        "Knife",
        "Spoon"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Death Valley's Badwater Basin is North America's point of lowest elevation at how many feet below sea level?",
      "options": [
        "1,640 feet",
        "12,092 feet",
        "282 feet",
        "79 feet"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": " Which chemical element, number 11 in the Periodic table, has the symbol Na?",
      "options": [
        "Nitrogen",
        "Carbon",
        "Sodium",
        "Lead"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following presidents is not on Mount Rushmore?",
      "options": [
        "John F. Kennedy",
        "Thomas Jefferson",
        "Theodore Roosevelt",
        "Abraham Lincoln"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "The lesser-known continuation of the saying \"Curiosity killed the cat...\" is:",
      "options": [
        "\"...but death by the truth is better than ignorance.\"",
        "\"...which taught it not to do that.\"",
        "\"...and the silent mouse remained thereat.\"",
        "\"...but satisfaction brought it back.\""
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What do the letters of the fast food chain KFC stand for?",
      "options": [
        "Kiwi Food Cut",
        "Kentucky Fresh Cheese",
        "Kentucky Fried Chicken",
        "Kibbled Freaky Cow"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What is the name given to Indian food cooked over charcoal in a clay oven?",
      "options": [
        "Tandoori",
        "Tiki masala",
        "Biryani",
        "Pani puri"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Terry Gilliam was an animator that worked with which British comedy group?",
      "options": [
        "Monty Python",
        "The Penny Dreadfuls",
        "The Goodies&lrm;",
        "The League of Gentlemen&lrm;"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is the romanized Arabic word for \"moon\"?",
      "options": [
        "Najma",
        "Qamar",
        "Shams",
        "Kawkab"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Where is Apple Inc. headquartered?",
      "options": [
        "Redwood City, California",
        "Santa Monica, CA",
        "Redmond, Washington",
        "Cupertino, California"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is the romanized Japanese word for \"university\"?",
      "options": [
        "Toshokan",
        "Jimusho",
        "Shokudou",
        "Daigaku"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "In DC comics where does the Green Arrow (Oliver Queen) live?",
      "options": [
        "Star City",
        "Metropolis",
        "Central City",
        "Gotham City"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is on display in the Madame Tussaud's museum in London?",
      "options": [
        "Designer clothing",
        "Unreleased film reels",
        "Vintage cars",
        "Wax sculptures"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is the name of the poker hand containing three of a kind and a pair?",
      "options": [
        "Full House",
        "Straight",
        "Flush",
        "High card"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What did the Spanish autonomous community of Catalonia ban in 2010, that took effect in 2012?",
      "options": [
        "Mariachi",
        "Flamenco",
        "Fiestas",
        "Bullfighting"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is the name of the main Character from the Series: Dead Space?",
      "options": [
        "Isaac Clarke",
        "Ellen Ripley",
        "Commander Shepard",
        "Captain Kirk"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is the French word for \"hat\"?",
      "options": [
        "Bonnet",
        " Écharpe",
        "Chapeau",
        " Casque"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Nephelococcygia is the practice of doing what?",
      "options": [
        "Finding shapes in clouds",
        "Breaking glass with your voice",
        "Swimming in freezing water",
        "Sleeping with your eyes open"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Sciophobia is the fear of what?",
      "options": [
        "Shadows",
        "Bright lights",
        "Eating",
        "Transportation"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which famed architect, who died in 2019 aged 102, designed the glass pyramid at the Louvre museum in Paris?",
      "options": [
        "Wang Shu",
        "Pascale Guédot",
        "I. M. Pei",
        "Frank Gehry"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following languages does NOT use gender as a part of its grammar?",
      "options": [
        "Turkish",
        "Polish",
        "German",
        "Danish"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "According to the BBPA, what is the most common pub name in the UK?",
      "options": [
        "Red Lion",
        "King's Head",
        "Royal Oak",
        "White Hart"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which one of the following rhythm games was made by Harmonix?",
      "options": [
        "Rock Band",
        "Guitar Hero Live",
        "Dance Dance Revolution",
        "Meat Beat Mania"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Red Vines is a brand of what type of candy?",
      "options": [
        "Licorice",
        "Chocolate",
        "Bubblegum",
        "Lollipop"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is the name of Poland in Polish?",
      "options": [
        "Pupcia",
        "Polszka",
        "Polska",
        "P&oacute;land"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What are the three starter Pokemon available in Pokemon Black and White?",
      "options": [
        "Snivy, Fennekin, Froakie",
        "Chespin, Tepig, Froakie",
        "Chespin, Fennekin, Oshawott",
        "Snivy, Tepig, Oshawott"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is the weight of a Gold Bar in Fallout: New Vegas?",
      "options": [
        "32.50 Pounds",
        "40 Pounds",
        "30 Pounds",
        "35 Pounds"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Amsterdam Centraal station is twinned with what station?",
      "options": [
        "Paris Gare du Nord",
        "Brussels Midi",
        "Frankfurt (Main) Hauptbahnhof",
        "London Liverpool Street"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Which company did Valve cooperate with in the creation of the Vive?",
      "options": [
        "HTC",
        "Razer",
        "Oculus",
        "Google"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What country does sushi & karaoke come from?",
      "options": [
        "South Korea",
        "Vietnam",
        "China",
        "Japan"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following Ivy League universities has its official motto in Hebrew as well as in Latin?",
      "options": [
        "Yale University",
        "Columbia University",
        "Princeton University",
        "Harvard University"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What does the Latin phrase \"Veni, vidi, vici\" translate into English?",
      "options": [
        "Life, liberty, and happiness",
        "I came, I saw, I conquered",
        "See no evil, hear no evil, speak no evil",
        "Past, present, and future"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which country drives on the left side of the road?",
      "options": [
        "Germany",
        "Russia",
        "Japan",
        "China"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which is the most popular spoken language in the Southern Hemisphere?",
      "options": [
        "English ",
        "Spanish",
        "French",
        "Portuguese"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "The New York Times slogan is, \"All the News That's Fit to…\"",
      "options": [
        "Print",
        "Read",
        "Digest",
        "Look"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What machine element is located in the center of fidget spinners?",
      "options": [
        "Axles",
        "Gears",
        "Bearings",
        "Belts"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "In Half-Life, what is the name of the alien that attaches to heads?",
      "options": [
        "Headcrab",
        "Vortigaunt",
        "Bullsquid",
        "Facehugger"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Who is considered the \"Father of Modern Philosophy\"?",
      "options": [
        "Albert Einstein",
        "Plato",
        "René Descartes",
        "Antoine Lavoiser"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What was the name given to Japanese military dictators who ruled the country through the 12th and 19th Century?",
      "options": [
        "Ninja",
        "Shinobi",
        "Shogun",
        "Samurai"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What company developed the vocaloid Hatsune Miku?",
      "options": [
        "Sony",
        "Sega",
        "Yamaha Corporation",
        "Crypton Future Media"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "The Fields Medal, one of the most sought after awards in mathematics, is awarded every how many years?",
      "options": [
        "5",
        "3",
        "6",
        "4"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What word represents the letter 'T' in the NATO phonetic alphabet?",
      "options": [
        "Target",
        "Turkey",
        "Taxi",
        "Tango"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "In which cardinal direction does the Sun rise from?",
      "options": [
        "West",
        "East",
        "South",
        "North"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the three astronauts of the Apollo 11 spaceflight did NOT walk on the moon?",
      "options": [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Michael Collins",
        "None of them"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What is Cynophobia the fear of?",
      "options": [
        "Birds",
        "Flying",
        "Germs",
        "Dogs"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is the shortest month of the year?",
      "options": [
        "April",
        "February",
        "September",
        "December"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which item of clothing is usually worn by a Scotsman at a wedding?",
      "options": [
        "Dress",
        "Kilt",
        "Rhobes",
        "Skirt"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "A statue of Charles Darwin sits in what London museum?",
      "options": [
        "Natural History Museum",
        "Tate",
        "British Museum",
        "Science Museum"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which of these fast-food chains is NOT mainly known to sell pizza?",
      "options": [
        "Domino's",
        "Little Caesars",
        "Papa John's",
        "Wendy's"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Bob and Mike Bryan were well known brothers in which sport?",
      "options": [
        "Baseball",
        "Basketball",
        "Football",
        "Tennis"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is the world's most expensive spice by weight?",
      "options": [
        "Cardamom",
        "Vanilla",
        "Cinnamon",
        "Saffron"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Which Italian automobile manufacturer gained majority control of U.S. automobile manufacturer Chrysler in 2011?",
      "options": [
        "Maserati",
        "Fiat",
        "Alfa Romeo",
        "Ferrari"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Foie gras is a French delicacy typically made from what part of a duck or goose?",
      "options": [
        "Heart",
        "Liver",
        "Stomach",
        "Intestines"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "This field is sometimes known as \"The Dismal Science.\"",
      "options": [
        "Economics",
        "Philosophy",
        "Physics",
        "Politics"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "The architect known as Le Corbusier was an important figure in what style of architecture?",
      "options": [
        "Baroque",
        "Neoclassical",
        "Modernism",
        "Gothic Revival"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Directly between the Washington Monument and the Reflecting Pool is a memorial to which war?",
      "options": [
        "World War II",
        "American Civil War",
        "American Revolutionary War",
        "Vietnam War"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "How many syllables make up a haiku?",
      "options": [
        "10",
        "21",
        "15",
        "17"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What nuts are used in the production of marzipan?",
      "options": [
        "Peanuts",
        "Pistachios",
        "Almonds",
        "Walnuts"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which sign of the zodiac is represented by the Crab?",
      "options": [
        "Sagittarius",
        "Cancer",
        "Libra",
        "Virgo"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the Portuguese word for \"Brazil\"?",
      "options": [
        "Bras&iacute;l",
        "Brazil",
        "Brasilia",
        "Brasil"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "\"A3\", \"B1\", and \"Legal\" are typical names of sizes for what object?",
      "options": [
        "Paper",
        "Law books",
        "Phone screens",
        "Airplanes"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which one of these Swedish companies was founded in 1943?",
      "options": [
        "Lindex",
        "H & M",
        "Clas Ohlson",
        "IKEA"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "In what year was McDonald's founded?",
      "options": [
        "1951",
        "1955",
        "1964",
        "1947"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which of these words refers to something made, distributed, or sold illegally?",
      "options": [
        "Bootleg",
        "Bootlace",
        "Bootblack",
        "Bootstrap"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "In \"Battle Cats\", what is Moneko / MISS Moneko's critical percentage rate?",
      "options": [
        "20%",
        "10%",
        "15%",
        "25%"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "The Canadian $1 coin is colloquially known as a what?",
      "options": [
        "Loonie",
        "Boolie",
        "Foolie",
        "Moodie"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Originally another word for poppy, coquelicot is a shade of what?",
      "options": [
        "Green",
        "Red",
        "Blue",
        "Pink"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "When was \"YouTube\" founded?",
      "options": [
        "July 19, 2009",
        "February 14, 2005",
        "September 12, 2005",
        "May 22, 2004"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What name represents the letter \"M\" in the NATO phonetic alphabet?",
      "options": [
        "Max",
        "Mark",
        "Matthew",
        "Mike"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Macintosh has named six of its operating systems after big cats. What big cat did Macintosh name their 2007 release after? ",
      "options": [
        "Leopard",
        "Panther",
        "Tiger",
        "Puma"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which film star has his statue in Leicester Square?",
      "options": [
        "Charlie Chaplin",
        "Paul Newman",
        "Rowan Atkinson ",
        "Alfred Hitchcock"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following carbonated soft drinks were introduced first?",
      "options": [
        "Dr. Pepper",
        "Mountain Dew",
        "Sprite",
        "Coca-Cola"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What does a milliner make and sell?",
      "options": [
        "Belts",
        "Shoes",
        "Hats",
        "Shirts"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Antibiotics are generally taken to combat what?",
      "options": [
        "Muscular pains",
        "Bacterial infections",
        "Viruses",
        "Migraines"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What do sailors call the back of a boat?",
      "options": [
        "Starboard",
        "Bow",
        "Stern",
        "Port"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Waluigi's first appearance was in what game?",
      "options": [
        "Mario Tennis 64 (N64)",
        "Wario Land: Super Mario Land 3",
        "Super Smash Bros. Ultimate",
        "Mario Party (N64)"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "In which fast food chain can you order a Jamocha Shake?",
      "options": [
        "Burger King",
        "McDonald's",
        "Arby's",
        "Wendy's"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Located in Chile, El Teniente is the world's largest underground mine for what metal?",
      "options": [
        "Iron",
        "Silver",
        "Copper",
        "Nickel"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which month is Black History Month in the US?",
      "options": [
        "May",
        "February",
        "August",
        "November"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "A doctor with a PhD is a doctor of what?",
      "options": [
        "Physical Therapy",
        "Psychology",
        "Philosophy",
        "Phrenology"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "When one is \"envious\", they are said to be what color?",
      "options": [
        "Green",
        "Red",
        "Blue",
        "Yellow"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "In the English language, what is the name of the \"&\" character?",
      "options": [
        "Obelus ",
        "Ampersand",
        "And Sign",
        "Eightslash"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the romanized Russian word for \"winter\"?",
      "options": [
        "Vesna",
        "Osen'",
        "Zima",
        "Leto"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "\"Gum arabic\" is a natural gum consisting of the hardened sap of which tree species?",
      "options": [
        "Acacia",
        "Palm",
        "Ficus",
        "Eucalyptus"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What country has had prime ministers named Eden, Major, Peel, Law, Brown and Heath?",
      "options": [
        "Australia",
        "United Kingdom",
        "New Zealand",
        "Canada"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What organ of the body produces bile?",
      "options": [
        "Stomach",
        "Liver",
        "Pancreas",
        "Gallbladder"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What do sailors call the front of a boat?",
      "options": [
        "Starboard",
        "Bow",
        "Stern",
        "Port"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which musician has collaborated with American producer Porter Robinson and released the 2016 song \"Shelter\"?",
      "options": [
        "Zedd",
        "Madeon",
        "deadmau5",
        "Mat Zo"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the first book of the Old Testament?",
      "options": [
        "Genesis",
        "Exodus",
        "Numbers",
        "Leviticus"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is the French word for \"fish\"?",
      "options": [
        "poisson",
        "fiche",
        "escargot",
        "mer"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is a \"dakimakura\"?",
      "options": [
        "A yoga posture",
        "A body pillow",
        "A word used to describe two people who truly love each other",
        "A Chinese meal, essentially composed of fish"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the Spanish word for \"donkey\"?",
      "options": [
        "Perro",
        "Caballo",
        "Burro",
        "Toro"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "Which logical fallacy means to attack the character of your opponent rather than their arguments?",
      "options": [
        "Post hoc ergo propter hoc",
        "Ad hominem",
        "Argumentum ad populum",
        "Tu quoque"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Of the following months, which has the most amount of days?",
      "options": [
        "November ",
        "April",
        "September",
        "December"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What does the \"G\" mean in \"G-Man\"?",
      "options": [
        "Going",
        "Government",
        "Geronimo",
        "Ghost"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "Which essential condiment is also known as Japanese horseradish?",
      "options": [
        "Ponzu",
        "Karashi",
        "Mentsuyu",
        "Wasabi "
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is the currency of India and Pakistan as well as a few other Asian countries?",
      "options": [
        "Riyal",
        "Rupee",
        "Dinar",
        "Peso"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "The American company \"Campbell's\" is most well known for making what food product?",
      "options": [
        "Soft drinks",
        "Sausages",
        "Chocolate",
        "Canned soups"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Which iconic Disneyland attraction was closed in 2017 to be remodeled as a \"Guardians of the Galaxy\" themed ride?",
      "options": [
        "The Haunted Mansion",
        "Peter Pan's Flight",
        "Pirates of the Caribbean",
        "Twilight Zone Tower of Terror"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "How many furlongs are there in a mile?",
      "options": [
        "Eight",
        "Four",
        "Six",
        "Two"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "Which of the following  British Monarchs never appeared on a circulated pound sterling coin?",
      "options": [
        "Charles II",
        "George VI",
        "Victoria",
        "Edward VIII"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Before the 19th Century, the \"Living Room\" was originally called the...",
      "options": [
        "Open Room",
        "Loft",
        "Parlor",
        "Sitting Room"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What do sailors call the right side of a boat?",
      "options": [
        "Port",
        "Bow",
        "Starboard",
        "Stern"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "If someone said \"you are olid\", what would they mean?",
      "options": [
        "Your appearance is repulsive.",
        "You are out of shape/weak.",
        "You are incomprehensible/an idiot.",
        "You smell extremely unpleasant."
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "What is Tasmania?",
      "options": [
        "The Name of a Warner Brothers Cartoon Character",
        "A Psychological Disorder",
        "An Australian State",
        "A flavor of Ben and Jerry's ice-cream"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What was the first ever London Underground line to be built?",
      "options": [
        "Victoria Line",
        "Circle Line",
        "Metropolitan Line",
        "Bakerloo Line"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "The website \"Shut Up & Sit Down\" reviews which form of media?",
      "options": [
        "Board Games",
        "Films",
        "Television Shows",
        "Video Games"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is the currency of Poland?",
      "options": [
        "Euro",
        "Ruble",
        "Krone",
        "Złoty"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
      "options": [
        "Sword",
        "Cellphone",
        "Key",
        "Pen"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What is the largest living species of penguin?",
      "options": [
        "Emperor",
        "King",
        "Gentoo",
        "Adele"
      ],
      "correct": 0,
      "pool": "multiplayer"
    },
    {
      "q": "What is real haggis made of?",
      "options": [
        "Sheep's Heart, Kidneys and Lungs",
        "Whole Sheep",
        "Sheep's Heart, Liver and Lungs",
        "Sheep's Liver, Kidneys and Eyes"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "What is the name of the Jewish New Year?",
      "options": [
        "Succoss",
        "Rosh Hashanah",
        "New Year",
        "Elul"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "The Quran is the holy book of which Abrahamic religion?",
      "options": [
        "Judaism",
        "Christianity",
        "Rastafarianism",
        "Islam"
      ],
      "correct": 3,
      "pool": "multiplayer"
    },
    {
      "q": "Where did the pineapple plant originate?",
      "options": [
        "Asia",
        "South America",
        "Hawaii",
        "Europe"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
      "options": [
        "Single",
        "Subscriber",
        "Solid",
        "Secure"
      ],
      "correct": 1,
      "pool": "multiplayer"
    },
    {
      "q": "What is the profession of Elon Musk's mom, Maye Musk?",
      "options": [
        "Musician",
        "Biologist",
        "Model",
        "Professor"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "The word \"dozen\" usually refers to a group of how many objects?",
      "options": [
        "20",
        "10",
        "12",
        "6"
      ],
      "correct": 2,
      "pool": "multiplayer"
    },
    {
      "q": "In which country was the 1992 Summer Olympics Games held?",
      "options": [
        "Spain",
        "Korea",
        "USA",
        "Russia"
      ],
      "correct": 0,
      "pool": "multiplayer"
    }
  ],
  "US States": [
    { "q": "What is the capital of Alabama?", "options": ["Birmingham", "Montgomery", "Mobile", "Huntsville"], "correct": 1, "fact": "Montgomery has been Alabama's capital since 1846.", "pool": "multiplayer" },
    { "q": "Which major celebration first occurred in the U.S. in Alabama?", "options": ["Thanksgiving", "Mardi Gras", "Veterans Day", "Labor Day"], "correct": 1, "fact": "The first U.S. Mardi Gras celebration took place in Mobile.", "pool": "multiplayer" },
    { "q": "What is the capital of Alaska?", "options": ["Anchorage", "Juneau", "Fairbanks", "Nome"], "correct": 1, "fact": "Juneau is only accessible by boat or plane.", "pool": "multiplayer" },
    { "q": "Which statement about Alaska is true?", "options": ["Smallest state", "Largest U.S. state", "Most populous", "Warmest climate"], "correct": 1, "fact": "Alaska is the largest U.S. state by land area.", "pool": "multiplayer" },
    { "q": "What is the capital of Arizona?", "options": ["Tucson", "Phoenix", "Flagstaff", "Mesa"], "correct": 1, "fact": "Phoenix is one of the fastest-growing U.S. cities.", "pool": "multiplayer" },
    { "q": "Which famous natural landmark is in Arizona?", "options": ["Yellowstone", "Grand Canyon", "Yosemite", "Zion"], "correct": 1, "fact": "The Grand Canyon is over a mile deep.", "pool": "multiplayer" },
    { "q": "What is the capital of Arkansas?", "options": ["Little Rock", "Fayetteville", "Hot Springs", "Jonesboro"], "correct": 0, "fact": "Little Rock lies along the Arkansas River.", "pool": "multiplayer" },
    { "q": "Arkansas is nicknamed the Natural State because of its:", "options": ["Deserts", "Mountains and rivers", "Beaches", "Prairies"], "correct": 1, "fact": "Arkansas features the Ozarks, rivers, and forests.", "pool": "multiplayer" },
    { "q": "What is the capital of California?", "options": ["Los Angeles", "San Diego", "Sacramento", "San Jose"], "correct": 2, "fact": "Sacramento became the capital in 1854.", "pool": "multiplayer" },
    { "q": "California produces the most:", "options": ["Corn", "Oranges", "Wheat", "Cotton"], "correct": 1, "fact": "California leads the U.S. in fruit and vegetable production.", "pool": "multiplayer" },
    { "q": "What is the capital of Colorado?", "options": ["Denver", "Boulder", "Aspen", "Pueblo"], "correct": 0, "fact": "Denver is known as the Mile High City.", "pool": "multiplayer" },
    { "q": "What unique feature does Colorado have?", "options": ["No rivers", "Entirely above sea level", "No lakes", "Only square state"], "correct": 1, "fact": "Every point in Colorado is above sea level.", "pool": "multiplayer" },
    { "q": "What is the capital of Connecticut?", "options": ["Hartford", "New Haven", "Bridgeport", "Stamford"], "correct": 0, "fact": "Hartford is one of the oldest U.S. capitals.", "pool": "multiplayer" },
    { "q": "Connecticut is known as the:", "options": ["Nutmeg State", "Bay State", "Garden State", "Empire State"], "correct": 0, "fact": "The Nutmeg State nickname dates back to colonial times.", "pool": "multiplayer" },
    { "q": "What is the capital of Delaware?", "options": ["Dover", "Wilmington", "Newark", "Rehoboth Beach"], "correct": 0, "fact": "Dover is centrally located in the state.", "pool": "multiplayer" },
    { "q": "Delaware is called the First State because it:", "options": ["Joined the Union first", "Ratified the Constitution first", "Ended slavery first", "Elected the first governor"], "correct": 1, "fact": "Delaware ratified the Constitution in 1787.", "pool": "multiplayer" },
    { "q": "What is the capital of Florida?", "options": ["Miami", "Orlando", "Tallahassee", "Jacksonville"], "correct": 2, "fact": "Tallahassee became the capital in 1824.", "pool": "multiplayer" },
    { "q": "Florida has the longest coastline of any:", "options": ["Atlantic state", "Gulf state", "Southern state", "Contiguous U.S. state"], "correct": 3, "fact": "Florida has over 1,300 miles of coastline.", "pool": "multiplayer" },
    { "q": "What is the capital of Georgia?", "options": ["Savannah", "Atlanta", "Macon", "Augusta"], "correct": 1, "fact": "Atlanta is a major transportation hub.", "pool": "multiplayer" },
    { "q": "Georgia is the leading producer of:", "options": ["Corn", "Peanuts", "Cotton", "Soybeans"], "correct": 1, "fact": "Georgia is known as the Peanut State.", "pool": "multiplayer" },
    { "q": "What is the capital of Hawaii?", "options": ["Maui", "Hilo", "Honolulu", "Kailua"], "correct": 2, "fact": "Honolulu is located on the island of Oahu.", "pool": "multiplayer" },
    { "q": "Hawaii is the only state that:", "options": ["Is landlocked", "Has active volcanoes", "Has deserts", "Borders Canada"], "correct": 1, "fact": "Hawaii has multiple active volcanoes.", "pool": "multiplayer" },
    { "q": "What is the capital of Idaho?", "options": ["Boise", "Idaho Falls", "Twin Falls", "Pocatello"], "correct": 0, "fact": "Boise is the largest city in Idaho.", "pool": "multiplayer" },
    { "q": "Idaho is famous for producing:", "options": ["Corn", "Potatoes", "Wheat", "Apples"], "correct": 1, "fact": "Idaho is best known for its potatoes.", "pool": "multiplayer" },
    { "q": "What is the capital of Illinois?", "options": ["Chicago", "Springfield", "Peoria", "Rockford"], "correct": 1, "fact": "Springfield was Abraham Lincoln's home.", "pool": "multiplayer" },
    { "q": "Which lake borders Illinois?", "options": ["Lake Erie", "Lake Michigan", "Lake Superior", "Lake Ontario"], "correct": 1, "fact": "Illinois borders Lake Michigan.", "pool": "multiplayer" },
    { "q": "What is the capital of Indiana?", "options": ["Fort Wayne", "Bloomington", "Indianapolis", "Lafayette"], "correct": 2, "fact": "Indianapolis is known for the Indy 500.", "pool": "multiplayer" },
    { "q": "Indiana is known as the:", "options": ["Buckeye State", "Hoosier State", "Volunteer State", "Cornhusker State"], "correct": 1, "fact": "Indiana's nickname is the Hoosier State.", "pool": "multiplayer" },
    { "q": "What is the capital of Iowa?", "options": ["Cedar Rapids", "Des Moines", "Davenport", "Ames"], "correct": 1, "fact": "Des Moines is centrally located.", "pool": "multiplayer" },
    { "q": "Iowa is a leading producer of:", "options": ["Wheat", "Rice", "Corn", "Cotton"], "correct": 2, "fact": "Iowa is one of the top corn-producing states.", "pool": "multiplayer" },
    { "q": "What is the capital of Kansas?", "options": ["Wichita", "Topeka", "Lawrence", "Manhattan"], "correct": 1, "fact": "Topeka became the capital in 1861.", "pool": "multiplayer" },
    { "q": "Kansas is located in which region of the U.S.?", "options": ["Northeast", "Midwest", "South", "West"], "correct": 1, "fact": "Kansas is considered part of the Midwest.", "pool": "multiplayer" },
    { "q": "What is the capital of Kentucky?", "options": ["Lexington", "Louisville", "Frankfort", "Bowling Green"], "correct": 2, "fact": "Frankfort is one of the smallest state capitals.", "pool": "multiplayer" },
    { "q": "Kentucky is famous for producing:", "options": ["Wine", "Bourbon", "Rum", "Tequila"], "correct": 1, "fact": "Most of the world's bourbon is made in Kentucky.", "pool": "multiplayer" },
    { "q": "What is the capital of Louisiana?", "options": ["New Orleans", "Baton Rouge", "Lafayette", "Shreveport"], "correct": 1, "fact": "Baton Rouge sits on the Mississippi River.", "pool": "multiplayer" },
    { "q": "Louisiana's legal system is influenced by:", "options": ["English law", "Spanish law", "French law", "Roman law"], "correct": 2, "fact": "Louisiana law is based on French civil law.", "pool": "multiplayer" },
    { "q": "What is the capital of Maine?", "options": ["Portland", "Augusta", "Bangor", "Lewiston"], "correct": 1, "fact": "Augusta is centrally located in Maine.", "pool": "multiplayer" },
    { "q": "Maine is famous for:", "options": ["Crabs", "Lobsters", "Shrimp", "Oysters"], "correct": 1, "fact": "Maine is known for its lobster industry.", "pool": "multiplayer" },
    { "q": "What is the capital of Maryland?", "options": ["Baltimore", "Annapolis", "Rockville", "Frederick"], "correct": 1, "fact": "Annapolis is also home to the U.S. Naval Academy.", "pool": "multiplayer" },
    { "q": "Maryland is known for which seafood?", "options": ["Shrimp", "Clams", "Crabs", "Lobsters"], "correct": 2, "fact": "Blue crabs are a Maryland staple.", "pool": "multiplayer" },
    { "q": "What is the capital of Massachusetts?", "options": ["Cambridge", "Salem", "Boston", "Worcester"], "correct": 2, "fact": "Boston is one of America's oldest cities.", "pool": "multiplayer" },
    { "q": "Which event occurred in Massachusetts?", "options": ["Boston Tea Party", "Alamo", "Gold Rush", "Battle of Gettysburg"], "correct": 0, "fact": "The Boston Tea Party occurred in 1773.", "pool": "multiplayer" },
    { "q": "What is the capital of Michigan?", "options": ["Detroit", "Lansing", "Grand Rapids", "Flint"], "correct": 1, "fact": "Lansing became the capital in 1847.", "pool": "multiplayer" },
    { "q": "Michigan borders how many Great Lakes?", "options": ["2", "3", "4", "5"], "correct": 2, "fact": "Michigan borders four of the five Great Lakes.", "pool": "multiplayer" },
    { "q": "What is the capital of Minnesota?", "options": ["Duluth", "Minneapolis", "Saint Paul", "Rochester"], "correct": 2, "fact": "Saint Paul is the state capital.", "pool": "multiplayer" },
    { "q": "Minnesota is known as the Land of:", "options": ["10,000 Lakes", "1,000 Hills", "Great Rivers", "Northern Lights"], "correct": 0, "fact": "Minnesota has over 10,000 lakes.", "pool": "multiplayer" },
    { "q": "What is the capital of Mississippi?", "options": ["Jackson", "Biloxi", "Gulfport", "Hattiesburg"], "correct": 0, "fact": "Jackson is named after Andrew Jackson.", "pool": "multiplayer" },
    { "q": "Which river forms Mississippi's western border?", "options": ["Ohio River", "Tennessee River", "Mississippi River", "Arkansas River"], "correct": 2, "fact": "The Mississippi River defines the state's border.", "pool": "multiplayer" },
    { "q": "What is the capital of Missouri?", "options": ["St. Louis", "Kansas City", "Jefferson City", "Columbia"], "correct": 2, "fact": "Jefferson City is centrally located.", "pool": "multiplayer" },
    { "q": "Missouri is known as the Gateway State because of:", "options": ["Mississippi River", "Gateway Arch", "Pioneer trails", "Railroads"], "correct": 1, "fact": "The Gateway Arch symbolizes westward expansion.", "pool": "multiplayer" },
    { "q": "What is the capital of Montana?", "options": ["Billings", "Helena", "Bozeman", "Missoula"], "correct": 1, "fact": "Helena was founded during the gold rush.", "pool": "multiplayer" },
    { "q": "Montana is known as Big Sky Country because of its:", "options": ["Tall buildings", "Wide open spaces", "High rainfall", "Coastline"], "correct": 1, "fact": "Montana is known for vast landscapes.", "pool": "multiplayer" },
    { "q": "What is the capital of Nebraska?", "options": ["Omaha", "Lincoln", "Kearney", "Grand Island"], "correct": 1, "fact": "Lincoln was named after Abraham Lincoln.", "pool": "multiplayer" },
    { "q": "Nebraska is a major producer of:", "options": ["Rice", "Corn", "Cotton", "Oranges"], "correct": 1, "fact": "Nebraska is one of the top corn producers.", "pool": "multiplayer" },
    { "q": "What is the capital of Nevada?", "options": ["Las Vegas", "Reno", "Carson City", "Henderson"], "correct": 2, "fact": "Carson City is near Lake Tahoe.", "pool": "multiplayer" },
    { "q": "Nevada is known for legalized:", "options": ["Sports betting", "Marijuana", "Gambling", "All of the above"], "correct": 3, "fact": "Nevada is famous for legalized gambling.", "pool": "multiplayer" },
    { "q": "What is the capital of New Hampshire?", "options": ["Manchester", "Nashua", "Concord", "Dover"], "correct": 2, "fact": "Concord is the state capital.", "pool": "multiplayer" },
    { "q": "New Hampshire is known for having:", "options": ["No income tax", "No sales tax", "Both A and B", "High property tax"], "correct": 2, "fact": "New Hampshire has no sales or income tax.", "pool": "multiplayer" },
    { "q": "What is the capital of New Jersey?", "options": ["Newark", "Trenton", "Jersey City", "Atlantic City"], "correct": 1, "fact": "Trenton sits along the Delaware River.", "pool": "multiplayer" },
    { "q": "New Jersey is nicknamed the:", "options": ["Empire State", "Garden State", "Keystone State", "Bay State"], "correct": 1, "fact": "New Jersey is known as the Garden State.", "pool": "multiplayer" },
    { "q": "What is the capital of New Mexico?", "options": ["Albuquerque", "Santa Fe", "Las Cruces", "Roswell"], "correct": 1, "fact": "Santa Fe is one of the oldest capitals.", "pool": "multiplayer" },
    { "q": "New Mexico became a state in:", "options": ["1890", "1907", "1912", "1920"], "correct": 2, "fact": "New Mexico became the 47th state in 1912.", "pool": "multiplayer" },
    { "q": "What is the capital of New York?", "options": ["New York City", "Buffalo", "Albany", "Rochester"], "correct": 2, "fact": "Albany has been the capital since 1797.", "pool": "multiplayer" },
    { "q": "Which landmark is located in New York?", "options": ["Mount Rushmore", "Statue of Liberty", "Golden Gate Bridge", "Space Needle"], "correct": 1, "fact": "The Statue of Liberty stands in New York Harbor.", "pool": "multiplayer" },
    { "q": "What is the capital of North Carolina?", "options": ["Charlotte", "Raleigh", "Durham", "Greensboro"], "correct": 1, "fact": "Raleigh is known as the City of Oaks.", "pool": "multiplayer" },
    { "q": "Which event occurred in North Carolina?", "options": ["First powered flight", "Gold Rush", "Louisiana Purchase", "Alamo"], "correct": 0, "fact": "The Wright brothers flew at Kitty Hawk.", "pool": "multiplayer" },
    { "q": "What is the capital of North Dakota?", "options": ["Fargo", "Bismarck", "Minot", "Grand Forks"], "correct": 1, "fact": "Bismarck sits on the Missouri River.", "pool": "multiplayer" },
    { "q": "North Dakota is a major producer of:", "options": ["Rice", "Wheat", "Cotton", "Oranges"], "correct": 1, "fact": "North Dakota is a leading wheat producer.", "pool": "multiplayer" },
    { "q": "What is the capital of Ohio?", "options": ["Cleveland", "Cincinnati", "Columbus", "Toledo"], "correct": 2, "fact": "Columbus is centrally located.", "pool": "multiplayer" },
    { "q": "Ohio is known as the birthplace of how many U.S. presidents?", "options": ["5", "6", "7", "8"], "correct": 2, "fact": "Seven U.S. presidents were born in Ohio.", "pool": "multiplayer" },
    { "q": "What is the capital of Oklahoma?", "options": ["Tulsa", "Norman", "Oklahoma City", "Lawton"], "correct": 2, "fact": "Oklahoma City is the largest city in the state.", "pool": "multiplayer" },
    { "q": "Oklahoma is known for:", "options": ["Oil production", "Gold mining", "Coal exports", "Timber"], "correct": 0, "fact": "Oil has played a major role in Oklahoma's history.", "pool": "multiplayer" },
    { "q": "What is the capital of Oregon?", "options": ["Portland", "Eugene", "Salem", "Bend"], "correct": 2, "fact": "Salem lies in the Willamette Valley.", "pool": "multiplayer" },
    { "q": "Oregon is known for having:", "options": ["Deserts", "Rainforests", "Volcanoes", "All of the above"], "correct": 3, "fact": "Oregon has diverse landscapes.", "pool": "multiplayer" },
    { "q": "What is the capital of Pennsylvania?", "options": ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"], "correct": 2, "fact": "Harrisburg sits along the Susquehanna River.", "pool": "multiplayer" },
    { "q": "Which document was signed in Pennsylvania?", "options": ["Bill of Rights", "Declaration of Independence", "Emancipation Proclamation", "Mayflower Compact"], "correct": 1, "fact": "The Declaration was signed in Philadelphia.", "pool": "multiplayer" },
    { "q": "What is the capital of Rhode Island?", "options": ["Newport", "Providence", "Warwick", "Pawtucket"], "correct": 1, "fact": "Providence is the state capital.", "pool": "multiplayer" },
    { "q": "Rhode Island is the:", "options": ["Largest state", "Smallest state by area", "Newest state", "Most rural state"], "correct": 1, "fact": "Rhode Island is the smallest state.", "pool": "multiplayer" },
    { "q": "What is the capital of South Carolina?", "options": ["Charleston", "Columbia", "Greenville", "Spartanburg"], "correct": 1, "fact": "Columbia is centrally located.", "pool": "multiplayer" },
    { "q": "Which crop was historically important to South Carolina?", "options": ["Rice", "Corn", "Wheat", "Potatoes"], "correct": 0, "fact": "Rice plantations shaped early South Carolina.", "pool": "multiplayer" },
    { "q": "What is the capital of South Dakota?", "options": ["Sioux Falls", "Rapid City", "Pierre", "Brookings"], "correct": 2, "fact": "Pierre is one of the least populous capitals.", "pool": "multiplayer" },
    { "q": "Which monument is located in South Dakota?", "options": ["Statue of Liberty", "Mount Rushmore", "Gateway Arch", "Liberty Bell"], "correct": 1, "fact": "Mount Rushmore features four U.S. presidents.", "pool": "multiplayer" },
    { "q": "What is the capital of Tennessee?", "options": ["Memphis", "Nashville", "Knoxville", "Chattanooga"], "correct": 1, "fact": "Nashville is known as Music City.", "pool": "multiplayer" },
    { "q": "Which national park is partly in Tennessee?", "options": ["Yosemite", "Great Smoky Mountains", "Yellowstone", "Zion"], "correct": 1, "fact": "Great Smoky Mountains National Park spans TN and NC.", "pool": "multiplayer" },
    { "q": "What is the capital of Texas?", "options": ["Dallas", "Houston", "Austin", "San Antonio"], "correct": 2, "fact": "Austin has been the capital since 1839.", "pool": "multiplayer" },
    { "q": "Texas was once an independent:", "options": ["Territory", "Kingdom", "Republic", "Colony"], "correct": 2, "fact": "Texas was the Republic of Texas from 1836-1845.", "pool": "multiplayer" },
    { "q": "What is the capital of Utah?", "options": ["Provo", "Ogden", "Salt Lake City", "St. George"], "correct": 2, "fact": "Salt Lake City was founded by Mormon pioneers.", "pool": "multiplayer" },
    { "q": "Utah has how many national parks?", "options": ["3", "4", "5", "6"], "correct": 2, "fact": "Utah is home to five national parks.", "pool": "multiplayer" },
    { "q": "What is the capital of Vermont?", "options": ["Burlington", "Montpelier", "Rutland", "Brattleboro"], "correct": 1, "fact": "Montpelier is the smallest state capital by population.", "pool": "multiplayer" },
    { "q": "Vermont is known for producing:", "options": ["Honey", "Maple syrup", "Cranberries", "Apples"], "correct": 1, "fact": "Vermont leads the U.S. in maple syrup production.", "pool": "multiplayer" },
    { "q": "What is the capital of Virginia?", "options": ["Norfolk", "Alexandria", "Richmond", "Charlottesville"], "correct": 2, "fact": "Richmond sits along the James River.", "pool": "multiplayer" },
    { "q": "Virginia is known as the birthplace of how many presidents?", "options": ["5", "6", "7", "8"], "correct": 3, "fact": "Eight U.S. presidents were born in Virginia.", "pool": "multiplayer" },
    { "q": "What is the capital of Washington?", "options": ["Seattle", "Tacoma", "Olympia", "Spokane"], "correct": 2, "fact": "Olympia is located in western Washington.", "pool": "multiplayer" },
    { "q": "Washington is the leading producer of:", "options": ["Apples", "Oranges", "Peaches", "Grapes"], "correct": 0, "fact": "Washington produces more apples than any other state.", "pool": "multiplayer" },
    { "q": "What is the capital of West Virginia?", "options": ["Huntington", "Morgantown", "Charleston", "Wheeling"], "correct": 2, "fact": "Charleston lies on the Kanawha River.", "pool": "multiplayer" },
    { "q": "West Virginia is known for its:", "options": ["Deserts", "Mountains", "Prairies", "Beaches"], "correct": 1, "fact": "West Virginia is part of the Appalachian Mountains.", "pool": "multiplayer" },
    { "q": "What is the capital of Wisconsin?", "options": ["Milwaukee", "Madison", "Green Bay", "Eau Claire"], "correct": 1, "fact": "Madison sits between two lakes.", "pool": "multiplayer" },
    { "q": "Wisconsin is famous for producing:", "options": ["Milk", "Cheese", "Butter", "Yogurt"], "correct": 1, "fact": "Wisconsin is known as America's Dairyland.", "pool": "multiplayer" },
    { "q": "What is the capital of Wyoming?", "options": ["Casper", "Cheyenne", "Laramie", "Jackson"], "correct": 1, "fact": "Cheyenne became the capital in 1869.", "pool": "multiplayer" },
    { "q": "Which national park is mostly located in Wyoming?", "options": ["Yosemite", "Zion", "Yellowstone", "Glacier"], "correct": 2, "fact": "Most of Yellowstone National Park is in Wyoming.", "pool": "multiplayer" },
    { "q": "How many states are in the United States?", "options": ["48", "49", "50", "51"], "correct": 2, "fact": "The U.S. has had 50 states since 1959.", "pool": "multiplayer" },
    { "q": "What is the longest river in the United States?", "options": ["Mississippi", "Missouri", "Colorado", "Rio Grande"], "correct": 1, "fact": "The Missouri River is the longest river in the U.S.", "pool": "multiplayer" },
    { "q": "Which state has the highest population?", "options": ["Texas", "Florida", "California", "New York"], "correct": 2, "fact": "California has the largest population.", "pool": "multiplayer" },
    { "q": "Which state was the last to join the Union?", "options": ["Alaska", "Arizona", "Hawaii", "New Mexico"], "correct": 2, "fact": "Hawaii became the 50th state in 1959.", "pool": "multiplayer" },
    { "q": "What is the smallest U.S. state by area?", "options": ["Delaware", "Rhode Island", "Connecticut", "New Jersey"], "correct": 1, "fact": "Rhode Island is the smallest U.S. state by area.", "pool": "multiplayer" },
    { "q": "Which state has the most national parks?", "options": ["California", "Alaska", "Utah", "Colorado"], "correct": 0, "fact": "California has more national parks than any other state.", "pool": "multiplayer" },
    { "q": "What is the tallest mountain in the United States?", "options": ["Mount Rainier", "Mount Whitney", "Denali", "Mount Elbert"], "correct": 2, "fact": "Denali in Alaska rises to 20,310 feet.", "pool": "multiplayer" },
    { "q": "Which two states do not observe Daylight Saving Time?", "options": ["Arizona and Hawaii", "Texas and Florida", "California and Oregon", "Alaska and Maine"], "correct": 0, "fact": "Arizona and Hawaii do not observe DST.", "pool": "multiplayer" },
    { "q": "What is the most spoken language in the U.S. after English?", "options": ["French", "Chinese", "Spanish", "German"], "correct": 2, "fact": "Spanish is the second most spoken language.", "pool": "multiplayer" },
    { "q": "What city is the capital of the United States?", "options": ["New York City", "Philadelphia", "Washington, D.C.", "Boston"], "correct": 2, "fact": "Washington, D.C. has been the U.S. capital since 1800.", "pool": "multiplayer" }
  ],
  "Logic & Applied Geography": [
    { "q": "If a country is landlocked, what must be true?", "options": ["It has no rivers", "It has no coastline", "It has no mountains", "It has no borders"], "correct": 1, "fact": "Landlocked countries do not have direct access to the ocean.", "pool": "multiplayer" },
    { "q": "Which country borders both France and Germany?", "options": ["Spain", "Switzerland", "Portugal", "Denmark"], "correct": 1, "fact": "Switzerland borders both France and Germany.", "pool": "multiplayer" },
    { "q": "If it is summer in Australia, what season is it in Canada?", "options": ["Summer", "Winter", "Spring", "Fall"], "correct": 1, "fact": "Australia and Canada are in opposite hemispheres.", "pool": "multiplayer" },
    { "q": "Which statement must be true about the Equator?", "options": ["It passes through Europe", "It divides Earth east and west", "It divides Earth north and south", "It marks time zones"], "correct": 2, "fact": "The Equator separates the Northern and Southern Hemispheres.", "pool": "multiplayer" },
    { "q": "Which country is NOT in Europe?", "options": ["Italy", "Norway", "Greece", "Egypt"], "correct": 3, "fact": "Egypt is located in North Africa.", "pool": "multiplayer" },
    { "q": "If a river flows south, where is its source relative to its mouth?", "options": ["East", "West", "North", "Below sea level"], "correct": 2, "fact": "A river flowing south starts north of where it ends.", "pool": "multiplayer" },
    { "q": "Which must be true of all continents?", "options": ["They have deserts", "They have countries", "They have mountains", "They have rivers"], "correct": 0, "fact": "All continents, including Antarctica, contain deserts.", "pool": "multiplayer" },
    { "q": "If a city is west of another city, which direction would you travel to get back?", "options": ["North", "South", "East", "West"], "correct": 2, "fact": "To return from west to east, you travel east.", "pool": "multiplayer" },
    { "q": "Which feature is most likely near tectonic plate boundaries?", "options": ["Deserts", "Volcanoes", "Grasslands", "Glaciers"], "correct": 1, "fact": "Volcanoes commonly form along tectonic plate boundaries.", "pool": "multiplayer" },
    { "q": "If a country is entirely in the Southern Hemisphere, which continent could it be on?", "options": ["Europe", "Africa", "South America", "Australia"], "correct": 3, "fact": "Australia lies entirely in the Southern Hemisphere.", "pool": "multiplayer" },
    { "q": "Which statement about longitude is true?", "options": ["It measures north and south", "It measures east and west", "It starts at the Equator", "It measures elevation"], "correct": 1, "fact": "Longitude measures position east or west of the Prime Meridian.", "pool": "multiplayer" },
    { "q": "If two cities share the same latitude, what do they share?", "options": ["Same time zone", "Same climate", "Same north-south position", "Same elevation"], "correct": 2, "fact": "Latitude measures distance north or south of the Equator.", "pool": "multiplayer" },
    { "q": "Which ocean would you cross traveling from Africa to South America?", "options": ["Indian", "Pacific", "Atlantic", "Arctic"], "correct": 2, "fact": "The Atlantic Ocean lies between Africa and South America.", "pool": "multiplayer" },
    { "q": "Which country could logically have the most time zones?", "options": ["Small island nation", "Large country with overseas territories", "Landlocked country", "Equatorial country"], "correct": 1, "fact": "Large countries with overseas territories span multiple time zones.", "pool": "multiplayer" },
    { "q": "If it is midnight at the Prime Meridian, what time is it 15° east?", "options": ["Midnight", "1 a.m.", "1 p.m.", "Noon"], "correct": 1, "fact": "Every 15° of longitude equals one hour.", "pool": "multiplayer" },
    { "q": "Which location would have the coldest average temperatures?", "options": ["Equator", "Tropics", "Mid-latitudes", "Polar regions"], "correct": 3, "fact": "Polar regions receive the least direct sunlight.", "pool": "multiplayer" },
    { "q": "If a country borders only landlocked countries, it must be:", "options": ["An island", "Landlocked", "Coastal", "Mountainous"], "correct": 1, "fact": "It cannot reach the sea through neighbors.", "pool": "multiplayer" },
    { "q": "Which feature most affects climate?", "options": ["Latitude", "Longitude", "Time zone", "Map scale"], "correct": 0, "fact": "Latitude strongly influences temperature and seasons.", "pool": "multiplayer" },
    { "q": "Which continent has land in all four hemispheres?", "options": ["Asia", "Europe", "Africa", "South America"], "correct": 2, "fact": "Africa crosses both the Equator and Prime Meridian.", "pool": "multiplayer" },
    { "q": "Which region would most likely experience midnight sun?", "options": ["Equator", "Tropics", "Arctic Circle", "Mid-latitudes"], "correct": 2, "fact": "Regions within the Arctic Circle experience continuous daylight in summer.", "pool": "multiplayer" },
    { "q": "Which must be true of all rivers?", "options": ["They flow south", "They start in mountains", "They flow downhill", "They end in oceans"], "correct": 2, "fact": "Rivers always flow from higher to lower elevation.", "pool": "multiplayer" },
    { "q": "If two cities are in the same time zone but far apart north-south, what may differ?", "options": ["Longitude", "Latitude", "Clock time", "Date"], "correct": 1, "fact": "Latitude can differ even if time zones match.", "pool": "multiplayer" },
    { "q": "Which is most likely to have a Mediterranean climate?", "options": ["High latitude interior", "West coast mid-latitudes", "Equatorial region", "Polar coast"], "correct": 1, "fact": "Mediterranean climates occur on west coasts in mid-latitudes.", "pool": "multiplayer" },
    { "q": "Which direction does longitude increase when moving east?", "options": ["Positive", "Negative", "Vertical", "Southward"], "correct": 0, "fact": "Longitude values increase moving east from the Prime Meridian.", "pool": "multiplayer" },
    { "q": "Which location would likely have the shortest daylight in winter?", "options": ["Equator", "Tropics", "Mid-latitudes", "Polar regions"], "correct": 3, "fact": "Polar regions experience extreme daylight variation.", "pool": "multiplayer" },
    { "q": "Which continent pattern matches largest to smallest by area?", "options": ["Asia, Africa, North America", "Africa, Asia, Europe", "North America, Asia, Africa", "Asia, Europe, Africa"], "correct": 0, "fact": "Asia is largest, followed by Africa, then North America.", "pool": "multiplayer" },
    { "q": "Countries near the Equator often share which pattern?", "options": ["Cold winters", "High rainfall", "Snowfall", "Low humidity"], "correct": 1, "fact": "Equatorial regions receive frequent rainfall.", "pool": "multiplayer" },
    { "q": "Which pattern best describes river flow?", "options": ["Ocean to mountains", "Flat to steep", "High to low elevation", "Random paths"], "correct": 2, "fact": "Rivers always flow downhill.", "pool": "multiplayer" },
    { "q": "Which climate pattern is common near the poles?", "options": ["Warm and wet", "Cold and dry", "Hot and humid", "Seasonal monsoons"], "correct": 1, "fact": "Polar regions are cold with low precipitation.", "pool": "multiplayer" },
    { "q": "Which pattern describes population distribution?", "options": ["Even everywhere", "Dense near coasts", "Dense near deserts", "Dense at poles"], "correct": 1, "fact": "Many populations concentrate near coasts.", "pool": "multiplayer" },
    { "q": "If you fly from New York to London, which ocean do you cross?", "options": ["Pacific", "Indian", "Atlantic", "Arctic"], "correct": 2, "fact": "The Atlantic Ocean lies between North America and Europe.", "pool": "multiplayer" }
  ]
};

export default questions;
