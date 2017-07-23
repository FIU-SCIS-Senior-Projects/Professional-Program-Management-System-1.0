import {  PipeTransform, Pipe } from '@angular/core';
import { Isession } from './session';

@Pipe({
    name: 'sessionFilter'
})
export class sessionFilterPipe implements PipeTransform {

    transform(value: Isession[], filterBy: string): Isession[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((session: Isession) =>
            session.sessionName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
