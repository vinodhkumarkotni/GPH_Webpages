import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MobileViewMenu',
  templateUrl: './MobileViewMenu.component.html',
  styleUrls: ['./MobileViewMenu.component.css']
})
export class MobileViewMenuComponent implements OnInit {

  logoUrl='assets/images/Logo3.png';
  mbMenu: string;
  constructor() { }

  ngOnInit() {
    this.mbMenu='myNavHide'
  }
  openNav(){
    this.mbMenu='myNavShow'
  }
  closeNav(){
    this.mbMenu='myNavHide'
  }

}
