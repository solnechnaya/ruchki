import {Component, OnInit} from '@angular/core';
import {Category} from "../../model/category";
import {RuchkiService} from "../../service/ruchkiService";
import {Product} from "../../model/product";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

// Компонент управляет отображением представления на экране
@Component({ //Декоратор @Component позволяет идентифицировать класс как компонент
    selector: 'categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit { //export для того, чтобы класс мог использоваться в других модулях

    categories: Category[] = [];
    products: Product[] = [];
    categoryName: string;

    constructor(private ruchkiService: RuchkiService, private route: ActivatedRoute, private router: Router) {
        router.events.subscribe( event => {//подписка(subscribe) на события (event) из роутинга

            if (event instanceof NavigationEnd) { //как только произойдет событие (в данном случае"NavigationEnd" -> выполнение методов
                this.getCategories();
                this.getProducts();
                this.getCategory();
            }
        });
    }

    getCategories(): void { //вызывает массив категорий
        this.ruchkiService.getCategories().subscribe(
            categories => this.categories = categories
        );
    }

    getProducts(): void { //возвращает отфильтрованные продукты
        this.products = [];//обнуление массива продуктов
        this.ruchkiService.getProducts().subscribe( //subscribe -подписка, благодаря ему метод getProducts выполниться, когда уже все продукты будут получены от BE, означает, что в лябду прилетят продукты, полученные с BE
            products => { //все продукты окажутся в переменной product //=> - лямбда
                products.forEach((element) => {//fotEach - пройти по массиву продуктов и каждый раз помещать следующий продукт в переменную element
                                            //element - новая переменная лямбды
                    if (element.categoriesId == +this.route.snapshot.paramMap.get('id')) { //фильтрация по id; '+this.route.snapshot.paramMap.get('id')'-получение id из рута
                        this.products.push(element); //через push помещаем element в член класса; .push(element) - в JS таким образом добавляется массив
                    }
                });
            }
        );
    }

    getCategory(): void { //получение имени категории по id
        this.ruchkiService.getCategory(+this.route.snapshot.paramMap.get('id')).subscribe(//"+" перед строкой преобразует строку в число
            category => this.categoryName = category.name
        );
    }
    // выполнение методов при запуске страницы
    ngOnInit(): void {
        this.getCategories();
        //this.getProducts();
        //this.getCategory();
    }

}
