import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})


export class AppComponent implements OnInit {

  currentRoute!: string;

  constructor(
    private router: Router,
    private location: Location,

  ) {

    router.events.subscribe(val => {
      if (location.path() != "") {
        this.currentRoute = location.path();
      } else {
        this.currentRoute = "Home";
      }

      console.log('currentRoute => ' + this.currentRoute)
    });

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'angular-tutorial';


}