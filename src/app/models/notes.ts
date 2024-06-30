import { ɵExtraLocaleDataIndex } from "@angular/core";

export interface Note {
    author:RoomMate;
    text:string;
    id:any
  }
  export interface RoomMate {
    name: string,
    wohngemeinschaft: Wohngemeinschaft
  }

  export interface Putzplan {
    kueche: RoomMate,
    bad: RoomMate,
    validFrom: string,
    validTo: string
  }



  export interface Wohngemeinschaft{
    name: string,
    roommates: RoomMate[],
    notes: Note[],
    putzplan: Putzplan
  }
  