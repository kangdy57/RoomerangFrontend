export interface Note {
    author:RoomMate;
    text:string;
    id:any
  }
  export interface RoomMate {
    name: string,
    wohngemeinschaft: Wohngemeinschaft
  }
  export interface Wohngemeinschaft{
    name: string,
    roommates: RoomMate[],
    notes: Note[]
  }