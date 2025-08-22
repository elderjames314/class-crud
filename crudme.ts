interface IPerson {
  id: number;
  name: string;
  email?: string;
}

class Person {
  persons: IPerson[] = [];
  id: number = 0;

  constructor() {}

  add(name: string, email): IPerson[] {
    this.id++;
    this.persons.push({ id: this.id, name: name, email: email });
    return this.persons;
  }

  read(id: number): IPerson | undefined {
    return this.persons.find((person) => person.id === id);
  }
}
