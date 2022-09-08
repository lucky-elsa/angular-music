import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayListModel } from 'src/app/models/playList.model';
import { MusicService } from 'src/app/servieces/music.service';
import SwiperCore from 'swiper';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnDestroy  {
  suggestedSubscription: Subscription | undefined;
  suggestedPlayLists : PlayListModel[] = [];
  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.getPlayList();
  }

  getPlayList() {
    this.suggestedSubscription = this.musicService.getSuggestedPlayLists().subscribe((res:any) => {
      this.suggestedPlayLists = res.data;
      // this.isWait = true;
    });
  }
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  ngOnDestroy(): void {
    if (this.suggestedSubscription) {
      this.suggestedSubscription.unsubscribe();
    }
  }

}
