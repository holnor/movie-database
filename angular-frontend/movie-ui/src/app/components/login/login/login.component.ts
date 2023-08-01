import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Auth} from "../../../models/auth";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;


  constructor(private formBuilder:FormBuilder, private loginService:LoginService) {
    this.form = this.formBuilder.group({
      username: [''],
      password: ['']
    })
  }

  login() {
    const data:Auth = this.form.value;
    this.loginService.login(data).subscribe(token=>{
      localStorage.setItem("access token", token.token);
      localStorage.setItem("isLoggedIn", "true");
    })
  }
}
