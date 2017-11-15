import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MyHttpService {
    constructor(private http: Http) { }
    sendRequest(MyUrl:string){
        return this.http.get(MyUrl)
            .map((response: Response) => response.json());
    }
}