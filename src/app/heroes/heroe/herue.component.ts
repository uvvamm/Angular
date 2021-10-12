import { Component } from "@angular/core";

 

 @Component({
     selector:'app-heroe',
     templateUrl:'herue.component.html'
 })

 export  class HerueComponent{
     nombre: string = 'ironman';
     edad: number = 45

     get nombreCapitalizado(){
         return this.nombre.toUpperCase();
     }

     obtenerNombre(): string{
         return `${this.nombre} - ${this.edad}`;
     }

     cambiarnombre():void{
         this.nombre='spider';
     }
     cambiarEdad():void{
         this.edad= 30;
     }

 }
    