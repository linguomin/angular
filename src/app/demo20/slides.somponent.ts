import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'slides',
    template: `
        <h2>这是轮播图片</h2>
    `
})

export class SlidesComponent implements OnInit {
    slideCount:number=10;
    constructor() { }

    ngOnInit() { }
}