
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo.service';
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DataGrid } from './datagrid/app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from './title/title.component';
import { TodoEntryComponent } from './todo-entry/todo-entry.component';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    DataGrid,
    TitleComponent,
    TodoEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [TitleComponent, DataGrid]
})
export class AppModule { }