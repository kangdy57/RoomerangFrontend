// export interface Note {
//     authorName:string;
//     textContent:string;
//   }
//   export interface RoomMate {
//     name: string,
//     wohngemeinschaft: Wohngemeinschaft
//   }
//   export interface Wohngemeinschaft{
//     subscribe(arg0: (data: any) => any): unknown;
//     name: string,
//     roommates: RoomMate[],
//     notes: Note[]
//   }

// wohngemeinschaft.model.ts
export interface RoomMate {
  id: number;
  name: string;
}

export interface Note {
  id: number;
  text: string;
  createdDate: string;
  author: RoomMate;
}

export interface Putzplan {
  validFrom: string;
  validTo: string;
  bad: RoomMate;
  kueche: RoomMate;
}

export interface Wohngemeinschaft {
  id: number;
  name: string;
  roommates: RoomMate[];
  notes: Note[];
  putzplan: Putzplan;
}
