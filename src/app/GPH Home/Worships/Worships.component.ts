import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Worships',
  templateUrl: './Worships.component.html',
  styleUrls: ['./Worships.component.css']
})
export class WorshipsComponent implements OnInit {

  addressUlr='assets/images/imgPrayers/address.jpeg';
  SundaysUlr='assets/images/imgPrayers/Sunday Worship.png';
  bibleStudyUrl='assets/images/imgPrayers/bible Study.jpg';
  constructor() { }

  ngOnInit() {
  }

}
