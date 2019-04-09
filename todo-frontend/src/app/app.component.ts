import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-frontend';
  todoArray=[]

  addTodo(value){
    this.todoArray.push(value)
    console.log(value + " was added to array")
    console.log(this.todoArray)
  }

}
