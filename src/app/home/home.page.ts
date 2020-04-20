import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public authService: AuthService,
    private router: Router,
    ) {}

    logout() {
      this.authService.logout();
      this.router.navigate(['/login']);
    }
    ads(){debugger}




}
