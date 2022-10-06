import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MusicModel } from 'src/app/models/music.model';
import { PlayListModel } from 'src/app/models/playList.model';
import { DataService } from 'src/app/services/data.service';
import { MusicService } from 'src/app/services/music.service';
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
  isWait: boolean = true;
  constructor(private musicService: MusicService, private data : DataService) { }

  ngOnInit(): void {
    this.getPlayList();
    this.getNewerMusics();
  }

  getPlayList() {
    this.suggestedSubscription = this.musicService.getSuggestedPlayLists().subscribe((res:any) => {
      this.suggestedPlayLists = res.data;
      this.isWait = false;
    });
  }

  getNewerMusics(){
    this.newerMusicSubscription = this.musicService.getCategroyItems(4,10).subscribe((res:any)=>{
      this.newerMusicData = res.data;
    })
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

  sendData(item: MusicModel){
    // use behavior subject to transfer data between components
    this.data.update(item);
    this.data.changeBarStatus();
  }


  swiperConfig: any = {
    slidesPerView: '5',
    spaceBetween: 20,
    scrollbar: { draggable: true },
    breakpoints: {
      320: {
        slidesPerView: '2'
      },
      768: {
        slidesPerView: '3'
      },
      1200: {
        slidesPerView: '5'
      }
    }
}

  
  coverTrackByFn(index:number) {
    return index; // or item.id
  }

  musicTrackByFn(index:number) {
    return index; // or item.id
  }


  ngOnDestroy(): void {
    //unsubscribe to subscribed observables
    if (this.suggestedSubscription) {
      this.suggestedSubscription.unsubscribe();
    }
    if (this.newerMusicSubscription) {
      this.newerMusicSubscription.unsubscribe();
    }
  }

}

