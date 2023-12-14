import { Component, OnInit } from '@angular/core';
import { AboutDetails, HeaderImgModel } from 'src/app/model/HomeModel';
import { HomeService } from 'src/app/services/Home.service';

@Component({
  selector: 'app-VideoGallay',
  templateUrl: './VideoGallay.component.html',
  styleUrls: ['./VideoGallay.component.css']
})
export class VideoGallayComponent implements OnInit {

  images:Array<HeaderImgModel>;
  videoSlider = {
    // speed:300,
    // slidesToShow:1,
    // slidesToScroll:1,
    // cssEase:'linear',
    // fade:true,
    // autoplay: false,
    // draggable:true,
    // prevArrow:'.client-feedback-vid .prev-arrow',
    // nextArrow:'.client-feedback-vid .next-arrow',
    // asNavFor:".thumbs-vid",
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
  };
  vdthumbnailsSlider = {
    speed:500,
    slidesToShow:3,
    slidesToScroll:2,
    cssEase:'linear',
    autoplay: true,
    centerMode:true,
    draggable:true,
    focusOnSelect:true,
    asNavFor:".feedback-vid",
    prevArrow:'.client-thumbnails-vid .slick-list',
    nextArrow:'.client-thumbnails-vid .next-arrow',

  };

  videos1=[
    {
      backGroundUrl:"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      backGroundUrl:"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      backGroundUrl:"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      backGroundUrl:"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      backGroundUrl:"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    },
    {
      backGroundUrl:"https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
    }
  ]

  constructor(private homeService:HomeService) {

    this.getAllHeaderImages();
  }

  ngOnInit() {

    this.getAllHeaderImages();
  }

  getAllHeaderImages(){
    this.homeService.getAllHeaderSectionImages().subscribe(
      data=>{
        this.images=data
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }

}
