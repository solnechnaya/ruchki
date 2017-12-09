import {AfterContentInit, Component, Input, OnInit} from "@angular/core";
declare var $: any;

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})

export class HomeComponent implements AfterContentInit {
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