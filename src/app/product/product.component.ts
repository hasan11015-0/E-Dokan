import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

products =[

  {id:1,name:'Minimalists analog watch',price:15000,color:'Black',avaliable:'Avaliable',image:'./assets/analog_watch1.jpg'},
  {id:2,name:'Analog Men Quartz Stainless Steel',price:63950,color:'Brown',avaliable:'Avaliable',image:'./assets/analog_watch2.jpg'},
  {id:3,name:'Casio analog watch',price:10000,color:'Black',avaliable:'Avaliable',image:'./assets/analog_watch4.jpg'},
  {id:4,name:'Skagen Signatur Three-Hand Minimalist Watch',price:10239,color:'Black',avaliable:'Not Avaliable',image:'./assets/analog_watch5.jpg'},
  {id:5,name:'Minimaalists Digital watch',price:20950,color:'Black',avaliable:'Avaliable',image:'./assets/analog_watch6.jpg'},
  {id:6,name:'Steel analog watch',price:15950,color:'Black',avaliable:'Not Avaliable',image:'./assets/analog_watch7.jpg'},

];

}
