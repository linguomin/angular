import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'myInput',
    template: `
        <input type="text">`
})
export class MyInputComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}