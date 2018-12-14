import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';



@Injectable({
  providedIn: 'root'
})
export class ApiMockService implements InMemoryDbService{

  constructor() { }

  createDb() {
    return {
      details: [{
        id: 'me',
        name: 'Jimee Jain',
        email: 'jimee493@gmail.com'
      }]
    }
  }
}
