// Task 1

const clients = [
  {
    name: "Simon",
    age: 24,
    order: "Honey",
  },
  {
    name: "Roma",
    age: 31,
    order: "Meat",
  },
  {
    name: "Georgey",
    age: 28,
    order: "Bread",
  },
];

const clientNames = clients.map(client => client.name);

console.log(clientNames);

// Task 2

const users = [
  {
    userName: "Taras",
    hairColor: "blond",
    eyeColor: "blue",
  },
  {
    userName: "Oleg",
    hairColor: "brown",
    eyeColor: "green",
  },
  {
    userName: "Sergey",
    hairColor: "black",
    eyeColor: "blue",
  },
];

const eyeColorOfUsers = users.filter(user => user.eyeColor === "blue");

console.log(eyeColorOfUsers);

// Task 3

const people = [
  {
    genderName: "Pasha",
    gender: "man",
  },
  {
    genderName: "Vlad",
    gender: "man",
  },
  {
    genderName: "Kristina",
    gender: "woman",
  },
  {
    genderName: "Masha",
    gender: "woman",
  },
];

const genders = people.filter(somePeople => somePeople.gender === "woman");

console.log(genders);

// Task 4

const discordUsers = [
  {
    discordName: "Assaguardo",
    isActive: false,
  },
  {
    discordName: "Fiasko",
    isActive: true,
  },
  {
    discordName: "Ben",
    isActive: false,
  },
];

let notActiveDiscordUsers = discordUsers.filter(notActiveUser => notActiveUser.isActive === false);

console.log(notActiveDiscordUsers);

// Task 5

const emailUsers = [
  {
    emailName: "David",
    email: "david123@email.com",
  },
  {
    emailName: "Fedir",
    email: "fedirgorishok@email.com",
  },
  {
    emailName: "Vika",
    email: "vika0990@email.com",  
  },
];

let emailUser = emailUsers.find(userWithEmail => userWithEmail.email === "fedirgorishok@email.com");

console.log(emailUser);

// Task 6

const min = 18;
const max = 60;

const ageUsers = [
  {
    ageName: "Vasya",
    age: 87,
  },
  {
    ageName: "Genadiy",
    age: 53,
  },
  {
    ageName: "Tetiana",
    age: 26,
  },
  {
    ageName: "Roma",
    age: 6,
  },
  {
    ageName: "Petro",
    age: 40
  },
];

const agesOfUsers = ageUsers.filter(necessaryAge => necessaryAge.age > min && necessaryAge.age < max); 

console.log(agesOfUsers)
