import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home";
import {ToysComponent} from "./component/toys/toys.component";
import {MobilsComponent} from "./component/mobils/mobils.component";
import {AccessoryComponent} from "./component/accessory/accessory.component";
import {OtherComponent} from "./component/other/other.component";
import {AboutMeComponent} from "./component/aboutMe/aboutMe.component";
import {ContactsComponent} from "./component/contacts/contacts.component";
import {CategoryComponent} from "./component/category/category.component";


const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'category', component: CategoryComponent},
    {path: 'toys', component: ToysComponent},
    {path: 'mobils', component: MobilsComponent},
    {path: 'accessory', component: AccessoryComponent},
    {path: 'other', component: OtherComponent},
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'contacts', component: ContactsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
