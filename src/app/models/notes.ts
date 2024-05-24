export interface Note {
    id: string,
    text: string,
    parentNote: string,
    wohngemeinschaft: Wohngemeinschaft
    notes: [],
  }
  export interface RoomMate {
    name: string,
    wohngemeinschaft: Wohngemeinschaft
  }
  export interface Wohngemeinschaft{
    name: string,
    roommates: RoomMate[],
    notes: string
  }