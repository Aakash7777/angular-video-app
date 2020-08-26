import { Component, OnInit, AfterViewInit } from '@angular/core';

import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-video-app';
  index = 0;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false,
  };

  public vids = [
    'https://video.twimg.com/ext_tw_video/1257654361360138240/pu/vid/720x900/1G-79xtoWDw5tsuz.mp4?tag=10',
    'https://video.twimg.com/ext_tw_video/1286631363626573827/pu/vid/960x538/MxinWDG4jk9M2PZq.mp4?tag=10',
    'https://video.twimg.com/ext_tw_video/1278291971874983937/pu/vid/720x1280/bwlV3b8remv_QC6P.mp4?tag=10',
    'https://video.twimg.com/ext_tw_video/1286705567935979521/pu/vid/640x800/YWvziPSU5T36R-W7.mp4?tag=10',
    'https://video.twimg.com/ext_tw_video/1289108807445086210/pu/vid/370x360/yNhLJWCbJjXWyNgY.mp4?tag=10',
    'https://video.twimg.com/ext_tw_video/1263598783851450368/pu/vid/480x480/6yA30_MaMIQJI5iV.mp4?tag=10',
    'https://video.twimg.com/ext_tw_video/1286399404027645953/pu/vid/480x480/klbpg-cuFBRg4GoU.mp4?tag=10',
    'https://video.twimg.com/amplify_video/1262473223708356610/vid/330x240/sgQVB2WASV_hhnqB.mp4?tag=13',
    'https://video.twimg.com/amplify_video/1247283415285559297/vid/576x820/eA12BuPNyD_FXoZL.mp4?tag=13',
    'https://video.twimg.com/amplify_video/1258223760785633280/vid/224x300/ahYprBzFK3mhAbSD.mp4?tag=13',
  ];

  videos = [];

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.prepareVideosArray();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.spinner.hide();
      this.playCurrentVideo(this.index);
    }, 2000);
  }

  public prepareVideosArray(): void {
    for (let i = 0; i < this.vids.length; i++) {
      const v = {
        url: this.vids[i],
        id: i,
      };
      this.videos.push(v);
    }
  }

  onIndexChange(index: number): void {
    this.playCurrentVideo(index);
  }

  playCurrentVideo(id): void {
    const currentVid = document.getElementsByTagName('video')[id];
    const prevVid = document.getElementsByTagName('video')[id - 1];
    const nextVid = document.getElementsByTagName('video')[id + 1];
    currentVid.muted = true;
    currentVid.play();
    if (prevVid && prevVid !== undefined) {
      prevVid.pause();
      prevVid.currentTime = 0;
    }
    if (nextVid && nextVid !== undefined) {
      nextVid.pause();
      nextVid.currentTime = 0;
    }
  }
}
