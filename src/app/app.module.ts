import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MessageService} from "./message.service";
import {MessagesComponent} from "./component/messages/messages.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./component/home/home";
import { ToysComponent } from './component/toys/toys.component';
import { MobilsComponent } from './component/mobils/mobils.component';
import { AccessoryComponent } from './component/accessory/accessory.component';
import { OtherComponent } from './component/other/other.component';
import {AboutMeComponent} from './component/aboutMe/aboutMe.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { CategoryComponent } from './component/category/category.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MessagesComponent,
        ToysComponent,
        MobilsComponent,
        AccessoryComponent,
        OtherComponent,
        AboutMeComponent,
        ContactsComponent,
        CategoryComponent
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
