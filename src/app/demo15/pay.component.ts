
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'pay',
    template: `<h1>这是支付页面</h1>
        <a routerLink="/send">去发货</a>
        <p>商品编号为{{myPid}}</p>
    `
})

export class PayComponent implements OnInit {
    myPid:string="";
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() {
        this.myAR.params.subscribe((data:any)=>{
            this.myPid=data.pid;
        })
     }
}