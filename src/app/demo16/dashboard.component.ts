import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dash',
    template: `<h1>这是主页</h1>
        <p>欢迎回来{{uname}}</p>
    `
})

export class DashComponent implements OnInit {
    uname:string="";
    constructor(private myAR:ActivatedRoute) { }

    ngOnInit() { 
        this.myAR.params.subscribe((data:any)=>{
            this.uname=data.uname;
        })
    }
}