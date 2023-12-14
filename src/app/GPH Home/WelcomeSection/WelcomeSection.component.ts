import { Component, OnInit } from '@angular/core';
import { welcomeModel } from 'src/app/model/HomeModel';
import { HomeService } from 'src/app/services/Home.service';

@Component({
  selector: 'app-WelcomeSection',
  templateUrl: './WelcomeSection.component.html',
  styleUrls: ['./WelcomeSection.component.css']
})
export class WelcomeSectionComponent implements OnInit {

  welcomeSectionData:Array<welcomeModel>;
  constructor(private homeService:HomeService) { }

  ngOnInit() {
    this.getWelcomeDetails();
  }
  getWelcomeDetails(){
    this.homeService.getWelcomeSectionDetails().subscribe(
      data=>{
        this.welcomeSectionData=data
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }

}
