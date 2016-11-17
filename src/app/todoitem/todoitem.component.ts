import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-todoitem',
  templateUrl: 'todoitem.component.html',
  styleUrls: ['todoitem.component.css']
})
export class TodoitemComponent{

  editMode = false;

  @Input()
  item: TodoItemModel;

  @Output()
  done = new EventEmitter<string>();

  @Output()
  itemUpdated = new EventEmitter<ItemUpdatedEvent>();

  doneClicked() {
    this.done.emit(this.item.uuid);
  }

  toggle() {
    this.itemUpdated.emit({
      itemId: this.item.uuid,
      completed: !this.item.completed
    });
  }

  enterEditMode(element: HTMLInputElement) {
    this.editMode = true;
    if (this.editMode) {
      setTimeout(() => { element.focus(); }, 0);
    }
  }

  cancelEdit(element: HTMLInputElement) {
    this.editMode = false;
    element.value = this.item.text;
  }

  commitEdit(updatedText: string) {
    this.editMode = false;
    this.itemUpdated.emit({
      itemId: this.item.uuid,
      text: updatedText
    });
  }

}
