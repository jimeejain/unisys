import { Injectable } from '@angular/core';
import { IUserDetails } from 'src/models/user-details';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export const baseEndPoint = 'https://mybackend.com/api/'
export const apiEndPoints = {
  userDetails: 'details/me'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private userData: IUserDetails = {
    name: 'Jimee Jain',
    email: 'jimee493@gmail.com'
  }

  constructor(private http: HttpClient) { }

  getDetails(): Observable<IUserDetails> {
    // return this.http.get<IUserDetails>(baseEndPoint + apiEndPoints.userDetails)
    return of({...this.userData})
  }

  saveDetails(updatedDetails: IUserDetails): Observable<null> {
    // return this.http.post<null>(baseEndPoint+ apiEndPoints.userDetails, updatedDetails)
    this.userData = {...updatedDetails};
    return  of(null);
  }
}
