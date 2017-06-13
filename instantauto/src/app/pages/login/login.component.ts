import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Observable } from 'rxjs/';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

declare var $: any;
@Component({
  selector: 'at-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {
  loginError;
  data: any;
  err: any;
  constructor(private authervice: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    if (window.location.href.indexOf('login') !== -1) {
      $('body').addClass('loginPage');
    }
  }

  submit() {
    const userName = $('#username').val();
    const password = $('#password').val();

    this.authervice.getToken(userName, password).subscribe(
      (data) => {
        localStorage.setItem('token', data.token);
        this.router.navigate(['viewdealer']);
      },
      err => {
        this.loginError = err;
      }
    );

  }

}