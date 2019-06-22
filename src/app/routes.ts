import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { GreetingsComponent } from "./greetings/greetings.component";

const app_route: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "greetings",
    component: GreetingsComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(app_route)],
  exports: [RouterModule]
})
export class routes {}
