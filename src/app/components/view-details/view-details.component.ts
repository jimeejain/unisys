import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUserDetails } from 'src/models/user-details';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  details: IUserDetails;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.details = this.activatedRoute.snapshot.data['details'];
  }

}
