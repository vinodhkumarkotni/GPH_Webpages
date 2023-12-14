import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prayer-requests',
  templateUrl: './prayer-requests.component.html',
  styleUrls: ['./prayer-requests.component.css']
})
export class PrayerRequestsComponent implements OnInit {

  bgPrayImgUrl='assets/images/reachUs/img1.jpg';
  prayImgUrl='assets/images/reachUs/prayer.png';
  wordlogo='assets/images/reachUs/word.png';
  aboutLogo='assets/images/reachUs/about.png';
  sermonLogo='assets/images/reachUs/sermon.png';

  sliderImages=
  [{
    "aboutId":1,
    "backGroundUrl": "assets/images/imgPrayers/bible Study.jpg",
    "aboutTitle":"Out Reach",
    },
    {
      "aboutId":1,
      "backGroundUrl": "assets/images/imgPrayers/Sunday Worship.png",
      "aboutTitle":"Out Reach",
    },
    {
      "aboutId":1,
      "backGroundUrl": "assets/images/imgPrayers/bible Study.jpg",
      "aboutTitle":"Out Reach",
    },
    {
      "aboutId":1,
      "backGroundUrl": "assets/images/imgPrayers/Sunday Worship.png",
      "aboutTitle":"Out Reach",
      },
      {
        "aboutId":1,
        "backGroundUrl": "assets/images/imgPrayers/bible Study.jpg",
        "aboutTitle":"Out Reach",
      },
      {
        "aboutId":1,
        "backGroundUrl": "assets/images/imgPrayers/Sunday Worship.png",
        "aboutTitle":"Out Reach",
      },
      {
        "aboutId":1,
        "backGroundUrl": "assets/images/imgPrayers/bible Study.jpg",
        "aboutTitle":"Out Reach",
        },
        {
          "aboutId":1,
          "backGroundUrl": "assets/images/imgPrayers/Sunday Worship.png",
          "aboutTitle":"Out Reach",
        },
        {
          "aboutId":1,
          "backGroundUrl": "assets/images/imgPrayers/bible Study.jpg",
          "aboutTitle":"Out Reach",
        },
        {
          "aboutId":1,
          "backGroundUrl": "assets/images/imgPrayers/Sunday Worship.png",
          "aboutTitle":"Out Reach",
          },
          {
            "aboutId":1,
            "backGroundUrl": "assets/images/imgPrayers/bible Study.jpg",
            "aboutTitle":"Out Reach",
          },
          {
            "aboutId":1,
            "backGroundUrl": "assets/images/imgPrayers/Sunday Worship.png",
            "aboutTitle":"Out Reach",
          }

  ];


  constructor() { }

  ngOnInit() {
  }

}
