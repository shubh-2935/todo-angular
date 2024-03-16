import { Component } from '@angular/core';
import { Todos } from '../../Todos';
import { NgFor, NgIf } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NewTodoComponent } from "../new-todo/new-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [NgFor, TodoItemComponent, NewTodoComponent, NgIf]
})
export class TodosComponent {
  todos: Todos[];

  constructor(){
    this.todos = [{
      title: 'Example Todo',
      description: 'Description of Example Todo',
      active: true,
    },
    {
      title: 'Delete Todo',
      description: 'Delete this example Todo and create your own',
      active: true
    }]
  }

  deleteTodo(todo: Todos){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  todoAdd(todo: Todos){
    this.todos.push(todo);
  }

  toggleCheckBox(todo: Todos){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
  }

}
