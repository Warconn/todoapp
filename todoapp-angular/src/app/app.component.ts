import { TodoService } from './services/todo.service';
import ToDo from './models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    //Private todoservice will be injected into the component by Angular Dependency Injector
    private todoService: TodoService
  ) { }

  //Declaring the new todo Object and initilizing it
  public newTodo: ToDo = new ToDo()

  //An Empty list for the visible todo list
  todosList: ToDo[];


  ngOnInit(): void {

    //At component initialization the 
    this.todoService.getToDos()
      .subscribe(todos => {
        //assign the todolist property to the proper http response
        this.todosList = todos
        console.log(todos)
      })
  }
}