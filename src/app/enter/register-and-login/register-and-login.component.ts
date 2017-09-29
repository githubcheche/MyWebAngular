import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-and-login',
  templateUrl: './register-and-login.component.html',
  styleUrls: ['./register-and-login.component.css']
})
export class RegisterAndLoginComponent implements OnInit {
  private status: string = "register";
  
  constructor() { }

  ngOnInit() {
  }

  changeStatus(event:string) {
    this.status = event;
  }

}
