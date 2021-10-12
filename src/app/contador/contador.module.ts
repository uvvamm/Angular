import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/Contador.Component';




@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule{}