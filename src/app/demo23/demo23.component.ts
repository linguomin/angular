import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo23-name',
    template: `
        <h1>这是一个自定义管道类的案例</h1>
        <p>{{price|mycurrency:2}}</p>
        <p>{{1|sexchange:false}}</p>
        <p>{{0|sexchange:false}}</p>
        <p>{{1|sexchange:true}}</p>
        <p>{{0|sexchange:true}}</p>
        <p>{{1|sexchange}}</p>
        <p>{{0|sexchange}}</p>
    `
})

export class Demo23Component implements OnInit {
    price=20;
    constructor() { }

    ngOnInit() { }
}