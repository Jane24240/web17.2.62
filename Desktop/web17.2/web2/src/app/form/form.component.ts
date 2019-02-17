import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formGroup:FormGroup;
  constructor(
    private formBuild : FormBuilder
    ) { 
    
  }

  ngOnInit() {
   this.formGroup = this.formBuild.group({
     firstName: this.formBuild.control(''),
     lastName: [''],
     email:[''],
     age:[21]
   })
  }
  onSubmit(from: FormGroup){
    const{firstName,lastName,email,age}=from.value;
    const user = new User(firstName,lastName,email,age);
    console.log(user);
  }
}
