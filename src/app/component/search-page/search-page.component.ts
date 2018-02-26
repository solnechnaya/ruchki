import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {Category} from "../../model/category";
import {RuchkiService} from "../../service/ruchkiService";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

    categories: Category[] = [];
    products: Product[] = [];
    private sub: any;
    search: string;

    constructor(private ruchkiService: RuchkiService, private route: ActivatedRoute, private router: Router) {

    }

    getCategories(): void { //вызывает массив категорий
        this.ruchkiService.getCategories().subscribe(
            categories => this.categories = categories
        );
    }

    searchProducts(search:string): void { //получает продукты по поиску
        this.products = [];//обнуление массива продуктов
        this.ruchkiService.search({value:search}).subscribe( //в вызываемом методе в параметре создается объект-модель:({...})в поле модели - строка поиска
            products => { //все продукты окажутся в переменной product //=> - лямбда
                products.forEach((element) => {//fotEach - пройти по массиву продуктов и каждый раз помещать следующий продукт в переменную element
                    //element - новая переменная лямбды
                console.log(element);//выводит на консоль, что мы получаем с BE
                    this.products.push(element); //через push помещаем element в член класса; .push(element) - в JS таким образом добавляется массив
                });
            }
        );
    }

  ngOnInit(): void {
                        //запускается один раз при инициализации класса, благодаря subscribe(подписке на роут) передастся при переходе
      this.sub = this.route.params.subscribe(params => {//так ловятся данные через роут из search.component
          this.search = params['search'];//'search' - переменная в search.component(слово, написанное с строке поиска)
          console.log("пришло - " +this.search);

          this.searchProducts(this.search);//вызов метода получения продуктов по результату поиска

      });

      this.getCategories();
  }

}
