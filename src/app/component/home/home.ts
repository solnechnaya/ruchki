import {AfterContentInit, Component, Input, OnInit} from "@angular/core";
import {Category} from "../../model/category";
import {RuchkiService} from "../../service/ruchkiService";
declare var $: any;

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent implements AfterContentInit, OnInit {

    categories : Category[] = [];

    constructor(private ruchkiService:RuchkiService) { }

    getCategories(): void {
        this.ruchkiService.getCategories().subscribe(
            categories => this.categories = categories
        );
    }

    ngOnInit(): void {
        this.getCategories();
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