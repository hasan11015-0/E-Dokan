import { Component } from "@angular/core";

@Component({

    selector:'search-component',
    templateUrl:'./container.search.html',
    styleUrls:[`./container.search.css`]
})


export class SearchComponent{

 searchValue:string='';

 changeSearchValue(eventData: any){
    //console.log((<HTMLInputElement>eventData.target).value);
   this.searchValue= (<HTMLInputElement>eventData.target).value;
 }

}