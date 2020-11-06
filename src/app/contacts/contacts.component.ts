import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import {HouseChurch} from '../house-church/HouseChurch';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public model:HouseChurch;
  public form
  ArrayHouseChurch:HouseChurch[]= [];
  constructor() { }
  submitted = false;
  days: string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

  onSubmit() { 
    this.ArrayHouseChurch.push(this.model);
  this.model=new HouseChurch();
  this.submitted=true;
  console.log("submit");
  console.log(this.ArrayHouseChurch);
 }
  ngOnInit(): void {
    this.model=new HouseChurch();
  }

}
