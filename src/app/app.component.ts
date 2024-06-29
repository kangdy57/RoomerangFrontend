// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  roommates: any[] = [];


  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  navigateToNotes($myParam: string = ''): void {
    const naviagtionDetails: String[] = ['/notes'];
    if($myParam.length) {
      naviagtionDetails.push($myParam);
    }
    this.router.navigate(naviagtionDetails);
  }
}
