import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home";
import {CategoriesComponent} from "./component/categories/categories.component";
import {AboutMeComponent} from "./component/aboutMe/aboutMe.component";
import {ContactsComponent} from "./component/contacts/contacts.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'contacts', component: ContactsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
