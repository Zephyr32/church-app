import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('1s ease-out', 
                    style({ height: '100%', opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: '100%', opacity: 1 }),
            animate('1s ease-in', 
                    style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class AppComponent {
  title = 'Vmeste';
  instagramm= "https://www.instagram.com/vmeste.youth/"
  youtube="https://www.youtube.com/channel/UCexm_Xj6-bhbciFWVX9nTzg/videos?view_as=subscriber"
  main:boolean=true;
  contacts:boolean=false;
  testimony:boolean=false;
  galerey:boolean=false;
  Contacts(){
  this.Closeall();
  this.contacts=true;
  }
  Testimony(){
    this.Closeall();
    this.testimony=true;
  }
  Galerey(){
    this.Closeall();
    this.galerey=true;
  } 
  Home(){
    this.Closeall();
    this.main=true;
  } 
  Closeall(){
    this.main=false;
    this.contacts=false;
    this.testimony=false;
    this.galerey=false;
  }
}

