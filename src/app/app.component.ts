import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Wohngemeinschaft } from './models/notes';
import { wohngemeinschaftService } from './wohngemeinschaft/wohngemeinschaft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public wohngemeinschaften: Wohngemeinschaft[];

  constructor(private wohngemeinschaftservice: wohngemeinschaftService){}

  ngOnInit() {
    this.getWohngemeinschaft();
    
  }

  public getWohngemeinschaft(): void{
    this.wohngemeinschaftservice.getWohngemeinschaft().subscribe(
      (response: Wohngemeinschaft[])=>{
        this.wohngemeinschaften=response;
        console.log(this.wohngemeinschaften);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }




  title = 'RoomerangFrontend';
}
