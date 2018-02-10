import {AfterContentInit, Component, OnInit} from "@angular/core";
import {Category} from "../../model/category";
import {RuchkiService} from "../../service/ruchkiService";
import {Product} from "../../model/product";
declare var $: any;

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent implements AfterContentInit, OnInit {

    categories : Category[] = [];
    products : Product[] = [];

    constructor(private ruchkiService:RuchkiService) { }

    getCategories(): void {
        this.ruchkiService.getCategories().subscribe(//subscribe -спец метод класса Observable, кот позволяет вып какую-либо функцию после получения ответа
            categories => this.categories = categories//subscribe вернет массив категорий и он запишется в локальную переменную categories
        );                      // в this.categories попадает результат нашего get-а (массив категорий)
    }

    getProducts(): void {
        this.ruchkiService.getProducts().subscribe(
            products => this.products = products
        );
    }

    ngOnInit(): void { //выполняется при создании класса
        this.getCategories();
        this.getProducts();
    }

    ngAfterContentInit(): void {
        $('.sl').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'ease-in',
            dots: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 728, settings: {
                    centerMode: true, centerPadding: '10px', slidesToShow: 1, slidesToScroll: 1
                }
            }]
        });
    }
}