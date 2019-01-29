
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
import {MatButtonModule, MatCheckboxModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AngularDatagridComponent } from './angular-datagrid/angular-datagrid.component';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    DataGrid,
    TitleComponent,
    TodoEntryComponent,
    AngularDatagridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [TitleComponent, AngularDatagridComponent]
})
export class AppModule { }