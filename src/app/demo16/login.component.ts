import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    template:`<h1>这是登录页面</h1>
            用户名:<input type="text" placeholder="用户名" [(ngModel)]="uname"><br> 
            <button (click)="logIn()">登录</button>   
             <a [routerLink]="['/dash',{uname:this.uname}]">登录</a>
    `
})

export class LoginComponent implements OnInit {
    uname:string="";
    constructor(private myRouter:Router) { }
    ngOnInit() { }
    logIn(){
        this.myRouter.navigate(['/dash',{uname:this.uname}])
    }
}