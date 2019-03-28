import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {EnrollmentService} from '../enrollment.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit() {
  }
  topics =['Angular','React'];
  userModel = new User('','rob@gmail.com',99789778,'Default');
  topicHasError = false;

  validateTopic(value){
    if(value == 'Default')
    {
      this.topicHasError = true;
    }
    else
    {
      this.topicHasError = false;
    }
  }
  onSubmit()
  {
    this._enrollmentService.enroll(this.userModel).subscribe(
      data => console.log('Success!',data),
      error => console.error('Error!',error)
    )
  }
}
