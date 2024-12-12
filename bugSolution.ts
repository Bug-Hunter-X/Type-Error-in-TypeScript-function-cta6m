function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return persons.map(person => "Hello, " + person).join("\n");
}

let user = ["Jane Doe", "John Smith"];
console.log(greeter(user[0]));
console.log(greeterArray(user));