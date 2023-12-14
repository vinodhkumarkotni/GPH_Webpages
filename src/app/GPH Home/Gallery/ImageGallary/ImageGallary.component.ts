import { Component, OnInit } from '@angular/core';
import { AboutDetails, HeaderImgModel, imgGalleryModel } from 'src/app/model/HomeModel';
import { HomeService } from 'src/app/services/Home.service';
declare const $:any;
@Component({
  selector: 'app-ImageGallary',
  templateUrl: './ImageGallary.component.html',
  styleUrls: ['./ImageGallary.component.css'
]
})
export class ImageGallaryComponent implements OnInit {

  images:Array<imgGalleryModel>;
  imagesSlider = {
    speed:300,
    slidesToShow:1,
    slidesToScroll:1,
    cssEase:'linear',
    fade:true,
    autoplay: true,
    draggable:true,
    prevArrow:'.client-feedback-img .prev-arrow',
    nextArrow:'.client-feedback .next-arrow',
    asNavFor:".thumbs-img",
  };
  thumbnailsSlider = {
    speed:500,
    slidesToShow:4,
    slidesToScroll:2,
    cssEase:'linear',
    autoplay: true,
    centerMode:true,
    draggable:true,
    focusOnSelect:true,
    asNavFor:".feedback-img",
    prevArrow:'.client-thumbnails-img .slick-list',
    nextArrow:'.client-thumbnails-img .next-arrow',

  };

  constructor(private homeService:HomeService) {

    this.getImageGallery();
  }

  ngOnInit() {


  }

  getImageGallery(){
    this.homeService.getImgGallerySectionDetails().subscribe(
      data=>{

        this.images=data;
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }


}
