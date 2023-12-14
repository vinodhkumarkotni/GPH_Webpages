import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desktopMenu',
  templateUrl: './desktopMenu.component.html',
  styleUrls: ['./desktopMenu.component.css']
})
export class DesktopMenuComponent implements OnInit {

  navbarOpen = false;
  logoUrl='assets/images/Logo3.png';
  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
