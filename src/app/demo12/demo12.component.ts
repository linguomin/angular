import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'demo12',
    templateUrl: './demo12.component.html'
})

export class Demo12Component implements OnInit {
    constructor(private myRouter:Router) { }
    uname:string="";
    ngOnInit() { }
    jump(){
        this.myRouter.navigateByUrl('demo13')
    }
    jumpToDemo14(){
        this.myRouter.navigateByUrl('demo14/'+this.uname)
    }
}