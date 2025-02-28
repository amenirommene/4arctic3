import { Router } from '@angular/router';
import { Residence } from './../core/models/residence';
import { ResidenceService } from './../services/residence.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {

  constructor(private rservice:ResidenceService, private myRouter:Router){}
  myForm! : FormGroup;
  ngOnInit(){
   this.myForm= new FormGroup({
    name : new FormControl(""),
    adress : new FormControl(""),
    location : new FormControl(""),
    status : new FormControl("")
   })
}
r : Residence = new Residence();
get address(){
  return this.myForm.get('adress');
}
add(){
  console.log(this.myForm.value);
 /* this.r.address=this.address?.value;
  this.r.address=this.address?.value;*/
this.rservice.addResidence(this.myForm.value).subscribe(
  ()=>this.myRouter.navigateByUrl("home"));
}
}
