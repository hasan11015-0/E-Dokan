import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { containerComponent } from './container/container.component';
import { headerComponent } from './container/header/header.component';
import { navComponent } from './container/nav/nav.component';
import { NotificationComponent } from './notification/notification.component';
import { CookieNotificationComponent } from './container/cookie-notification/cookie-notification.component';
import {SearchComponent} from './container/search/container.search'; 
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    containerComponent,
    navComponent,
    headerComponent,
    NotificationComponent,
    CookieNotificationComponent,
    SearchComponent,
    ProductComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
