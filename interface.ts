
interface User {
  id: number;
  name: string;
  email: string;
}

class UserService {
  private users: User[] = [];

  
  addUser(user: User): void {
    this.users.push(user);
    console.log("User added:", user);
  }

  
  getUsers(): User[] {
    return this.users;
  }

  
  updateUser(id: number, newData: Partial<User>): void {
    const user = this.users.find(u => u.id === id);
    if (user) {
      Object.assign(user, newData);
      console.log("User updated:", user);
    } else {
      console.log("User not found!");
    }
  }

  
  deleteUser(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
    console.log(`User with id ${id} deleted`);
  }
}


const userService = new UserService();
userService.addUser({ id: 1, name: "Alice", email: "alice@mail.com" });
userService.addUser({ id: 2, name: "Bob", email: "bob@mail.com" });

console.log(userService.getUsers());

userService.updateUser(1, { name: "Alicia" });
userService.deleteUser(2);

console.log(userService.getUsers());
