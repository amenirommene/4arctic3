import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {

  myForm! : FormGroup;
  ngOnInit(){
   this.myForm= new FormGroup({
    FloorNb : new FormControl("",[Validators.required, Validators.pattern("[1-9]*")]),
    ApartmentNb : new FormControl("",[Validators.required, Validators.pattern("[1-9]*")])
   })
  }

  get ApartmentNb(){
    return this.myForm.get('ApartmentNb');
  }

  get FloorNb(){
    return this.myForm.get('FloorNb');
  }
}
