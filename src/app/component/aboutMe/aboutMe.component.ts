import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {RuchkiService} from "../../service/ruchkiService";

@Component({
  selector: 'aboutMe',
  templateUrl: './aboutMe.component.html',
  styleUrls: ['./aboutMe.component.css']
})
export class AboutMeComponent implements OnInit {

    categories: Category[] = [];

  constructor(private ruchkiService:RuchkiService) { }

    getCategories(): void { //вызывает массив категорий
        this.ruchkiService.getCategories().subscribe(
            categories => this.categories = categories
        );
    }

  ngOnInit() {
    this.getCategories();
  }


}
