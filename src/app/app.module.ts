import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HelloService} from "./service/hello";
import {AppRoutingModule} from "./app-routing.module";
import {TestComponent} from "./component/test/test";
import {MessageService} from "./message.service";
import {MessagesComponent} from "./component/messages/messages.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        TestComponent,
        MessagesComponent
    ],
    providers: [ HelloService, MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
