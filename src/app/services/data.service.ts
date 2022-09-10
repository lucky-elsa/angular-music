import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MusicModel } from '../models/music.model';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private musicPlay$ = new BehaviorSubject<MusicModel>({id: 0,
    title: '',
    titleEn: '',
    cover: '',
    duration: 0,
    durationStr: '',
    publishDateString: '',
    hlsUrl: '',
    shareLink: '',
    artistId: 0,
    artistName: '',
    artistNameEn: '',
    like: 0,
    config: {
      sColor: '',
      eColor: '',
      fColor: ''
    }});
  musicPlay = this.musicPlay$.asObservable();


  private isShowenBar$ = new BehaviorSubject<boolean>(false);
  isShowenBar = this.isShowenBar$.asObservable();

  constructor() {}


  update(item: MusicModel) {
    this.musicPlay$.next(item);
  }

  changeBarStatus(){
    this.isShowenBar$.next(true);
  }
}
