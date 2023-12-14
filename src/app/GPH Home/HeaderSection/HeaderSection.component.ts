import { Component, OnInit } from '@angular/core';
import { HeaderImgModel } from 'src/app/model/HomeModel';
import { HomeService } from 'src/app/services/Home.service';
declare const $:any;
@Component({
  selector: 'app-HeaderSection',
  templateUrl: './HeaderSection.component.html',
  styleUrls: ['./HeaderSection.component.css']
})
export class HeaderSectionComponent implements OnInit {
  images:Array<HeaderImgModel>;

  items = [
    {
      title: "1 slide label",
      summery: "1 slide label summery",
      url: "https://via.placeholder.com/200?text=first"
    },
    {
      title: "2 slide label",
      summery: "2 slide label summery",
      url: "https://via.placeholder.com/200?text=second"
    },
    {
      title: "3 slide label",
      summery: "3 slide label summery",
      url: "https://via.placeholder.com/200?text=third"
    }
  ];

  constructor(private homeSectionService:HomeService) { }

  ngOnInit() {
    this.getAllHeaderImages();
  }

  getAllHeaderImages(){
    this.homeSectionService.getAllHeaderSectionImages().subscribe(
      data=>{
        this.images=data
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }
  ngAfterViewInit(){
    $('#carouselExampleCaptions').carousel()
  }

}
