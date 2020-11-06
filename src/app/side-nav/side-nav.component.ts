import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { from } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
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
export class SideNavComponent implements OnInit {
  @Output() Home = new EventEmitter()
  @Output() Galerey = new EventEmitter()
  @Output() Testimony = new EventEmitter()
  @Output() Contacts = new EventEmitter()
  constructor(private data: DataService) { }
  sidenav:boolean;
  ngOnInit(): void {
    this.data.currentStateNav.subscribe(sidenav => this.sidenav = sidenav)
  }
 


}
