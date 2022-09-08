import { Component, OnInit } from '@angular/core';

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
  volume = 0.5;
  mydata = {
    img: '',
    label: '',
    author: ''
  };

  audio:any;
  constructor() {
    this.audio = new Audio();
   }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit():void{
    this.audio.src = "https://dl.nex1music.ir/1401/06/16/Tahdid,%20Winner%20&%203alibi%20-%20Mishnasi%20Maro.mp3?time=1662569811&filename=/1401/06/16/Tahdid,%20Winner%20&%203alibi%20-%20Mishnasi%20Maro.mp3";
    this.audio.load();

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
  setVolume(value:any){
    this.audio.volume = value;
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
  }
  pause(){
    this.audio.pause();
    this.isPlay = false;
  }
  isEnd(){
    return false;
  }
}
