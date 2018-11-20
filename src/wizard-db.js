let Houses = [
  {
    name: "Gryffindor",
    animal: "Lion",
    head: 0,
    points: 72,
    verse:
`You might belong in Gryffindor,
Where dwell the brave at heart,
Their daring, nerve, and chivalry
Set Gryffindors apart`
  },
  {
    name: "Hufflepuff",
    animal: "Badger",
    head: 1,
    points: 55,
    verse:
`You might belong in Hufflepuff,
Where they are just and loyal,
Those patient Hufflepuffs are true,
And unafraid of toil`
  },
  {
    name: "Ravenclaw",
    animal: "Eagle",
    head: 2,
    points: 88,
    verse:
`Or yet in wise old Ravenclaw,
If you've a ready mind,
Where those of wit and learning,
Will always find their kind`
  },
  {
    name: "Slytherin",
    animal: "Serpent",
    head: 3,
    points: 120,
    verse:
`Or perhaps in Slytherin,
You'll make your real friends,
Those cunning folk use any means,
To achieve their ends`
  }
]

let Wands = [
  {
    wood: "Fir",
    core: "Dragon heartstring",
    length: 9.5
  },
  {
    wood: "Cedar",
    core: "Dragon heartstring",
    length: 10.25
  },
  {
    wood: "Holly",
    core: "Phoenix feather",
    length: 11
  },
  {
    wood: "Vine",
    core: "Dragon heartstring",
    length: 10.75
  },
  {
    wood: "Willow",
    core: "Unicorn tail hair",
    length: 14
  },
  {
    wood: "Elder",
    core: "Thestral tail hair",
    length: 15
  },
  {
    wood: "Hawthorn",
    core: "Unicorn tail hair",
    length: 10
  },
  {
    wood: "Yew",
    core: "Phoenix feather",
    length: 13.5
  }
]

let Wizards = [
  {
    name: "Minerva McGonagall",
    house: 0,
    wand: 0,
    totalChocolateFrogCards: 4,
    friends: [7],
  },
  {
    name: "Pomona Sprout",
    house: 1,
    wand: null,
    totalChocolateFrogCards: 22,
    friends: [],
  },
  {
    name: "Filius Flitwick",
    house: 2,
    wand: null,
    totalChocolateFrogCards: 74,
    friends: [],
  },
  {
    name: "Horace Slughorn",
    house: 3,
    wand: 1,
    totalChocolateFrogCards: 1,
    friends: [],
  },
  {
    name: "Harry Potter",
    house: 0,
    wand: 2,
    totalChocolateFrogCards: 54,
    friends: [5, 6, 7],
  },
  {
    name: "Hermione Granger",
    house: 0,
    wand: 3,
    totalChocolateFrogCards: 2,
    friends: [4, 6],
  },
  {
    name: "Ronald Weasley",
    house: 0,
    wand: 4,
    totalChocolateFrogCards: 96,
    friends: [4, 5],
  },
  {
    name: "Albus Dumbledore",
    house: 0,
    wand: 5,
    totalChocolateFrogCards: 101,
    friends: [0, 4],
  },
  {
    name: "Draco Malfoy",
    house: 3,
    wand: 6,
    totalChocolateFrogCards: 39,
    friends: [9, 10, 11],
  },
  {
    name: "Vincent Crabbe",
    house: 3,
    wand: null,
    totalChocolateFrogCards: 27,
    friends: [8, 10],
  },
  {
    name: "Gregory Goyle",
    house: 3,
    wand: null,
    totalChocolateFrogCards: 43,
    friends: [8, 9],
  },
  {
    name: "Tom Riddle",
    house: 3,
    wand: 7,
    totalChocolateFrogCards: 0,
    friends: [8],
  }
]

const houseByName = (name) =>
  Houses.find((house) => house.name == name)

const wizardByName = (name) =>
  Wizards.find((wizard) => wizard.name == name)

module.exports = {
  Houses,
  Wands,
  Wizards,

  houseByName,
  wizardByName,
}
