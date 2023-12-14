import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './GPH Home/HeaderSection/HeaderSection.component';
import { DesktopMenuComponent } from './Menu/desktopMenu/desktopMenu.component';
import { MobileViewMenuComponent } from './Menu/MobileViewMenu/MobileViewMenu.component';
import { WelcomeSectionComponent } from './GPH Home/WelcomeSection/WelcomeSection.component';
import { ImgUlrSafePipe } from './pipes/imgUlrSafe.pipe';
import { AboutUsComponent } from './GPH Home/About-Us/About-Us.component';
import { GalleryComponent } from './GPH Home/Gallery/Gallery.component';
import { ImageGallaryComponent } from './GPH Home/Gallery/ImageGallary/ImageGallary.component';
import { VideoGallayComponent } from './GPH Home/Gallery/VideoGallay/VideoGallay.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { WorshipsComponent } from './GPH Home/Worships/Worships.component';
import { FooterDataComponent } from './GPH Home/footer-data/footer-data.component';
import { EventsComponent } from './GPH Home/Gallery/events/events.component';
import { ReachUsComponent } from './GPH Home/reach-us/reach-us.component';
import { PrayerRequestsComponent } from './GPH Home/prayer-requests/prayer-requests.component';
import { WePrayForUComponent } from './GPH Home/Gallery/We-PrayForU/We-PrayForU.component';
import { ComingSoonComponent } from './Coming-Soon/Coming-Soon.component';
import { RouterModule, Routes } from '@angular/router';
import { GPHHomeComponent } from './GPH Home/GPH-Home/GPH-Home.component';
import { SubmitRequestComponent } from './GPH Home/submit-request/submit-request.component';
const appRoutes: Routes=[
  {path:'',component:GPHHomeComponent},
  {path:'comingSoon',component:ComingSoonComponent},
  {path:'submitRequest',component:SubmitRequestComponent}
]

@NgModule({
  declarations: [
    AppComponent
    ,DesktopMenuComponent
    ,MobileViewMenuComponent
    ,ImgUlrSafePipe
    ,HeaderSectionComponent
    ,WelcomeSectionComponent
    ,WorshipsComponent
    ,ReachUsComponent
    ,AboutUsComponent
    ,GalleryComponent
    ,ImageGallaryComponent
    ,EventsComponent
    ,VideoGallayComponent
    ,FooterDataComponent
    ,PrayerRequestsComponent
    ,WePrayForUComponent,
      ComingSoonComponent,
      GPHHomeComponent,
      SubmitRequestComponent
   ],
  imports: [
    BrowserModule
    ,FormsModule
    ,ReactiveFormsModule
    ,CarouselModule
    //,TooltipModule
    ,HttpClientModule
    ,SlickCarouselModule

    ,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
