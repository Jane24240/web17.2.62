import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

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
     lastName: ['']
   })
  }
  onSubmit(from: FormGroup){
    const{firstName,lastName}=from.value;
    const user = new User(firstName,lastName);
    console.log(User);
    
  }
}
