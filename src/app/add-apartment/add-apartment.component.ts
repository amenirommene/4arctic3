import { ApartmentService } from './../services/apartment.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {

  constructor(private ac:ActivatedRoute, private apartments:ApartmentService){}
  myForm! : FormGroup;
  ngOnInit(){
    this.myForm= new FormGroup({
      floorNum : new FormControl("",[Validators.required, Validators.pattern("[1-9]*")]),
      appartNum : new FormControl("",[Validators.required, Validators.pattern("[1-9]*")]),
      surface : new FormControl("",Validators.required),
      terrace : new FormControl(""),
      category : new FormControl("",Validators.required),
      surfaceTerrace : new FormControl("",Validators.required),
      description : new FormControl("",Validators.required),
      residence : new FormControl("",Validators.required),
     })
    this.ac.paramMap.subscribe(params=>{
      console.log(params.get('id'));
      this.apartments.getApartmentById(Number(params.get('id'))).subscribe(
        res=>this.myForm.patchValue(res))});

  }

  get apartNum(){
    return this.myForm.get('appartNum');
  }

  get floorNum(){
    return this.myForm.get('floorNum');
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
