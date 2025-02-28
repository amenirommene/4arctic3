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
    ApartmentNb : new FormControl("",[Validators.required, Validators.pattern("[1-9]*")]),
    surface : new FormControl("",Validators.required),
    category : new FormControl("",Validators.required),
    surfaceTerrace : new FormControl("",Validators.required),
    description : new FormControl("",Validators.required),
    residence : new FormControl("",Validators.required),
   })
  }

  get apartNum(){
    return this.myForm.get('ApartmentNb');
  }

  get floorNum(){
    return this.myForm.get('FloorNb');
  }

  get surface(){
    return this.myForm.get('surface');
  }
  get terrace(){
    return this.myForm.get('terrace');
  }
  get category(){
    return this.myForm.get('category');
  }
  get surfaceTerrace(){
    return this.myForm.get('surfaceTerrace');
  }
  get description(){
    return this.myForm.get('description');
  }
  get residence(){
    return this.myForm.get('residence');
  }
}
