import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services/todo.service';
import ToDo from '../models/todo.model';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})

export class TodoEntryComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  public newTodo: ToDo = new ToDo()


  ngOnInit() {
  }

  create() {
    this.todoService.createTodo(this.newTodo)
      .subscribe((res) => {
        this.messageEvent.emit(res.data)
        this.newTodo = new ToDo()
      })
  }

  @Output() messageEvent = new EventEmitter<string>();

}
