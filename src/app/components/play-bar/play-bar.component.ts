import { Component, OnInit } from '@angular/core';
import { MusicModel } from 'src/app/models/music.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.scss']
})
export class PlayBarComponent implements OnInit {

  isPlay: boolean = false;
  duration: number = 100;
  currentTime:number = 50;
  readCurrentTime = '00:00';
  readDuration = '00:00';
  music : MusicModel | undefined;
  audio:any;
  constructor(private data : DataService) {
    this.audio = new Audio();
   }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit():void{
    this.audio.src = "https://dl.nex1music.ir/1401/06/16/Tahdid,%20Winner%20&%203alibi%20-%20Mishnasi%20Maro.mp3?time=1662569811&filename=/1401/06/16/Tahdid,%20Winner%20&%203alibi%20-%20Mishnasi%20Maro.mp3";
    this.audio.load();

     this.data.musicPlay.subscribe((res : any) => {
      this.music = res;
    });

const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
for (let e of  inputs) {
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

  }

  isStart(){
    return true;
  }
  next(){

  }  

  stop(){

  }
  play(){
    this.audio.play();
    this.isPlay = true;
    setTimeout(()=>{
      this.currentTime += 5;
    }, 1000);
  }
  pause(){
    this.audio.pause();
    this.isPlay = false;
  }
  isEnd(){
    return false;
  }
}
