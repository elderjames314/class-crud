// CRUD system
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
        this.nextId = 1;
    }
    // Create
    UserManager.prototype.createUser = function (name, email) {
        var newUser = { id: this.nextId++, name: name, email: email };
        this.users.push(newUser);
        return newUser;
    };
    // Read
    UserManager.prototype.getUser = function (id) {
        return this.users.find(function (user) { return user.id === id; });
    };
    UserManager.prototype.getAllUsers = function () {
        return this.users;
    };
    // Update
    UserManager.prototype.updateUser = function (id, updatedData) {
        var user = this.getUser(id);
        if (user) {
            Object.assign(user, updatedData);
            return user;
        }
        return undefined;
    };
    // Delete
    UserManager.prototype.deleteUser = function (id) {
        var index = this.users.findIndex(function (user) { return user.id === id; });
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    };
    return UserManager;
}());

// Example usage:
var manager = new UserManager();
var u1 = manager.createUser("Samuel", "samuel@gmail.com");
var u2 = manager.createUser("Bob", "bob@hmail.com");
console.log("All Users:", manager.getAllUsers());
manager.updateUser(u1.id, { name: "Samuel Smith" });
console.log("Updated Users:", manager.getAllUsers());
manager.deleteUser(u2.id);
console.log("After Delete:", manager.getAllUsers());
