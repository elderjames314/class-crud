// User interface
interface User {
    id: number;
    name: string;
    email: string;
}

// CRUD system
class UserManager {
    private users: User[] = [];
    private nextId: number = 1;

    // Create
    createUser(name: string, email: string): User {
        const newUser: User = { id: this.nextId++, name, email };
        this.users.push(newUser);
        return newUser;
    }

    // Read
    getUser(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getAllUsers(): User[] {
        return this.users;
    }

    // Update
    updateUser(id: number, updatedData: Partial<User>): User | undefined {
        const user = this.getUser(id);
        if (user) {
            Object.assign(user, updatedData);
            return user;
        }
        return undefined;
    }

    // Delete
    deleteUser(id: number): boolean {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}

// Example usage:
const manager = new UserManager();
const u1 = manager.createUser("Alice", "alice@example.com");
const u2 = manager.createUser("Bob", "bob@example.com");

console.log("All Users:", manager.getAllUsers());

manager.updateUser(u1.id, { name: "Alice Smith" });
console.log("Updated Users:", manager.getAllUsers());

manager.deleteUser(u2.id);
console.log("After Delete:", manager.getAllUsers());