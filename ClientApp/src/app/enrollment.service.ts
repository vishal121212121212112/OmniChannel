import { Injectable,Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  _url = "";
  _baseurl = "";
  constructor(private _http:HttpClient, @Inject('BASE_URL') baseUrl: string) 
  {
    this._baseurl = baseUrl;
  }
  enroll (user:User)
  {
    debugger;
    return this._http.post<any>(this._baseurl + 'api/SampleData/InsertEnrollmentData',user);
  }
}
