import { Residence } from './../core/models/residence';
import { Component } from '@angular/core';
//@Component : décorateur de classe : déclarer que la classe actuelle
//est la classe d'un composant
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
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
