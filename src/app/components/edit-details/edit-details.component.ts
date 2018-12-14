import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUserDetails } from 'src/models/user-details';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  details: IUserDetails;
  userInput: IUserDetails;
  constructor(
    private activateRoute: ActivatedRoute,
    private apiSvc: ApiService
  ) { }

  ngOnInit() {
    this.details = this.activateRoute.snapshot.data['details']
    this.reset();
  }

  submitForm(){
    //post call
    this.apiSvc.saveDetails(this.userInput).subscribe(() => {
      this.details = {...this.userInput};
    }, () => {
      console.log('Unable to save content');
    })
  }

  reset() {
    this.userInput = {...this.details}
  }

}
