import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  sound= new Howl({
    src:'assets/back.mp3'
  })
  constructor() {
    
   }

  ngOnInit(): void {
    //this.sound.play();
    Howler.volume(0.5);
  }

}
