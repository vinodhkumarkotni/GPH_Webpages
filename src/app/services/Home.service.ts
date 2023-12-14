import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AboutDetails, EventsImgModel, HeaderImgModel, footerIconModel, imgGalleryModel, upcomingEventsModel, welcomeModel } from '../model/HomeModel';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

constructor(private http:HttpClient) { }

  getAllHeaderSectionImages():Observable<HeaderImgModel[]>{

    return this.http.get<HeaderImgModel[]>("data/headerSectionImages.json").pipe(
      map(data => {
        let headerSectionImages: Array<HeaderImgModel>=[];
        for(let id  in data)
        {
          headerSectionImages.push(data[id]);
        }
        return headerSectionImages;
      })
    );
    }

  getWelcomeSectionDetails():Observable<welcomeModel[]>{

    return this.http.get<welcomeModel[]>("data/welcomeSectiondata.json").pipe(
      map(data => {
        let welcomeDetails: Array<welcomeModel>=[];
        for(let id  in data)
        {
          welcomeDetails.push(data[id]);
        }
        return welcomeDetails;
      })
    );
    }

  getAboutSectionDetails():Observable<AboutDetails[]>{

    return this.http.get<AboutDetails[]>("data/AboutSectionData.json").pipe(
      map(data => {
        let aboutDetails: Array<AboutDetails>=[];
        console.log(data);
        for(let id  in data)
        {
          aboutDetails.push(data[id]);
        }
        return aboutDetails;
      })
    );
    }

  getEventsSectionDetails():Observable<EventsImgModel[]>{

    return this.http.get<EventsImgModel[]>("data/eventsData.json").pipe(
      map(data => {
        let eventsDetails: Array<EventsImgModel>=[];
        console.log(data);
        for(let id  in data)
        {
          eventsDetails.push(data[id]);
        }
        return eventsDetails;
      })
    );
    }
  getImgGallerySectionDetails():Observable<imgGalleryModel[]>{

    return this.http.get<imgGalleryModel[]>("data/imgGalleryData.json").pipe(
      map(data => {
        let eventsDetails: Array<imgGalleryModel>=[];
        console.log(data);
        for(let id  in data)
        {
          eventsDetails.push(data[id]);
        }
        return eventsDetails;
      })
    );
    }

    getUpcomingEventSectionDetails():Observable<upcomingEventsModel[]>{

      return this.http.get<upcomingEventsModel[]>("data/upcomingEventsData.json").pipe(
        map(data => {
          let eventsDetails: Array<upcomingEventsModel>=[];
          console.log(data);
          for(let id  in data)
          {
            eventsDetails.push(data[id]);
          }
          return eventsDetails;
        })
      );
      }

    getFooterIconDetails():Observable<footerIconModel[]>{

      return this.http.get<footerIconModel[]>("data/footerIconsData.json").pipe(
        map(data => {
          let eventsDetails: Array<footerIconModel>=[];
          console.log(data);
          for(let id  in data)
          {
            eventsDetails.push(data[id]);
          }
          return eventsDetails;
        })
      );
      }
}
