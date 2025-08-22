// CRUD system
var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    // Create
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
        console.log("User added:", user);
    };
    // Read
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    // Update
    UserService.prototype.updateUser = function (id, newData) {
        var user = this.users.find(function (u) { return u.id === id; });
        if (user) {
            Object.assign(user, newData);
            console.log("User updated:", user);
        }
        else {
            console.log("User not found!");
        }
    };
    // Delete
    UserService.prototype.deleteUser = function (id) {
        this.users = this.users.filter(function (u) { return u.id !== id; });
        console.log("User with id ".concat(id, " deleted"));
    };
    return UserService;
}());
// Example usage
var userService = new UserService();
userService.addUser({ id: 1, name: "Alice", email: "alice@mail.com" });
userService.addUser({ id: 2, name: "Bob", email: "bob@mail.com" });
console.log(userService.getUsers());
userService.updateUser(1, { name: "Alicia" });
userService.deleteUser(2);
console.log(userService.getUsers());
