import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { RoomMateComponent } from './room-mate/room-mate.component';
import { WgServiceComponent } from './wg-service/wg-service.component';
import { WohngemeinschaftComponent } from './wohngemeinschaft/wohngemeinschaft.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    RoomMateComponent,
    WgServiceComponent,
    WohngemeinschaftComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
