"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TodoitemComponent = (function () {
    function TodoitemComponent() {
        this.editMode = false;
        this.done = new EventEmitter();
        this.itemUpdated = new EventEmitter();
    }
    TodoitemComponent.prototype.doneClicked = function () {
        this.done.emit(this.item.uuid);
    };
    TodoitemComponent.prototype.toggle = function () {
        this.itemUpdated.emit({
            itemId: this.item.uuid,
            completed: !this.item.completed
        });
    };
    TodoitemComponent.prototype.enterEditMode = function (element) {
        this.editMode = true;
        if (this.editMode) {
            setTimeout(function () { element.focus(); }, 0);
        }
    };
    TodoitemComponent.prototype.cancelEdit = function (element) {
        this.editMode = false;
        element.value = this.item.text;
    };
    TodoitemComponent.prototype.commitEdit = function (updatedText) {
        this.editMode = false;
        this.itemUpdated.emit({
            itemId: this.item.uuid,
            text: updatedText
        });
    };
    __decorate([
        Input()
    ], TodoitemComponent.prototype, "item");
    __decorate([
        Output()
    ], TodoitemComponent.prototype, "done");
    __decorate([
        Output()
    ], TodoitemComponent.prototype, "itemUpdated");
    TodoitemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-todoitem',
            templateUrl: 'todoitem.component.html',
            styleUrls: ['todoitem.component.css']
        })
    ], TodoitemComponent);
    return TodoitemComponent;
}());
exports.TodoitemComponent = TodoitemComponent;
//# sourceMappingURL=todoitem.component.js.map