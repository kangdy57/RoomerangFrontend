import { ɵExtraLocaleDataIndex } from "@angular/core";

export interface Note {
    author:RoomMate;
    text:string;
    id:any
  }
  export interface RoomMate {
    name: string,
    email:string,
    telnr:string,
    wohngemeinschaft: Wohngemeinschaft
  }

  export interface Putzplan {
    kueche: RoomMate,
    bad: RoomMate,
    validFrom: string,
    validTo: string
  }
  export interface ausgabe {
    id: any,
    resident:RoomMate,
    description: string,
    amount: any,
    transactiontime: string
  }



  export interface Wohngemeinschaft{
    name: string,
    roommates: RoomMate[],
    notes: Note[],
    putzplan: Putzplan,
    ausgaben:ausgabe[]
  }
  