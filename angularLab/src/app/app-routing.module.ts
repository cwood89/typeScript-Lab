import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from "./message/message.component";
import { Message2Component } from "./message2/message2.component";
import { Message3Component } from "./message3/message3.component";


const routes: Routes = [
  { path: "", component: Message3Component },
  { path: "message", component: MessageComponent },
  { path: "message2", component: Message2Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
