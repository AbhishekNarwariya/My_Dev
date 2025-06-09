"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserFormComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var UserFormComponent = /** @class */ (function () {
    function UserFormComponent() {
        this.users = [];
    }
    __decorate([
        core_1.Input()
    ], UserFormComponent.prototype, "users");
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'app-user-form',
            standalone: true,
            imports: [common_1.CommonModule],
            template: "\n    <table border=\"1\" style=\"width: 100%; margin-top: 20px; border-collapse: collapse;\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Username</th>\n          <th>Role</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of users\">\n          <td>{{ user.name }}</td>\n          <td>{{ user.email }}</td>\n          <td>{{ user.username }}</td>\n          <td>{{ user.role }}</td>\n        </tr>\n      </tbody>\n    </table>\n  "
        })
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
