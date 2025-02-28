import { Residence } from './../core/models/residence';
import { ResidenceService } from './../services/residence.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {

  //injecter le service activatedRoute sous le nom de ac
  constructor(private rservice:ResidenceService, private ac:ActivatedRoute, private myRouter:Router){

  }
  r : Residence = new Residence();
  ngOnInit(){
   //console.log(this.ac.snapshot.params['id']);
   this.ac.paramMap.subscribe(res=>{
    console.log(res.get('id'));
    this.rservice.getResidenceById(Number(res.get('id'))).
    subscribe(res=>this.r=res)
   });
  // this.myRouter.navigateByUrl("test");
  }

}
