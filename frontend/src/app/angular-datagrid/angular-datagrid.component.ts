import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AngularDatagridDataSource } from './angular-datagrid-datasource';
import { TodoService } from '../services/todo.service';
import ToDo from '../models/todo.model';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-angular-datagrid',
  templateUrl: './angular-datagrid.component.html',
  styleUrls: ['./angular-datagrid.component.scss']
})
export class AngularDatagridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AngularDatagridDataSource;
  editTodos: ToDo[] = [];
  displayedColumns = ['title', 'description', 'date', 'status'];
  message:string;

  constructor(
    private todoService: TodoService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => 
      {
        this.message = message;
        console.log("datagrid recieved message:", message);
      })

    this.todoService.getToDos().subscribe(todos => 
      {
        this.dataSource = new AngularDatagridDataSource(this.paginator, this.sort, todos);
        console.log("ToDo's Retrieved: ", todos)
      })
  } 
  
  editTodo(todo: ToDo) {
    console.log(todo)
    if(this.dataSource.data.includes(todo)){
      if(!this.editTodos.includes(todo)){
        this.editTodos.push(todo)
      }else{
        this.editTodos.splice(this.editTodos.indexOf(todo), 1)
        this.todoService.editTodo(todo).subscribe(res => {
          console.log('Update Succesful')
        }, err => {
          this.editTodo(todo)
          console.error('Update Unsuccesful')
        })
      }
    }
  }

  doneTodo(todo:ToDo){
    todo.status = 'Done'
    this.todoService.editTodo(todo).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTodo(todo)
      console.error('Update Unsuccesful')
    })
  }

  submitTodo(event, todo:ToDo){
    if(event.keyCode ==13){
      this.editTodo(todo)
    }
  }

  deleteTodo(todo: ToDo) {
    this.todoService.deleteTodo(todo._id).subscribe(res => {
      this.dataSource.data.splice(this.dataSource.data.indexOf(todo), 1);
    })
  }

  title = 'app';
}