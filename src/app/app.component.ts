import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note, Wohngemeinschaft } from './models/notes';
import { wohngemeinschaftService } from './wohngemeinschaft/wohngemeinschaft.service';
import * as $ from 'jquery';

//declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent implements OnInit{
  public wohngemeinschaft: Wohngemeinschaft;

  constructor(private wohngemeinschaftservice: wohngemeinschaftService){}

  ngOnInit() {
    this.getWohngemeinschaft();
    
  }

  public getWohngemeinschaft(): void{
    this.wohngemeinschaftservice.getWohngemeinschaft().subscribe(
      (response: Wohngemeinschaft)=>{
        this.wohngemeinschaft=response;
        console.log(this.wohngemeinschaft);
      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
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


  
   openModal() {
    /**const modelDiv=document.getElementById('myModel');
    if(modelDiv!=null){
      modelDiv.style.display='none';

    }*/
    //$('#myModal').modal('show');
    const modalElement = document.getElementById('myModal');
  if (modalElement) {
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
  }
  }

    closeModal() {
      /**const modelDiv=document.getElementById('myModel');
      if(modelDiv!=null){
        modelDiv.style.display='none';
  
      }*/
      //$('#myModal').modal('hide');
      const modalElement = document.getElementById('myModal');
  if (modalElement) {
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
  }
    }

  




  title = 'RoomerangFrontend';
}


