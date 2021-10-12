import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HerueComponent } from './heroe/herue.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
    declarations:[
    HerueComponent,
    ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],imports :[
        CommonModule

    ]

})
export class HeroesModule {}