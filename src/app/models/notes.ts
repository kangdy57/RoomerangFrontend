export interface Note {
    authorName:string;
    textContent:string;
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