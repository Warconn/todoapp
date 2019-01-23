import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AngularDatagridDataSource } from './angular-datagrid-datasource';
import { TodoService } from '../services/todo.service';
import ToDo from '../models/todo.model';

@Component({
  selector: 'app-angular-datagrid',
  templateUrl: './angular-datagrid.component.html',
  styleUrls: ['./angular-datagrid.component.scss']
})
export class AngularDatagridComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AngularDatagridDataSource;

  constructor(
    private todoService: TodoService
  ) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['title', 'description', 'status'];

  ngOnInit(): void {
    this.todoService.getToDos()
      .subscribe(todos => {
        this.dataSource = new AngularDatagridDataSource(this.paginator, this.sort, todos);
        console.log(todos)
      })
  } 
  
  editTodos: ToDo[] = [];

  receiveMessage($event) {
    this.dataSource.data.push($event)
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