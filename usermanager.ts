interface User {
  id: number;
  name: string;
  email: string;
}

class UserManager {
  private users: User[] = [];
  private nextId: number = 1;

  createUser(name: string, email: string): User {
    const newUser: User = { id: this.nextId++, name, email };
    this.users.push(newUser);
    return newUser;
  }

  readUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  updateUser(id: number, updatedData: Partial<User>): User | undefined {
    const user = this.readUser(id);
    if (user) {
      Object.assign(user, updatedData);
      return user;
    }
    return undefined;
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }

  listUsers(): User[] {
    return this.users;
  }
}

// Example usage:
const manager = new UserManager();
const samuel = manager.createUser("Samuel", "samuel@example.com");
manager.updateUser(samuel.id, { email: "newemail@example.com" });
console.log(manager.listUsers());
manager.deleteUser(samuel.id);