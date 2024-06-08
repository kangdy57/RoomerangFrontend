import { Component, OnInit } from '@angular/core';
import { WohngemeinschaftService } from './wohngemeinschaft.service';

@Component({
  selector: 'app-wohngemeinschaft',
  templateUrl: './wohngemeinschaft.component.html',
  styleUrl: './wohngemeinschaft.component.css'
})
export class WohngemeinschaftComponent implements OnInit {

  public wohngemeinschaft = [];

  constructor(private _wohngemeinschaftService: WohngemeinschaftService) {
  }

  ngOnInit() {
    this._wohngemeinschaftService.getWohngemeinschaft()
        .subscribe(data => this.wohngemeinschaft = data);
  }

}
