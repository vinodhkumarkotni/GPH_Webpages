import { Component, HostListener, OnInit } from '@angular/core';
import { AboutDetails, welcomeModel } from 'src/app/model/HomeModel';
import { HomeService } from 'src/app/services/Home.service';

@Component({
  selector: 'app-About-Us',
  templateUrl: './About-Us.component.html',
  styleUrls: ['./About-Us.component.css']
})
@HostListener('window:resize', ['$event'])
export class AboutUsComponent implements OnInit {

  itemsPerSlide = 1;
  singleSlideOffset = false;
  slidesdata:Array<AboutDetails>;
  title:string;
  //noWrap = true;


  constructor(private homeService:HomeService) {

    this.getAboutDetails();
  }

  ngOnInit() {

    //this.getAboutDetails();
    if(window.innerWidth<990){
      this.itemsPerSlide=1
    }
    else{
      this.itemsPerSlide = 4;
    }
    this.singleSlideOffset = true;

  }

  getAboutDetails(){
    this.homeService.getAboutSectionDetails().subscribe(
      data=>{

        this.slidesdata=data;
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }



}
