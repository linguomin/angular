import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router'

@Component({
    selector: 'myorderConfirm',
    template: `
        <h1>这是订单页面</h1>
        <button (click)="jump('/orderConfirm/step1')">确认订单信息</button>
        <button (click)="jump('/orderConfirm/step2')">进行支付</button>
        <router-outlet></router-outlet>
   `
})

export class OrderConfirmComponent implements OnInit {

    constructor(private myRouter:Router) { }

    ngOnInit() { }
    jump(desPath:string){
        this.myRouter.navigateByUrl(desPath);
    }
}