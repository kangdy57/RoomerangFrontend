import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note, Wohngemeinschaft } from './models/notes';
import { wohngemeinschaftService } from './wohngemeinschaft/wohngemeinschaft.service';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';

//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit{
  public wohngemeinschaft: Wohngemeinschaft;
  name: string = '';
  text: string = '';
  updatetext:string='hallo';
  id:any;
  selectednote:Note = { id: 0, author: { wohngemeinschaft:{name:'',notes:[],roommates:[]},name: '' }, text: '' };

  constructor(private wohngemeinschaftservice: wohngemeinschaftService){}

  ngOnInit() {
    this.getWohngemeinschaft();
    
  }

  public getWohngemeinschaft(): void{
    this.wohngemeinschaftservice.getWohngemeinschaft().subscribe(
      (response: Wohngemeinschaft)=>{
        this.selectednote=null;
        this.wohngemeinschaft=response;
        console.log(this.wohngemeinschaft);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }



public onAddNote(): void {
  if (this.name && this.text) {
    this.wohngemeinschaftservice.addNotiz(this.name, this.text).subscribe(
      (response: any) => {
        this.name = ''; // Reset the author input
        this.text = ''; // Reset the content input
        this.closeModal('myModal'); // Close the modal after adding the note
        this.getWohngemeinschaft();
      },
      (error) => {
        console.error('Error adding note:', error);
      }
    );
  } else {
    alert('Please fill in both fields.');
  }
  
  
}

public deleteNote(id:any):void{
  
    this.wohngemeinschaftservice.deleteNote(id).subscribe(
      (response: any) => {
        this.getWohngemeinschaft();
      },
      (error) => {
        console.error('Error deleting note:', error);
      }
    );
    

}

public editNote():void{
  
  this.wohngemeinschaftservice.editNote(this.selectednote.id,this.updatetext).subscribe(
    (response: any) => {
      this.getWohngemeinschaft();
    },
    (error) => {
      console.error('Error editing note:', error);
    }
  );
  

}




  // modal.component.ts





  public onOpenModal(note: Note, mode:string):void{

    const container = document.getElementById('main-container');

    const button = document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#myModal');
    }

    if(mode === 'edit'){
      button.setAttribute('data-target', '#editNoteModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', '#deleteNoteModal');
    }


    container.appendChild(button);
    button.click();


  }


  
   openModal(text:string) {
    
    const modalElement = document.getElementById(text);
  if (modalElement&& !modalElement.classList.contains('show')) {
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    modalElement.setAttribute('aria-hidden', 'false');
      modalElement.setAttribute('aria-modal', 'true');
  }
  }

  openModalEdit(note:Note, text:string) {
    this.updatetext=text;
    this.selectednote=note;
    
    const modalElement = document.getElementById('editNoteModal');
  if (modalElement&& !modalElement.classList.contains('show')) {
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    modalElement.setAttribute('aria-hidden', 'false');
      modalElement.setAttribute('aria-modal', 'true');
  }
  }

    closeModal(text:string) {
     
      const modalElement = document.getElementById(text);
  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
  }
    }

  




  title = 'RoomerangFrontend';
}


