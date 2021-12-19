"use strict";

class UserStorage {
    static #users = {
        id: ["Jugwang", "Park", "JJ"],
        password: ["1234", "1234", "1234"],
        name: ["Jugwang", "Park", "JJ"],
        email: ["J@gmail.com", "K@gmai.com", "U@gmail.com"]
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
        return userInfo;
    }

    static save(userinfo) {
        const users = this.#users;
        users.id.push(userinfo.id);
        users.name.push(userinfo.name);
        users.password.push(userinfo.password);
        users.email.push(userinfo.email);
        console.log(users);
    }
}
module.exports = UserStorage;