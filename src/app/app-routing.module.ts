import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home";
import {ToysComponent} from "./component/toys/toys.component";
import {MobilsComponent} from "./component/mobils/mobils.component";
import {AccessoryComponent} from "./component/accessory/accessory.component";
import {OtherComponent} from "./component/other/other.component";


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'toys', component: ToysComponent},
    {path: 'mobils', component: MobilsComponent},
    {path: 'accessory', component: AccessoryComponent},
    {path: 'other', component: OtherComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
