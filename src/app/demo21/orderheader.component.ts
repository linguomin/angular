import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'orderheader',
    template: `
        <h5>我是页头</h5>
    `
})

export class OrderHeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
    checkUserLogin(){
        return true;
    }
}