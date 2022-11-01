import { Component } from "@angular/core";

@Component({
    selector:'header-component',
    templateUrl:'./header.component.html',
    styleUrls:['./headerStyles.css']
})

export class headerComponent{

    slogan:string='Bringing Joy through Time';
    source:string="/assets/logo.jpg";

}