import { Component, HostBinding, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations: [
    trigger('stateAnimation', [
       state('false', style({ 
          'margin-left': '0px', 
       })),
       state('true', style({ 
          'margin-left': '150px',
          'z-index':'1000' 
       })),
       transition('false => true', [
          style({ 'margin-right': '150px' }),
          animate('0.2s')
       ]),
       transition('true => false', [
          style({ 'margin-right': '0px' }),
          animate('0.2s')
       ])
    ])]
})
export class ToolbarComponent implements OnInit {
  title = 'Vmeste';
  instagramm= "https://www.instagram.com/vmeste.youth/"
  youtube="https://www.youtube.com/channel/UCexm_Xj6-bhbciFWVX9nTzg/videos?view_as=subscriber"

  constructor(private data: DataService) { }
  sidenav:boolean;
  ngOnInit(): void {
    this.data.currentStateNav.subscribe(sidenav => this.sidenav = sidenav)
  }
  Sidenav(){
    this.data.changeStateNav(!this.sidenav)
  }
  @HostBinding('@stateAnimation') get state() {
    return this.sidenav ? 'complete' : 'incomplete';
 }

}
