import { Component} from "@angular/core";

@Component({

    selector:'nav-component',
    templateUrl:'./nav.component.html',
    styleUrls:['./navStyles.css']
})

export class navComponent{
    getSitename() {

        return "Time Zone";
    }

}