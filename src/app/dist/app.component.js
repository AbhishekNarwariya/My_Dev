"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var table_1 = require("@angular/material/table");
// import { user } from './popup/popup.component';
var user_component_1 = require("./user/user.component");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataservice, dialog) {
        this.dataservice = dataservice;
        this.dialog = dialog;
        this.title = 'angular_code_daily';
        this.users = [];
        this.displayedColumns = ['name', 'email', 'username', 'role'];
        this.dataSource = new table_1.MatTableDataSource();
        this.isEditing = false;
        this.editingUser = null;
        this.searchTerm = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataservice.getData().subscribe(function (res) {
            _this.users = Array.isArray(res) ? res : res.users;
            _this.dataSource.data = _this.users;
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    AppComponent.prototype.addUser = function (user) {
        this.users = __spreadArrays(this.users, [user]);
        this.dataSource.data = this.users;
    };
    AppComponent.prototype.openAddUserPopup = function () {
        var _this = this;
        var dialogRef = this.dialog.open(user_component_1.UserComponent, {
            width: '400px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.users = __spreadArrays(_this.users, [result]);
                _this.dataSource.data = _this.users;
            }
        });
    };
    AppComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.dataservice.deleteUser(user.id).subscribe(function () {
            _this.users = _this.users.filter(function (u) { return u.id !== user.id; });
            _this.dataSource.data = _this.users;
        });
    };
    AppComponent.prototype.editUser = function (user) {
        this.editingUser = __assign({}, user);
        this.isEditing = true;
        this.openEditUserPopup(user);
    };
    AppComponent.prototype.openEditUserPopup = function (user) {
        var _this = this;
        var dialogRef = this.dialog.open(user_component_1.UserComponent, {
            width: '400px',
            data: { user: user }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.users = _this.users.map(function (u) { return u.id === result.id ? result : u; });
                _this.dataSource.data = _this.users;
            }
            _this.isEditing = false;
            _this.editingUser = null;
        });
    };
    AppComponent.prototype.onSearchChange = function (term) {
        var _this = this;
        // clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(function () {
            var payload = { search: term };
            _this.dataservice.getData().subscribe(function (res) {
                var users = Array.isArray(res) ? res : (res.users || []);
                if (!payload.search || payload.search.trim() === '') {
                    _this.users = users;
                }
                else {
                    var lower_1 = payload.search.toLowerCase();
                    _this.users = users.filter(function (u) {
                        return (u.name && u.name.toLowerCase().includes(lower_1)) ||
                            (u.email && u.email.toLowerCase().includes(lower_1)) ||
                            (u.username && u.username.toLowerCase().includes(lower_1)) ||
                            (u.role && u.role.toLowerCase().includes(lower_1));
                    });
                }
                _this.dataSource.data = _this.users;
                if (_this.paginator) {
                    _this.dataSource.paginator = _this.paginator;
                }
            });
        }, 300);
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], AppComponent.prototype, "paginator");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            standalone: false,
            styleUrl: './app.component.css'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
