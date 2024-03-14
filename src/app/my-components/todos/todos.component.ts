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
  localItems: string | null;

  constructor(){
    
    this.localItems = localStorage.getItem("todos");
    if(this.localItems === null){ 
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItems);
    }
  }

  deleteTodo(todo: Todos){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  todoAdd(todo: Todos){
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleCheckBox(todo: Todos){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
