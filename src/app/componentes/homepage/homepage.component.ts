import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {

  constructor(  private router: Router,
    ) { }

  ngOnInit() {}
  goUser() {
debugger
      this.router.navigate(['/user']);
   
  }

}
