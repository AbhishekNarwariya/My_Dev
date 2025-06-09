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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var paginator_1 = require("@angular/material/paginator");
var UserComponent = /** @class */ (function () {
    function UserComponent(fb, dataService, dialogRef, data) {
        this.fb = fb;
        this.dataService = dataService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.users = [];
        this.userForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            username: ['', forms_1.Validators.required],
            role: ['', forms_1.Validators.required]
        });
        if (data && data.user) {
            this.userForm.patchValue(data.user);
        }
        this.loadUsers();
    }
    UserComponent.prototype.ngAfterViewInit = function () {
        if (this.dataSource) {
            this.dataSource.paginator = this.paginator;
        }
    };
    UserComponent.prototype.loadUsers = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (res) {
            _this.users = Array.isArray(res) ? res : res.users;
            _this.dataSource = new window.MatTableDataSource(_this.users);
            if (_this.paginator) {
                _this.dataSource.paginator = _this.paginator;
            }
        });
    };
    UserComponent.prototype.addUser = function () {
        var _this = this;
        if (this.userForm.valid) {
            var newUser = __assign({}, this.userForm.value);
            if (this.data && this.data.user) {
                // Edit mode
                newUser.id = this.data.user.id;
                this.dataService.updateUser(newUser).subscribe(function (user) {
                    var _a;
                    (_a = _this.dialogRef) === null || _a === void 0 ? void 0 : _a.close(user);
                    _this.userForm.reset();
                    _this.loadUsers();
                });
            }
            else {
                // Add mode
                this.dataService.addUser(newUser).subscribe(function (user) {
                    var _a;
                    (_a = _this.dialogRef) === null || _a === void 0 ? void 0 : _a.close(user);
                    _this.userForm.reset();
                    _this.loadUsers();
                });
            }
        }
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], UserComponent.prototype, "paginator");
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            standalone: false,
            templateUrl: './user.component.html',
            styleUrl: './user.component.css'
        }),
        __param(2, core_1.Optional()),
        __param(3, core_1.Optional()), __param(3, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
