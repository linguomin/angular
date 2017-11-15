import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'inbox',
    template: `
    <h1>这是收件箱</h1>
    <ul>
        <li>已收邮件1</li>
        <li>已收邮件2</li>
        <li>已收邮件3</li>
        <li>已收邮件4</li>
       
    </ul>    `
})

export class InboxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}