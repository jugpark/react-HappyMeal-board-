"use strict";

class UserStorage {
    static #users = {
        id: ["A", "B", "C"],
        password: ["1234", "1234", "1234"],
        name: ["A", "B", "C"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if( users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers; 
        }, {});
        return newUsers;
    }
    
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);  // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
    }
}
module.exports = UserStorage;