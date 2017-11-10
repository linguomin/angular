import {Component} from '@angular/core';

@Component({
    selector:'demo03',
    template:`
        <ul>
            <li *ngFor="let item of myList;let myIndex=index">{{myIndex}}:{{item}}</li>
        </ul>
    `
})
export class Demo03Component{
    myList=[100,200,300,400,500];
}