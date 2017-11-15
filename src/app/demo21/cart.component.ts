import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
    selector: 'mycart',
    template: `
    <h1>这是购物车</h1>
    <orderheader #header></orderheader>
    <ul *ngIf="isUserLogin">
        <li>商品1</li>
        <li>商品1</li>
        <li>商品1</li>
    </ul>
    <a routerLink="/orderConfirm">去结算</a>
    `
})
export class CartComponent implements OnInit {
    isUserLogin:boolean=false;
    @ViewChild( "header") myheader:any;
    constructor() { }

    ngOnInit() { 

       this.isUserLogin =this.myheader.checkUserLogin();
    }

}