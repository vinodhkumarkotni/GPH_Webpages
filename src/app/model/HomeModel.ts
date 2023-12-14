export interface HeaderImgModel {
  imgId:number;
  imgUrl:string;
  imgTitle:string;
  imgDesc:string;
}

export interface welcomeModel {
  wlcmId:number;
  wlcmTitle:string;
  wlcmVideoUrl:string;
  wlcmDesc:string;
}
export interface AboutDetails {
  aboutId:number,
  backGroundUrl:string;
  aboutTitle:string;
  aboutDesc:string;
}
export interface EventsImgModel {
  imgId:number;
  imgUrl:string;
  imgTitle:string;
  imgDesc:string;
}
export interface imgGalleryModel {
  aboutId:number,
  backGroundUrl:string;
  aboutTitle:string;
  aboutDesc:string;
}
export interface footerIconModel {
  ftrIconId:number,
  IconClass:string;
  IconUrl:string;
  IconTitle:string;
}
export interface upcomingEventsModel {
  eventId:number,
  eventTitle:string;
  eventDate:string;
  eventDesc:string;
  eventImgUrl:string;
}
