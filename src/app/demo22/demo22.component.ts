import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'demo22',
    templateUrl: './demo22.component.html'
})
export class Demo22Component implements OnInit  {
    nowDate=new Date;
    stu={
        name:'lucy',
        age:20
    };
    title='It is Main Page';
    price=20.354555;
    totalPrice=300.5;
    trendAge=20.3;
    info="hello word";
    tip="It is a tip"
    constructor() { }

    ngOnInit() { }
}