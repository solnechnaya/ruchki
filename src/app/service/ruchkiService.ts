import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import {catchError, tap} from "rxjs/operators";
import {Model} from "../model/model";
import { of }         from 'rxjs/observable/of';
import {Category} from "../model/category";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RuchkiService {

    private url = 'http://localhost:8080';  // URL to web api
    private postUrl = 'http://localhost:8080/test';

    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<Category[]> {
        const url = `${this.url+'/category/list'}`;
        return this.http.get<Category[]>(url).pipe(
            tap(_ => console.log(`получены категории`)),
            catchError(this.handleError<Category[]>(`name`))
        );
    }

    testPost (val: Model): Observable<Model> {
        return this.http.post<Model>(this.postUrl, val, httpOptions).pipe(
            tap((val: Model) => console.log(`added model value=${val.value}`)),
            catchError(this.handleError<Model>('addModel'))
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