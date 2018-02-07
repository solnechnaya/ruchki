import { Component, OnInit } from '@angular/core';
import {RuchkiService} from "../../service/ruchkiService";
import {Category} from "../../model/category";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

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
