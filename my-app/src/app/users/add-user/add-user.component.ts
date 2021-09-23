import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
addUserForm: FormGroup= new FormGroup({})
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
this.addUserForm  = this.formBuilder.group({
  'Name': new FormControl(''),
  'email': new FormControl(''),
  'Phone Number': new FormControl(''),
  'city': new FormControl('')
})
  }

}
