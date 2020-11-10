import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{Pritchi} from "./Pritchi";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  constructor() {
this.pritcha=this.pritch.getRandompritch();
  }
   public pritch:Pritchi=new Pritchi();
   pritcha:string;
  ngOnInit(): void {
  }

  

}
