import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

heroes: string[] =['spiderman','iron','hulk','ant'];
borrado: string='';
 borrarHerue(){
   
   this.borrado = this.heroes.shift() || '';
   
 }

}
