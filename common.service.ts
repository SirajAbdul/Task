import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  createUser(user: any){
     return this._http.post("http://localhost:3000/user", user)
  }
  getAllUser(){
    return this._http.get("http://localhost:3000/user")
  }
  updateUser(user: { employeename?: string; designatation?: string; salary?: string; email?: string; mobile?: string; qualification?: string; manager?: string; id?: any; }){
    return this._http.put("http://localhost:3000/user"+user.id,user)

  }
  deleteUser(user: { id: string; }){
    return this._http.delete("http://localhost:3000/user" + user.id)
  }

}
