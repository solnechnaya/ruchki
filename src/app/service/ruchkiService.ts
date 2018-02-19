import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; //Для взаимодействия с сервером и отправки запросов по протоколу http

import { Observable } from 'rxjs/observable'; // Эта библиотека реализует паттерн "асинхронный наблюдатель"
import {catchError, tap} from "rxjs/operators";
import { of }         from 'rxjs/observable/of';
import {Category} from "../model/category";
import {Product} from "../model/product";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
import {Model} from "../model/model";

//класс, который отвечает за взаимодействие с BE, его методы обращаются к BE, достают оттуда json-ы и превращают их во внутренние классы typescript-а
//методы "..POST.."(PUT) отправляют что-то в BE
@Injectable() //декоратор означает, что сервис сам может использовать другие сервисы (применяется к любому классу сервиса)
export class RuchkiService {

    private url = 'http://localhost:8080';  // URL to web api

    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<Category[]> {//получение списка категорий с BE
        const url = `${this.url+'/category/list'}`; //const url = `${this.url}` - базовый url, окончание соотвествующее
        return this.http.get<Category[]>(url).pipe(//hhtp.get - делает запрос типа get по этому url, в <> указывается, что мы хотим получить
                                                    //в данном случае model(класс Category) для дальнейшего использования
                                            //pipe - специальная функция, которая обрабатывает результаты выполнения get-а, у нее две спец функции: tap, catchError
            tap(_ => console.log(`получены категории`)),//выполняется, когда запрос прошел нормально
            catchError(this.handleError<Category[]>(`name`))//когда произошла ошибка. Выполняется метод handleError, выдающий на консоль ошибку
        );
    }

    getProducts(): Observable<Product[]> { //получение списка продуктов с BE
        const url = `${this.url+'/product/list'}`;
        return this.http.get<Product[]>(url).pipe(
            tap(_ => console.log(`получены продукты`)),
            catchError(this.handleError<Product[]>(`name`))
        );
    }

    getCategory(id:number): Observable<Category> { //получет одну категорию по id
        const url = `${this.url+'/category/' + id}`;
        return this.http.get<Category>(url).pipe(
            tap(_ => console.log(`получена категория`)),
            catchError(this.handleError<Category>(`name`))
        );
    }

    getProduct(id:number): Observable<Product> { //получет один продукт по id
        const url = `${this.url+'/product/' + id}`;
        return this.http.get<Product>(url).pipe(
            tap(_ => console.log(`получен продукт`)),
            catchError(this.handleError<Product>(`name`))
        );
    }
    //получает массив продуктов по запросу поиска
    search (val: Model): Observable<Product[]> {//в качестев параметра принимает модель, а возвр список продуктов
        return this.http.post<Product[]>(this.url+'/search', val, httpOptions).pipe(//через метод post, EP в BE по url /search
            tap((val: Product[]) => console.log(`ok`)),
            catchError(this.handleError<Product[]>('addModel'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


}