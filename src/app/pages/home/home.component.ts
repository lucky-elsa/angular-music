import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicModel } from 'src/app/models/music.model';
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
  newerMusicSubscription : Subscription | undefined;
  suggestedPlayLists : PlayListModel[] = [];
  newerMusicData : MusicModel[] = [];
  searchKey: string = '';
  constructor(private musicService: MusicService) { }

  ngOnInit(): void {
    this.getPlayList();
    this.getNewerMusics();
  }

  getPlayList() {
    this.suggestedSubscription = this.musicService.getSuggestedPlayLists().subscribe((res:any) => {
      this.suggestedPlayLists = res.data;
      // this.isWait = true;
    });
  }

  getNewerMusics(){
    this.newerMusicSubscription = this.musicService.getCategroyItems(4).subscribe((res:any)=>{
      this.newerMusicData = res.data;
    })
  }
  onSwiper([swiper]:any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

  doSearch(searchKey: string): void {
    let result: MusicModel[] = [];
    if (searchKey.length > 2) {
      result = this.newerMusicData.filter((item) => {
        // @ts-ignore
        return !(item.title.trim().indexOf(this.searchKey.trim()) <= -1);
      });
    }
    if (result.length > 0) {
      this.newerMusicData = result;
    }
    else {
      this.getNewerMusics();
    }
  }



  ngOnDestroy(): void {
    if (this.suggestedSubscription) {
      this.suggestedSubscription.unsubscribe();
    }
  }

}
