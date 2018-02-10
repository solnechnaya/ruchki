import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home/home";
import {CategoriesComponent} from "./component/categories/categories.component";
import {AboutMeComponent} from "./component/aboutMe/aboutMe.component";
import {ContactsComponent} from "./component/contacts/contacts.component";
import {ProductsComponent} from "./component/products/products.component";
import {SearchPageComponent} from "./component/search-page/search-page.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'category/:id', component: CategoriesComponent},
    {path: 'product/:id', component: ProductsComponent},
    {path: 'aboutMe', component: AboutMeComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'search-page', component: SearchPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
