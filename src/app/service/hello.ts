import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import {catchError, tap} from "rxjs/operators";
import {Model} from "../model/model";
import { MessageService } from '../message.service';
import { of }         from 'rxjs/observable/of';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HelloService {

    private url = 'http://localhost:8080/appname';  // URL to web api
    private postUrl = 'http://localhost:8080/test';

    constructor(private http: HttpClient, private messageService: MessageService) {
    }

    getName(): Observable<Model> {
        const url = `${this.url}`;
        return this.http.get<Model>(url).pipe(
            tap(_ => this.log(`fetched name`)),
            catchError(this.handleError<Model>(`name`))
        );
    }

    testPost (val: Model): Observable<Model> {
        return this.http.post<Model>(this.postUrl, val, httpOptions).pipe(
            tap((val: Model) => this.log(`added model value=${val.value}`)),
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

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }
}