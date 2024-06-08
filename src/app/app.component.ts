import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note, Wohngemeinschaft } from './models/wg';
import { WohngemeinschaftService } from './wohngemeinschaft/wohngemeinschaft.service';
import { NgForm } from '@angular/forms';

//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit{
  
  public wohngemeinschaft = [];
  public title = 'RoomerangFrontend';

  constructor(private wohngemeinschaftservice: WohngemeinschaftService){}

  ngOnInit() {
    this.wohngemeinschaftservice.getWohngemeinschaft()
        .subscribe(data => this.wohngemeinschaft = data);
  }
}


