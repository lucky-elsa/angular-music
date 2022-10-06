import { Component, OnInit, Renderer2,AfterContentInit , AfterContentChecked } from '@angular/core';
import { MusicModel } from 'src/app/models/music.model';
import { DataService } from 'src/app/services/data.service';
// import videojs from 'video.js';
declare var videojs: any;
@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.scss']
})
export class PlayBarComponent implements OnInit ,AfterContentInit ,AfterContentChecked{

  isShowenBar: boolean = false;
  music : MusicModel | undefined;
  private player: any;
  constructor(private data : DataService,private renderer: Renderer2) {
   }


  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit():void{
   
    this.data.isShowenBar.subscribe((data)=>{
      this.isShowenBar = data;
    })
    this.data.musicPlay.subscribe((res : any) => {
      this.music = res;
    }); 
 
}

ngAfterContentInit(){
    this.player = videojs(document.getElementById('audio'),{autoplay: true, controls: true, sources: [{ 
      src: this.music?.hlsUrl , type: 'application/x-mpegURL' }]}, function onPlayerReady() {
  })
}

ngAfterContentChecked(){
  this.player.play();
}
}
