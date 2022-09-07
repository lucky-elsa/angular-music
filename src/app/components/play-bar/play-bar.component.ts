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
  }
  setSeek(value:any){
    console.log(value);
  }
  setVolume(value:any){
    console.log(value)
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
