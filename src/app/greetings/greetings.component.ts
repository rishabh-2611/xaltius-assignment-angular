import { Component, OnInit, Injector } from "@angular/core";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-greetings",
  templateUrl: "./greetings.component.html",
  styleUrls: ["./greetings.component.css"]
})
export class GreetingsComponent implements OnInit {
  user: {
    name: String;
    age: number;
  };
  message: any;
  bgClass: any;
  router: Router;
  constructor(private userService: UserService, private injector: Injector) {
    this.router = this.injector.get(Router);
  }

  ngOnInit() {
    this.user = this.userService.getUser();
    this.changeBackground();
    this.fetchMessage();
  }

  changeBackground() {
    if (this.user.age <= 20) this.bgClass = "bg-light-blue";
    else if (this.user.age >= 21 && this.user.age <= 50)
      this.bgClass = "bg-light-red";
    else if (this.user.age >= 51) this.bgClass = "bg-light-grey";
  }

  fetchMessage() {
    this.userService.getMessage().subscribe(res => {
      this.message = res.message;
    });
  }

  goBack() {
    this.router.navigate(["/"]);
  }
}
