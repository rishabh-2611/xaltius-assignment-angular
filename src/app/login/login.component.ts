import { Component, OnInit, Injector } from "@angular/core";
import { NgbDatepickerConfig } from "@ng-bootstrap/ng-bootstrap";

import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [NgbDatepickerConfig]
})
export class LoginComponent implements OnInit {
  user = {
    name: "",
    dob: {
      day: 0,
      month: 0,
      year: 0
    }
  };
  isSubmit = false;

  router: Router;

  constructor(
    private config: NgbDatepickerConfig,
    private userService: UserService,
    private injector: Injector
  ) {
    this.config.minDate = { year: 1900, month: 1, day: 1 };
    this.config.maxDate = { year: 2018, month: 12, day: 31 };
    this.router = this.injector.get(Router);
  }

  ngOnInit() {}

  getAge() {
    var today = new Date();
    var current_year = today.getFullYear();
    var age = current_year - this.user.dob.year;
    
    return age;
  }

  restrictKeypress($e) {
    $e.preventDefault();
  }

  onSubmit() {
    this.isSubmit = true;

    this.userService.setUser({
      name : this.user.name,
      age : this.getAge()
    });
    this.router.navigate(['/greetings']);
  }
}
