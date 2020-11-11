import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { YoutubeService } from '../youtube.service';
import{Pritchi} from "./Pritchi";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService,private sanitizer: DomSanitizer) {
  this.pritcha=this.pritch.getRandompritch();
  }
   public pritch:Pritchi=new Pritchi();
   pritcha:string;
   videos: any[];
   private unsubscribe$: Subject<any> = new Subject();

  ngOnInit(): void {
    this.spinner.show()
    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
      this.videos = [];
      this.youTubeService
      .getVideosForChanel('UCexm_Xj6-bhbciFWVX9nTzg',3)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(list => {
        for (let element of list["items"]) 
        {
          var url:SafeResourceUrl;
           url= this.sanitizer.bypassSecurityTrustResourceUrl('http://www.youtube.com/embed/'+element.id.videoId);
           element.id.url=url;
        this.videos.push(element)
        }
      });
      console.log(this.videos);
  }


}
