import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { Message2Component } from './message2/message2.component';
import { Message3Component } from './message3/message3.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    Message2Component,
    Message3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
