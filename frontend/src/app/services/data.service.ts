import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import ToDo from '../models/todo.model';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject(new ToDo());
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeData(message: ToDo) {
    this.messageSource.next(message)
  }

}