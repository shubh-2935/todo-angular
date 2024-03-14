import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../Todos';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo : Todos | undefined;
  @Output() todoDelete : EventEmitter<Todos> = new EventEmitter();
  @Output() todoCheckBox : EventEmitter<Todos> = new EventEmitter();

  onClick(){
    this.todoDelete.emit(this.todo);
  }

  onCheckboxClick(){
    this.todoCheckBox.emit(this.todo);
  }
}
