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
  }
]

let Wizards = [
  {
    name: "Minerva McGonagall",
    house: 0,
    wand: 0,
    totalChocolateFrogCards: 4,
    friends: [],
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
