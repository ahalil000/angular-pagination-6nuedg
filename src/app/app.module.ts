import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatPaginatorModule ],
  declarations: [ AppComponent, HelloComponent, PaginationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
