import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  isAuthenticated: Boolean;
  constructor(private as: AuthServiceService) {}

  ngOnInit() {
    this.isAuthenticated = this.as.authenticated;
  }
}
