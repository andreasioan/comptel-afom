import { Pipe, PipeTransform } from '@angular/core';

import * as Moment from 'moment';

@Pipe({
	name: 'niceDate'
})
export class NiceDatePipe implements PipeTransform {
	transform(origDate: string): string {
		return Moment(origDate).format('DD/MM/YY HH:mm');
	}
}
