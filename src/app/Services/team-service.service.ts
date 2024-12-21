import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {

  baseUrl:string='http://localhost:3000/'
  constructor(private http:HttpClient) {
 }
 get<T>(endpoint:string,id:number=0){
  return id!=0 
  ? this.http.get<T>(`${this.baseUrl}${endpoint}/${id}`)
  : this.http.get<T>(`${this.baseUrl}${endpoint}`);
 }
add<T>(endpoint:string,body:any){
return this.http.post<T>(`${this.baseUrl}${endpoint}`,body);
}
update<T>(endpoint:string,body:any,id:number){
  return this.http.put<T>(`${this.baseUrl}${endpoint}/${id}`,body);
}
delete<T>(endpoint:string,id:number){
  return this.http.delete<T>(`${this.baseUrl}${endpoint}/${id}`);
}
}
