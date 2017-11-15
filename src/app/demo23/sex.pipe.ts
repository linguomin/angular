import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sexchange'
})

export class SexChangePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
            if(args[0]==true||args[0]==null){
                return value==1?'男':'女';
            }else
                return value==1?'boy':'girl';
    }
}