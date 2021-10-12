import { Component } from "@angular/core"


@Component({
    //nombre de fragmento de codigo
    selector:'app-contador',
    template:`
    <h1>{{title}}</h1>

    <p>la base es de 5</p>

    <button (click)="acomular(base) ">{{base}}</button>

    <span>{{numero}}</span>

    <button (click)="acomular(-base) ">-{{base}}</button>

`
})
export class ContadorComponent{
    title = 'Contador App';
    numero: number =10;
    base: number=5;
    //primer forma
    //sumar(){
    //  this.numero+1;
    //}
    //restar(){
    //this.numero-1;
    //}
    //segunda forma
  
    acomular(valor: number){
      this.numero+=valor;
    }
  

}