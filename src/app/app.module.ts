import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MessageService} from "./message.service";
import {MessagesComponent} from "./component/messages/messages.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./component/home/home";
import { CategoriesComponent } from './component/categories/categories.component';

import {AboutMeComponent} from './component/aboutMe/aboutMe.component';
import { ContactsComponent } from './component/contacts/contacts.component';

import {RuchkiService} from "./service/ruchkiService";
import {ProductsComponent} from "./component/products/products.component";

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
        CategoriesComponent,
        AboutMeComponent,
        ContactsComponent,
        ProductsComponent
    ],
    providers: [RuchkiService, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
