import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {MessageService} from "./message.service";
import {MessagesComponent} from "./component/messages/messages.component";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./component/home/home";

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
        MessagesComponent
    ],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
