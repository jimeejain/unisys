import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IUserDetails } from 'src/models/user-details';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable()
export class UserDetails implements Resolve<IUserDetails> {
    constructor(private apiSvc: ApiService) {}

    resolve(): Observable<IUserDetails> {
        // return of({
        //     name: 'jimee',
        //     email: 'jimee493@gmail.com'
        // })
        return this.apiSvc.getDetails()
    }
}