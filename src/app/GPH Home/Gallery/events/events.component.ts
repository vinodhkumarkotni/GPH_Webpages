import { Component, OnInit } from '@angular/core';
import { EventsImgModel, upcomingEventsModel } from 'src/app/model/HomeModel';
import { HomeService } from 'src/app/services/Home.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  images:Array<EventsImgModel>;
  eventDetails:Array<upcomingEventsModel>;
  constructor(private homeSectionService:HomeService) { }

  ngOnInit() {
    //this.getEventsDetails();
    this.getUpcomingEventsDetails();
  }

  getEventsDetails(){
    this.homeSectionService.getEventsSectionDetails().subscribe(
      data=>{
        this.images=data
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }

  getUpcomingEventsDetails(){
    this.homeSectionService.getUpcomingEventSectionDetails().subscribe(
      data=>{
        this.eventDetails=data
      },
      error=>{
        console.log("httpError");
        console.log(error);
      }
    );
  }

}
