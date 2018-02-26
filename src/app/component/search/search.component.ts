import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Route} from "@angular/compiler/src/core";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  find(search : string) : void {//в качестве параметра то, что набрано в строке поиска
    console.log(search);
    this.router.navigate(['/search-page', search])//переход на страницу результата поиска через router
  }                                 //'/search-page'-адрес страницы, search-передача параметра

}
