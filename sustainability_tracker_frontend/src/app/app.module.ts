import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActionFormComponent } from './action-form/action-form.component';
import { ActionListComponent } from './action-list/action-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionFormComponent,
    ActionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
