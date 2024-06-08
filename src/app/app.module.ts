import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { RoomMateComponent } from './room-mate/room-mate.component';
import { WohngemeinschaftComponent } from './wohngemeinschaft/wohngemeinschaft.component';
import { FormsModule } from '@angular/forms';
import { WohngemeinschaftService } from './wohngemeinschaft/wohngemeinschaft.service';



@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    RoomMateComponent,
    WohngemeinschaftComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WohngemeinschaftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
