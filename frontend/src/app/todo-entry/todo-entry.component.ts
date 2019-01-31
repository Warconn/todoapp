import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services/todo.service';
import ToDo from '../models/todo.model';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.scss']
})

export class TodoEntryComponent implements OnInit {
  
  message:string;
  public newTodo: ToDo = new ToDo()

  constructor(
    private todoService: TodoService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message)
  }

  create() {
    this.todoService.createTodo(this.newTodo).subscribe((res) => 
    { 
      console.log("Message being sent:", res.data)
      this.newTodo = new ToDo()
    })

    this.dataService.changeMessage("Hello from Sibling")
  }
}
