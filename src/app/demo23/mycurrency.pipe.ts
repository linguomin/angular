import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mycurrency'
})

export class MyCurrencyPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return '$'+value.toFixed(args[0]);
    }
}