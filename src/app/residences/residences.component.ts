import { Router } from '@angular/router';
import { ResidenceService } from './../services/residence.service';
import { Residence } from './../core/models/residence';
import { Component, OnInit } from '@angular/core';
//@Component : décorateur de classe : déclarer que la classe actuelle
//est la classe d'un composant
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
  //providers:[ResidenceService]
})
export class ResidencesComponent implements OnInit {

constructor(private rs:ResidenceService, private router:Router){
  console.log("je suis le constructor");
}
ngOnInit(){
  console.log("je suis ngOnInit");
  this.rs.getAll().subscribe(res=>this.listResidences=res);

}
name : string = "arctic3";
message : string = "";
prop : string = "test";
text : string = "text";
address : string =""; //le contenu de l'input contenant ngModel
f(nb: number){
  this.message="event binding";
  console.log("event binding" + nb)
}
showLocation(pos:number){
  this.show=true;
  this.position=pos;
}
delete(id:number){
  this.rs.deleteResidence(id).subscribe(
    ()=>
      this.rs.getAll().subscribe(res=>this.listResidences=res));
}
getColor(s : string){
  if (s == "Disponible") {
    return "green";
  }
  else if (s == "En Construction"){
    return "blue";
  }
  else if (s == "Vendu"){
    return "red";
  }
  else {
    return "";
  }
}
getLocation(x:Residence){
}

addFavoris(x:Residence){
this.favoris.push(x);
}
position : number = -1;
show : boolean = false;
showAdress : boolean = false;
id : number = -1;
favoris : Residence[] = [];
listResidences:Residence[]=[];


}
