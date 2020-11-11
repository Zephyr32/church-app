import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackgroundComponent } from './background/background.component';
import { AudioComponent } from './audio/audio.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ContactsComponent } from './contacts/contacts.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { GalereyComponent } from './galerey/galerey.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DataService } from './data.service'
import { from } from 'rxjs';
import { HouseChurchComponent } from './house-church/house-church.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    AudioComponent,
    MainPageComponent,
    ToolbarComponent,
    ContactsComponent,
    TestimonyComponent,
    GalereyComponent,
    SideNavComponent,
    HouseChurchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
