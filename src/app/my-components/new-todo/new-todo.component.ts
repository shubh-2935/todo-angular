import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Todos } from '../../Todos';

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {

  @Output() addTodo: EventEmitter<Todos> = new EventEmitter();

  title: string | undefined;
  description: string | undefined;

  onSubmit(){
    const todo = {
      title: this.title,
      description: this.description,
      active: true
    }
    this.addTodo.emit(todo);
  }
}
