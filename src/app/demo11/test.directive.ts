import { Directive,ElementRef ,OnInit} from '@angular/core';

@Directive({ selector: '[test]' })
export class TestDirective implements OnInit{
    constructor(private el:ElementRef) { 
        console.log(
           "custom directive is called"
        )
    }
    ngOnInit(){
        console.log(
            "in onInit lifecycle hook"
        );
        this.el.nativeElement.style.visibility="hidden";
    }
}