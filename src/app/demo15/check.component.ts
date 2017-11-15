import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'check',
    template: `<h1>这是商品查看页面</h1>
        <button (click)="jumpToPay()">去支付</button>
    `
})

export class CheckComponent implements OnInit {
    constructor(private myRoute: Router,
        private myAR: ActivatedRoute) { }

    ngOnInit() {
        this.myAR.params.subscribe((data) => {
            console.log(data);
        })
    }
    jumpToPay() {
        this.myRoute.navigateByUrl('/pay/100')
    }
}