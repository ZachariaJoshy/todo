import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { HeaderComponent } from './header/header.component';
import { ListtodoComponent } from './listtodo/listtodo.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    HeaderComponent,
    ListtodoComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
