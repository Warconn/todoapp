import { Component } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';

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

  /*delete item*/
  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
     if(todo== this.todoArray[i]){
      this.todoArray.splice(i,1)
     }
    }
   }

   // submit Form
   todoSubmit(value:any){
      if(value!==""){
        this.todoArray.push(value.todo)
        //this.todoForm.reset()
      }else{
        alert('Field required **')
      }
    }

}
