"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TodolistComponent = (function () {
    function TodolistComponent() {
        this.newItem = 'test';
    }
    TodolistComponent.prototype.addItem = function () {
        this.store.dispatch(addItem(this.newItem));
        this.newItem = '';
    };
    TodolistComponent.prototype.removeItem = function (itemId) {
        this.store.dispatch(removeItem(itemId));
    };
    TodolistComponent.prototype.itemUpdated = function (event) {
        if (event.text !== undefined) {
            if (event.text === '') {
                this.store.dispatch(removeItem(event.itemId));
            }
            else {
                this.store.dispatch(updateItemText(event.itemId, event.text));
            }
        }
        if (event.completed !== undefined) {
            this.store.dispatch(updateItemCompletion(event.itemId, event.completed));
        }
    };
    TodolistComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todolist',
            templateUrl: 'todolist.component.html',
            styleUrls: ['todolist.component.css']
        })
    ], TodolistComponent);
    return TodolistComponent;
}());
exports.TodolistComponent = TodolistComponent;
//# sourceMappingURL=todolist.component.js.map