import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'vertical',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SwiperModule, NgxSpinnerModule],
  providers: [{
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
