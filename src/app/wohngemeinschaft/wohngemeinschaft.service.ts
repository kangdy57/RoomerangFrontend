import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Note, Wohngemeinschaft } from "../models/notes";
import { environment } from "../../environments/environment.development";

//import { environment } from 'src/environments';




@Injectable({
    providedIn: 'root'
})
export class wohngemeinschaftService{
    
    private apiServerUrl= environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public getWohngemeinschaft(): Observable<Wohngemeinschaft>{
        return this.http.get<Wohngemeinschaft>(`${this.apiServerUrl}/roomerang/wg`)
    }

    public addRoommate(name:string,email:string,telnr:string): Observable<any>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('telnr', telnr);
        

        return this.http.post<string>(`${this.apiServerUrl}/roomerang/addRoommate`, formData);
    }

    public addAusgabe(name:string, amount:any, description:string): Observable<any>{
        const formData = new FormData();
        formData.append('description', description);
        formData.append('amount', amount);
        formData.append('name', name);
        return this.http.post<string>(`${this.apiServerUrl}/roomerang/addAusgabe`, formData);
    }

    public deleteRoommate(roommateid:any): Observable<any>{
        const formData = new FormData();
        formData.append('roommateId', roommateid);
        return this.http.post<string>(`${this.apiServerUrl}/roomerang/deleteRoommate`, formData);
    }

    public deleteBill(ausgabeid:any): Observable<any>{
        const formData = new FormData();
        formData.append('ausgabeId', ausgabeid);
        return this.http.post<string>(`${this.apiServerUrl}/roomerang/deleteAusgabe`, formData);
    }

 
        
    public addNotiz(name:string, text:string): Observable<any>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('text', text);
        return this.http.post<string>(`${this.apiServerUrl}/roomerang/addNote`, formData);
    }

    public editNote(id:any, text:string): Observable<any>{
        const formData = new FormData();
        formData.append('noteId', id);
        formData.append('text', text);
        return this.http.post<string>(`${this.apiServerUrl}/roomerang/editNote`, formData);
    }

    



    public updateWohngemeinschaft(wohngemeinschaft:Wohngemeinschaft): Observable<Wohngemeinschaft>{
        return this.http.post<Wohngemeinschaft>(`${this.apiServerUrl}/updateWG`, wohngemeinschaft)
    }

    public updatePutzplan(): any{
        return this.http.get<string>(`${this.apiServerUrl}/roomerang/newPutzplan`)
    }

    public deleteNote(id:any, options?: any): Observable<any>{
        const formData = new FormData();
        formData.append('noteId', id);
        


        return this.http.post<string>(`${this.apiServerUrl}/roomerang/deleteNote`,formData);
    }


}