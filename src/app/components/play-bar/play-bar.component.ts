import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MusicModel } from 'src/app/models/music.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.scss']
})
export class PlayBarComponent implements OnInit {

  @ViewChild('input') input!: ElementRef;
  isPlay: boolean = false;
  isMusicMute: boolean = false;
  currentTime:number = 50;
  readCurrentTime = '00:00';
  readDuration = '00:00';
  music : MusicModel | undefined;
  audio:any;
  constructor(private data : DataService,private renderer: Renderer2) {
    this.audio = new Audio();
   }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit():void{
    this.audio.src = "https://dl.nex1music.ir/1401/06/16/Tahdid,%20Winner%20&%203alibi%20-%20Mishnasi%20Maro.mp3?time=1662569811&filename=/1401/06/16/Tahdid,%20Winner%20&%203alibi%20-%20Mishnasi%20Maro.mp3";
    this.audio.load();
    this.currentTime = this.audio.currentTime;
     this.data.musicPlay.subscribe((res : any) => {
      this.music = res;
      this.audio.src = res.hlsUrl;
      // this.duration = this.audio.duration;
      this.audio.load();
    });

    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type="range"].slider-progress');
    for (let e of inputs) {
  setTimeout(() => {
      e.style.setProperty("--value", e.value);
  }, 2000);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () =>
      e.style.setProperty("--value", e.value)
  );
}
  }

  setSeek(value:any){
    console.log(value);
  }
 
  previous(){
    this.audio.currentTime -=10;
  }

  next(){
    this.audio.currentTime +=10;
  }  

  stop(){
    this.audio.pause();
    this.audio.currentTime = 0;
    this.isPlay = false;
  }
  play(){
    this.audio.play();
    this.isPlay = true;
    setTimeout(()=>{
      this.audio.currentTime += 5;
    }, 1000);
  }
  pause(){
    this.audio.pause();
    this.isPlay = false;
  }

  muteToggle(){
    if(this.isMusicMute){
        this.audio.volume = 0;
    }
    else{
      this.audio.volume = 1;
    }
  }
}
