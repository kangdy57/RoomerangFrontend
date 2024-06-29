import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Note } from '../models/wohngemeinschaft.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent implements OnInit {

  notes: Note[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchNote();
  }

  fetchNote(): void {
    this.http.get<Note[]>('http://localhost:8080/roomerang/allNotes')
      .subscribe(data => {
        this.notes = data;
      }, error => {
        console.error('Error fetching notes', error);
      });
  }
}


