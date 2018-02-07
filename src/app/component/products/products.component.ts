import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {RuchkiService} from "../../service/ruchkiService";
import {Product} from "../../model/product";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

// Компонент управляет отображением представления на экране
@Component({ //Декоратор @Component позволяет идентифицировать класс как компонент
    selector: 'product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit { //export для того, чтобы класс мог использоваться в других модулях

    categories: Category[] = [];
    products: Product[] = [];
    categoryName: string  = "";
    product: Product = new Product;

    constructor(private ruchkiService: RuchkiService, private route: ActivatedRoute, private router: Router) {
        router.events.subscribe( event => {//подписка(subscribe) на события (event) из роутинга

            if (event instanceof NavigationEnd) { //как только произойдет событие (в данном случае"NavigationEnd" -> выполнение методов
                this.getCategories();
                this.getCategory();
                this.getProduct();
            }
        });
    }

    getCategories(): void { //вызывает массив категорий
        this.ruchkiService.getCategories().subscribe(
            categories => this.categories = categories
        );
    }

    getCategory(): void { //получение имени категории по id
        this.ruchkiService.getCategory(+this.route.snapshot.paramMap.get('id')).subscribe(//"+" перед строкой преобразует строку в число
            category => this.categoryName = category.name
        );
    }

    getProduct(): void {
        this.ruchkiService.getProduct(+this.route.snapshot.paramMap.get('id')).subscribe(//"+" перед строкой преобразует строку в число
            product => this.product = product
        );
    }

   // выполнение методов при запуске страницы
    ngOnInit(): void {
        this.getCategories();
        this.getCategory();
        this.getProduct();
    }

}
