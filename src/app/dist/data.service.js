"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataService = void 0;
var core_1 = require("@angular/core");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getData = function () {
        return this.http.get('http://localhost:3000/users');
    };
    DataService.prototype.addUser = function (user) {
        return this.http.post('http://localhost:3000/users', user);
    };
    DataService.prototype.deleteUser = function (id) {
        return this.http["delete"]("http://localhost:3000/users/" + id);
    };
    DataService.prototype.updateUser = function (user) {
        return this.http.put("http://localhost:3000/users/" + user.id, user);
    };
    DataService.prototype.searchUsers = function (term) {
        if (!term || term.trim() === '') {
            return this.getData();
        }
        // Filter by all fields using json-server's q param
        return this.http.get("http://localhost:3000/users?q=" + encodeURIComponent(term));
    };
    DataService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
