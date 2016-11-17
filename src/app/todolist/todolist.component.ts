import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todolist',
  templateUrl: 'todolist.component.html',
  styleUrls: ['todolist.component.css']
})
export class TodolistComponent{

  constructor() {}

  newItem = 'test';
  store: TodoStore;

  constructor(store: TodoStore) {
    this.store = store;
  }

  addItem() {
    this.store.dispatch(addItem(this.newItem));
    this.newItem = '';
  }

  removeItem(itemId: string) {
    this.store.dispatch(removeItem(itemId));
  }

  itemUpdated(event: ItemUpdatedEvent) {
    if (event.text !== undefined) {
      if (event.text === '') {
        this.store.dispatch(removeItem(event.itemId));
      } else {
        this.store.dispatch(updateItemText(event.itemId, event.text));
      }
    }
    if (event.completed !== undefined) {
      this.store.dispatch(updateItemCompletion(event.itemId, event.completed));
    }
  }

}
