interface User {
  name: string;
  age: number;
  occupation?: string;
}

const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

function logPerson(user: User) {
  console.log(` - ${user.name}, ${user.age}`);
}

console.log("Users:");
users.forEach(logPerson);