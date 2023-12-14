import { Component, OnInit } from '@angular/core';
import { footerIconModel } from 'src/app/model/HomeModel';
import { HomeService } from 'src/app/services/Home.service';

@Component({
  selector: 'app-footer-data',
  templateUrl: './footer-data.component.html',
  styleUrls: ['./footer-data.component.css']
})
export class FooterDataComponent implements OnInit {

  icons:Array<footerIconModel>;
  constructor(private homeSectionService:HomeService) { }

  ngOnInit() {
    this.getFooterIconDetails();
  }

  getFooterIconDetails(){
    this.homeSectionService.getFooterIconDetails().subscribe(
      data=>{
        this.icons=data
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }

}
