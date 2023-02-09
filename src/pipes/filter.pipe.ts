import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByPosition'
})
export class FilterByPositionPipe implements PipeTransform {

    transform(value: any[], position: string): any[] {
        return value.filter(item => item.position === position);
    }
}